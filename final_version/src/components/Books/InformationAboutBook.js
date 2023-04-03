// Страница товара
import InfaBook from "./InfaBook";
import { Fragment, useEffect, useState } from "react";
import classes from "./InformationAboutBook.module.css";
import { useParams } from "react-router-dom";
import Axios from 'axios'

const InformationAboutBook = () => {

  const params = useParams();
  const [BigBook, setSmallBook] = useState([])
  console.log(BigBook)
  
  useEffect(()=>{
    Axios.get(`http://localhost:3001/api/getbook/${dd}`).then((response)=>{
      setSmallBook(response.data)
    });
  }, []); 
  const dd = params.bookId

  const bookList = BigBook.map((book) => (
    <InfaBook
      key={book.id}
      {...book}
    />
  ));
  return <section className={classes.information}>{bookList}</section>;
};

export default InformationAboutBook;
