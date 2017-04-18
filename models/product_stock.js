/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_stock', {
    id_product: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'id_product'
      }
    },
    quantite: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'product_stock'
  });
};
