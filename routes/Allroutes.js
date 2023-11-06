const express = require("express");
const Post_Books = require("../controller/Post_Books");
const GET_Books = require("../controller/GET_books");
const GET_Books_ID = require("../controller/GET_Books_ID");
const User_Register = require("../controller/User_Register");
const User_login = require("../controller/User_login");
const Borrow_Book_Function = require("../controller/Borrow_Book_Function");
const Return_Book_Func = require("../controller/Return_Book_Func");
const List_Borrow_Func = require("../controller/List_Borrow_Func");
const router = express.Router();
router.post("/books",Post_Books) // We can create  Book
router.get("/books",GET_Books); //Retrieve a list of all available books.
router.get("/books/:id",GET_Books_ID);//Retrieve a specific book by its ID.
router.post("/users",User_Register);// we can create new user 
router.post("/users/login",User_login) //Allow registered users to log in.
router.post("/borrow/:bookId/:userId",Borrow_Book_Function) //Allow users to borrow a book. Update the quantity available.
router.post("/return/:bookId/:userId",Return_Book_Func)// Allow users to return a book. Update the quantity available.
router.get("/users/:userId/books",List_Borrow_Func)
module.exports = router
