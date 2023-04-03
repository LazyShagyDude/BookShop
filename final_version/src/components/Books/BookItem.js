// Карточка товара

import classes from "./BookItem.module.css";
import { Link } from "react-router-dom";
import ThemeContext from "../../store/theme-context";
import { useContext } from "react";

const BookItem = (props) => {
  const ctx = useContext(ThemeContext);
  console.log(props.id)
  return (
    <>
      <li className={classes.catalog__item}>
        <Link className="button" to={`/catalog/${props.id}`}>
          <p className={classes.catalog__item__image}>
            <img src={`http://localhost:3001/${props.image}`} width="184" height="275" alt="" />
          </p>
          <h3>
            <span className={classes.catalog__title}>{props.title}</span>
            <span className={classes.catalog__item__author}>
              {props.author}
            </span>
          </h3>
        </Link>
        <p className={classes.catalog__item__price}>
          <b>{props.price}₽</b>
          <Link
            className="button"
            data-theme={ctx.theme}
            to={`/catalog/${props.id}`}
          >
            Купить
          </Link>
        </p>
      </li>
    </>
  );
};

export default BookItem;
