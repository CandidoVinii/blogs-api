// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Categories extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Categories.hasMany(models.PostCategories, {
//         foreignKey: 'categoryId'
//       })
//     }
//   };
//   Categories.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Categories',
//     timestamps: false,
//   });
//   return Categories;
// };

const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, { timestamps: false });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      foreignKey: 'categoryId'
    });
  }

  return Category;
};

module.exports = Category;