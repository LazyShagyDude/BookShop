import BookItem from "./BookItem";
import classes from "./Books.module.css";
import Axios from 'axios'
import { useEffect, useState } from "react";



const Book = () => {

  const [SmallBook, setSmallBook] = useState([])


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/getsmallbook").then((response)=>{
      setSmallBook(response.data)
    });
  }, []);

  const bookList = SmallBook.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      image= {book.img}
      title={book.title}
      author={book.author}
      price={book.price}
    />
  ));
  return <ul className={classes.list}>{bookList}</ul>;
};

export default Book;
