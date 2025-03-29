const { Venta } = require('../models');

exports.getVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ventas' });
  }
};

exports.getVentaById = async (req, res) => {
    try {
        const venta = await Venta.findByPk(req.params.id);
        if (!venta) return res.status(404).json({ error: 'Venta no encontrada' });
        res.json(venta);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener venta' });
    }
};

exports.createVenta = async (req, res) => {
    try {
        const nuevaVenta = await Venta.create(req.body);
        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear venta' });
    }
};

exports.updateVenta = async (req, res) => {
    try {
        const venta = await Venta.findByPk(req.params.id);
        if (!venta) return res.status(404).json({ error: 'Venta no encontrada' });

        await venta.update(req.body);
        res.json(venta);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar venta' });
    }
};

exports.deleteVenta = async (req, res) => {
    try {
        const venta = await Venta.findByPk(req.params.id);
        if (!venta) return res.status(404).json({ error: 'Venta no encontrada' });

        await venta.destroy();
        res.json({ mensaje: 'Venta eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar venta' });
    }
};