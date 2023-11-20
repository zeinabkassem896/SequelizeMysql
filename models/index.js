import CategoryModel from './CategoryModel.js';
import BookModel from './BookModel.js';
import AuthorModel from './AuthorModel.js';



BookModel.belongsTo(CategoryModel, 
    { foreignKey: 'categoryId', as: 'categories' }
);

CategoryModel.hasMany(BookModel);

BookModel.belongsToMany(AuthorModel, {
    through: "author_books",
    as: "books",
    foreignKey: "bookId",
  })

AuthorModel.belongsToMany(BookModel, {
    through: "author_books",
    as: "authors",
    foreignKey: "authorId",
  })

  
export default { CategoryModel, BookModel, AuthorModel};