"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Discount.init(
    {
      percent: DataTypes.INTEGER,
      nominal: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
      validDate: DataTypes.DATE,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Discount",
    }
  );
  return Discount;
};
