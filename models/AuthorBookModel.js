// import Sequelize from 'sequelize';
// import db from '../config/connection.js';


// const  AuthorBookModel =  db.define("author_books",{
//     id:{
//       type:Sequelize.INTEGER,
//       autoIncrement:true,
//       allowNull:false,
//       primaryKey:true 
//   },
//     authorId:{
//         type:Sequelize.INTEGER,
//         allowNull:false,
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE',
//         references: {
//           model: 'authors',
//           key: 'id',
//           as: 'authorId',
//         }
//     },
//     bookId:{
//         type:Sequelize.INTEGER,
//         allowNull:false,
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE',
//         references: {
//           model: 'books',
//           key: 'id',
//           as: 'bookId',
//         }
//     },
// }
// );

// export default AuthorBookModel