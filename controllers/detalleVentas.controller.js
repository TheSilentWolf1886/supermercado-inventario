const { DetalleVenta, Producto, sequelize } = require('../models');

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
  const { venta_id, producto_id, cantidad } = req.body;

  const transaction = await sequelize.transaction();

  try {
    // 1. Buscar producto
    const producto = await Producto.findByPk(producto_id, { transaction });
    if (!producto) {
      await transaction.rollback();
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // 2. Verificar stock suficiente
    if (producto.stock < cantidad) {
      await transaction.rollback();
      return res.status(400).json({ error: 'Stock insuficiente' });
    }

    // 3. Calcular subtotal
    const subtotal = producto.precio * cantidad;

    // 4. Crear el detalle de venta
    const nuevoDetalle = await DetalleVenta.create({
      venta_id,
      producto_id,
      cantidad,
      subtotal
    }, { transaction });

    // 5. Actualizar el stock del producto
    producto.stock -= cantidad;
    await producto.save({ transaction });

    // 6. Confirmar transacción
    await transaction.commit();
    res.status(201).json(nuevoDetalle);

  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ error: 'Error al crear detalle de venta', detalle: error.message });
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