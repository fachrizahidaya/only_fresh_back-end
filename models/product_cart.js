"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product_Cart.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product_Cart",
    }
  );
  return Product_Cart;
};
