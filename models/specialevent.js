/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('specialevent', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    activated: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    txreduction: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    idAdmin: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    tableName: 'specialevent'
  });
};
