// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class PostCategories extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       PostCategories.belongsTo(models.BlogPost, {
//         foreignKey: 'postId'
//       })
//       PostCategories.belongsTo(models.Category, {
//         foreignKey: 'categoryId',
//       })
//     }
//   };
//   PostCategories.init({
//     postId: DataTypes.INTEGER,
//     categoryId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'PostCategories',
//   });
//   return PostCategories;
// };

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, { timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: models.PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: models.PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogPosts',
    });
  };

  return PostCategory;
};

module.exports = PostCategory;