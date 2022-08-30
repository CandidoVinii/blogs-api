'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blogpost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blogpost.hasMany(models.PostCategories, {
        foreignKey: 'postId'
      })
      Blogpost.belongsToMany(models.Users, {
        foreignKey: 'userId'
      })
    };
  };
  Blogpost.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BlogPost',
    timestamps: false,
  });
  return Blogpost;
};