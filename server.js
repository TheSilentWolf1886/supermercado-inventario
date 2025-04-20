require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');
const cors = require('cors');
const sequelize = require('./config/database');
const db = require('./models');

// Importar rutas
const productoRoutes = require('./routes/productos.routes');
const categoriaRoutes = require('./routes/categorias.routes');
const proveedorRoutes = require('./routes/proveedores.routes');
const clienteRoutes = require('./routes/clientes.routes');
const ventaRoutes = require('./routes/ventas.routes');
const detalleVentaRoutes = require('./routes/detalleVentas.routes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

//Swagger
// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


let oidcConfig;

// configurar oidc
async function configurarOIDC() {
  const client = await import("openid-client");

  oidcConfig = await client.discovery(
    new URL(process.env.ISSUER_URL),
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    undefined,
    { execute: [client.allowInsecureRequests] } // ← enables HTTP for testing
  );

  async function autenticarBearer(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Falta el token de autenticación" });
    }
    const token = auth.slice(7);

    try {
      // Analizar token
      const introspection = await client.tokenIntrospection(oidcConfig, token);
      if (!introspection.active) {
        throw new Error("El token no está activo");
      }
      req.user = introspection;
      next();
    } catch (err) {
      console.error("Error en la validación del token:", err.message);
      res.status(401).json({ error: "Token invalido o expirado" });
    }
  }

  // Proteger estas rutas
  app.post('/models/*', autenticarBearer)
  app.put('/models/*', autenticarBearer)
  app.delete('/models/*', autenticarBearer)

  app.use('/models/producto', productoRoutes);
  app.use('/models/categoria', categoriaRoutes);
  app.use('/models/proveedor', proveedorRoutes);
  app.use('/models/cliente', clienteRoutes);
  app.use('/models/venta', ventaRoutes);
  app.use('/models/detalleventa', detalleVentaRoutes);


  app.get('/', (req, res) => {
    res.send('API de Inventario del Supermercado');
  });

  db.sequelize.sync()
    .then(() => console.log('✅ Base de datos sincronizada con Sequelize'))
    .catch((error) => console.error('❌ Error al sincronizar DB:', error));

  sequelize.authenticate()
    .then(() => console.log('✅ Conexión a PostgreSQL exitosa'))
    .catch(err => console.error('❌ Error de conexión:', err));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
}

// Usar rutas

configurarOIDC().catch((err) => {
  console.error("OIDC setup failed:", err);
  process.exit(1);
});
