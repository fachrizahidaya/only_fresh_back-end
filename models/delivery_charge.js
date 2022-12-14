"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Delivery_Charge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Delivery_Charge.init(
    {
      
    },
    {
      sequelize,
      modelName: "Delivery_Charge",
    }
  );
  return Delivery_Charge;
};
