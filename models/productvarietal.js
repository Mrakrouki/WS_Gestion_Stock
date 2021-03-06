/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productvarietal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'productvarietal'
  });
};
