const { DetalleVenta } = require('../models');

exports.getDetallesVenta = async (req, res) => {
  try {
    const detalles = await DetalleVenta.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener detalles de venta' });
  }
};

exports.getDetalleVentaById = async (req, res) => {
    try {
        const detalle = await DetalleVenta.findByPk(req.params.id);
        if (!detalle) return res.status(404).json({ error: 'Detalle de venta no encontrado' });
        res.json(detalle);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener detalle de venta' });
    }
};

exports.createDetalleVenta = async (req, res) => {
    try {
        const nuevoDetalle = await DetalleVenta.create(req.body);
        res.status(201).json(nuevoDetalle);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear detalle de venta' });
    }
};

exports.updateDetalleVenta = async (req, res) => {
    try {
        const detalle = await DetalleVenta.findByPk(req.params.id);
        if (!detalle) return res.status(404).json({ error: 'Detalle de venta no encontrado' });

        await detalle.update(req.body);
        res.json(detalle);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar detalle de venta' });
    }
};

exports.deleteDetalleVenta = async (req, res) => {
    try {
        const detalle = await DetalleVenta.findByPk(req.params.id);
        if (!detalle) return res.status(404).json({ error: 'Detalle de venta no encontrado' });

        await detalle.destroy();
        res.json({ mensaje: 'Detalle de venta eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar detalle de venta' });
    }
};