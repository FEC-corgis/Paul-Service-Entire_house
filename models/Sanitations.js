'use strict';
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, Datatypes) => {
  class Sanitations extends Model{
    static associate(models){}
  };
  Sanitations.init({
    id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    sanitize_surfaces: {type: DataTypes.BOOLEAN},
    approved_products: {type: DataTypes.BOOLEAN},
    thoroughly_clean: {type: DataTypes.BOOLEAN},
    mask_glove: {type: DataTypes.BOOLEAN},
    wash_linen: {type: DataTypes.BOOLEAN},
    local_guidance: {type: DataTypes.BOOLEAN},
  }, {
    sequelize, 
    modelName: 'Sanitations',
  });
  return Sanitations;
};