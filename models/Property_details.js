'use strict';
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, Datatypes) => {
  class Property_details extends Model{
    static associate(models){}
  };
  Property_details.init({
    id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    property_type: {type: DataTypes.STRING, allowNull: false},
    property_narrow_type: {type: DataTypes.STRING, allowNull: false},
    property_space_available: {type: Datatypes.STRING, allowNull: false},
    dedicated_guest_space: {type: DataTypes.BOOLEAN},
    registered_business: {type: DataTypes.BOOLEAN},
    min_length_stay: {type: DataTypes.INTEGER},
    max_length_stay: {type: DataTypes.INTEGER},
    guest_capacity: {type: DataTypes.INTEGER, allowNull:false},
    rooms: {type: DataTypes.INTEGER, allowNull: false},
    beds: {type: DataTypes.INTEGER, allowNull: false},
    bathrooms: {type: DataTypes.INTEGER, allowNull: false},
    property_description: {type: DataTypes.TEXT},
    property_id: {type: DataTypes.INTEGER}
  }, {
    sequelize, 
    modelName: 'Property_details',
    timestamps: false,
  });
  return Property_details;
};