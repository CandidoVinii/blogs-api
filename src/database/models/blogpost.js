// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class BlogPost extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       BlogPost.belongsTo(models.User, {
//         foreignKey: 'userId'
//       })
//         BlogPost.hasMany(models.PostCategories, {
//         foreignKey: 'postId'
//       })
//     }
//   };
//   BlogPost.define({
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     userId: DataTypes.INTEGER,
//     published: DataTypes.DATE,
//     updated: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'BlogPost',
//     timestamps: false,
//   });
//   return BlogPost;
// };

const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, { timestamps: false });

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.PostCategory, {
      foreignKey: 'postId',
      as: 'postCategories',
    });

    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return BlogPost;
};

module.exports = BlogPost;