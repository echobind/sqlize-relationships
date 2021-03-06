'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersWorkingDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UsersWorkingDay.belongsTo(models.user, {foreignKey: 'userId'})
      UsersWorkingDay.belongsTo(models.workingday, {foreignKey: 'workingDayId'})
    }
  };
  UsersWorkingDay.init({
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersWorkingDay',
  });
  return UsersWorkingDay;
};