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

const blogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      published: {
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
      updated: {
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
    }, 
    { timestamps: false }
  );

  blogPost.associate = (models) => {
    blogPost.hasMany(models.PostCategory, {
      foreignKey: 'postId',
      as: 'postCategories',
    });

    blogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return blogPost;
};

module.exports = blogPost;