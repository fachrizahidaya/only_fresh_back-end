"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Branch.hasMany(models.Inventory);
      Branch.hasOne(models.Delivery);
      Branch.hasOne(models.Transaction)
    }
  }
  Branch.init(
    {
      branchName: DataTypes.STRING,
      address: DataTypes.STRING,
      postalCode: DataTypes.INTEGER,
      phoneNumber: DataTypes.INTEGER,
      longitude: DataTypes.INTEGER,
      lattitude: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Branch",
    }
  );
  return Branch;
};
