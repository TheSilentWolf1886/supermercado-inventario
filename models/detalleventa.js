'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleVenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Cada detalle de venta pertenece a un producto
      DetalleVenta.belongsTo(models.Producto, { foreignKey: 'producto_id' });
    }
  }
  DetalleVenta.init({
    venta_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'DetalleVenta',
  });
  return DetalleVenta;
};