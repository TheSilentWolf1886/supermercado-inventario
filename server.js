require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec= require('./swagger.js');
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
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Usar rutas

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
