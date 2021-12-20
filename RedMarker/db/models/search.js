'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Search extends Model {
    static associate({User}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
    }
  };
  Search.init({
    url: DataTypes.TEXT,
    result: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Search',
  });
  return Search;
};
