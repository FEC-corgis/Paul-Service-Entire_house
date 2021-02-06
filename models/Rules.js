'use strict';
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, Datatypes) => {
  class Rules extends Model{
    static associate(models){}
  };
  Rules.init({
    id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    check_in_time: {type: DataTypes.INTEGER},
    check_out_time: {type: DataTypes.INTEGER},
    self_check_out: {type: DataTypes.BOOLEAN},
    smoking: {type: DataTypes.BOOLEAN},
    events: {type: DataTypes.BOOLEAN},
    pets: {type: DataTypes.BOOLEAN},
    infants: {type: DataTypes.BOOLEAN},
    children_suitable: {type: DataTypes.BOOLEAN},
  }, {
    sequelize, 
    modelName: 'Rules',
    timestamps: false,
  });
  return Rules;
};