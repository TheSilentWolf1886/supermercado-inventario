const { Producto } = require('../models');

exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    const nuevoProducto = await Producto.create({ nombre, descripcion, precio, stock, categoria_id });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    await producto.update({ nombre, descripcion, precio, stock, categoria_id });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    await producto.destroy();
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};
