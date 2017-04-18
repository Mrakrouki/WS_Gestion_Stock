/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    DTYPE: {
      type: DataTypes.STRING(31),
      allowNull: false
    },
    id_product: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: 'sequelize.literal(\'CURRENT_TIMESTAMP\')'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    images: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: "DOUBLE",
      allowNull: true
    },
    apiId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    appellation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imagesUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idSpecialEvent: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'specialevent',
        key: 'id'
      }
    },
    idProductType: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'producttype',
        key: 'id'
      }
    },
    idProductVarietal: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'productvarietal',
        key: 'id'
      }
    },
    idProductVintage: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'productvintage',
        key: 'id'
      }
    }
  }, {
    tableName: 'product'
  });
};
