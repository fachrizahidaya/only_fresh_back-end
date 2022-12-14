"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.hasOne(models.Transaction_Detail);
      Transaction.hasMany(models.Voucher)
      Transaction.hasMany(models.Notification)
    }
  }
  Transaction.init(
    {
      isVoucher: DataTypes.BOOLEAN,
      waitingConfirmPayment: DataTypes.BOOLEAN,
      isProcessed: DataTypes.BOOLEAN,
      isDelivered: DataTypes.BOOLEAN,
      isConfirmed: DataTypes.BOOLEAN,
      deliveryCharge: DataTypes.INTEGER,
      distance: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
