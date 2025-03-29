require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API de Inventario del Supermercado');
});

sequelize.authenticate()
  .then(() => console.log('✅ Conexión a PostgreSQL exitosa'))
  .catch(err => console.error('❌ Error de conexión:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
