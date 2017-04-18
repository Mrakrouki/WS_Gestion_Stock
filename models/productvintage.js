/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productvintage', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'productvintage'
  });
};
