const db = require('../models');
const Proveedor = db.Proveedor; // O también: const { Proveedor } = db;

console.log('Modelo Proveedor:', Proveedor);

// Obtener todos los proveedores
exports.getProveedores = async (req, res) => {
    try {
      const proveedores = await Proveedor.findAll();
      res.json(proveedores);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener proveedores' });
    }
  };
  
  // Obtener un proveedor por ID
  exports.getProveedorById = async (req, res) => {
    try {
      const proveedor = await Proveedor.findByPk(req.params.id);
      if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
      res.json(proveedor);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el proveedor' });
    }
  };
  
  // Crear un proveedor
  exports.createProveedor = async (req, res) => {
    try {
      const nuevoProveedor = await Proveedor.create(req.body);
      res.status(201).json(nuevoProveedor);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear proveedor' });
    }
  };
  
  // Actualizar un proveedor
  exports.updateProveedor = async (req, res) => {
    try {
      const proveedor = await Proveedor.findByPk(req.params.id);
      if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
  
      await proveedor.update(req.body);
      res.json(proveedor);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar proveedor' });
    }
  };
  
  // Eliminar un proveedor
  exports.deleteProveedor = async (req, res) => {
    try {
      const proveedor = await Proveedor.findByPk(req.params.id);
      if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });
  
      await proveedor.destroy();
      res.json({ message: 'Proveedor eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar proveedor' });
    }
  };