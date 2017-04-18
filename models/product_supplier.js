/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_supplier', {
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_supplier: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'supplier',
        key: 'id_supplier'
      }
    },
    id_product: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'id_product'
      }
    }
  }, {
    tableName: 'product_supplier'
  });
};
