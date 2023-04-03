// Конструктор

import { Fragment, useState, useContext } from "react";
import classes from "./Constructor.module.css";
import classess from "./Template.module.css";
import ThemeContext from "../../store/theme-context";
import { useParams } from "react-router-dom";
import { Link, useHistory} from "react-router-dom";
import Axios from 'axios'

const Constructor = () => {

  const back = useHistory()

  const params = useParams();
  if(params.role!="ADMIN"){
    back.push("/")
  }
  const submit=()=>{Axios.post("http://localhost:3001/api/insertbook",{title:title,author:author,rating:rating,id:id,publishing:publishing,series:series,size:size,price:price,year:year,pages:pages,type:type,сirculation:сirculation,weight:weight,annotation:annotation,img:img,test:test}).then(()=>{
    alert("OK")
  })}

  const ctx = useContext(ThemeContext);
  const [test, setTest] = useState("");
  const [img, setImg] = useState("");

  // получаем данные из LocalStorage и устанавливаем их в поля
  const [price, setPrice] = useState(localStorage.getItem("price") || "");
  const [title, setTitle] = useState(localStorage.getItem("title") || "");
  const [author, setAuthor] = useState(localStorage.getItem("author") || "");
  const [rating, setRating] = useState(localStorage.getItem("rating") || "");
  const [id, setId] = useState(localStorage.getItem("id") || "");
  const [publishing, setPublishing] = useState(
    localStorage.getItem("publishing") || ""
  );
  const [series, setSeries] = useState(localStorage.getItem("series") || "");
  const [size, setSize] = useState(localStorage.getItem("size") || "");
  const [year, setYear] = useState(localStorage.getItem("year") || "");
  const [pages, setPages] = useState(localStorage.getItem("pages") || "");
  const [type, setType] = useState(localStorage.getItem("type") || "");
  const [сirculation, setCirculation] = useState(
    localStorage.getItem("сirculation") || ""
  );
  const [weight, setWeight] = useState(localStorage.getItem("weight") || "");
  const [annotation, setAnnotation] = useState(
    localStorage.getItem("annotation") || ""
  );

  // Записываем данные из полей ввода

  const titleHandler = (evt) => {
    setTitle(evt.target.value);
  };

  const authorHandler = (evt) => {
    setAuthor(evt.target.value);
  };

  const ratingHandler = (evt) => {
    setRating(evt.target.value);
  };

  const ID_itemHandler = (evt) => {
    setId(evt.target.value);
  };

  const publishingHandler = (evt) => {
    setPublishing(evt.target.value);
  };

  const priceHandler = (evt) => {
    setPrice(evt.target.value);
  };

  const seriesHandler = (evt) => {
    setSeries(evt.target.value);
  };

  const sizeHandler = (evt) => {
    setSize(evt.target.value);
  };

  const yearHandler = (evt) => {
    setYear(evt.target.value);
  };

  const pagesHandler = (evt) => {
    setPages(evt.target.value);
  };

  const typeHandler = (evt) => {
    setType(evt.target.value);
  };

  const сirculationHandler = (evt) => {
    setCirculation(evt.target.value);
  };

  const weightHandler = (evt) => {
    setWeight(evt.target.value);
  };

  const annotationHandler = (evt) => {
    setAnnotation(evt.target.value);
  };

  //сохраняем данные в LocalStorage
  localStorage.setItem("title", title);
  localStorage.setItem("author", author);
  localStorage.setItem("rating", rating);
  localStorage.setItem("id", id);
  localStorage.setItem("price", price);
  localStorage.setItem("publishing", publishing);
  localStorage.setItem("series", series);
  localStorage.setItem("size", size);
  localStorage.setItem("year", year);
  localStorage.setItem("pages", pages);
  localStorage.setItem("type", type);
  localStorage.setItem("сirculation", сirculation);
  localStorage.setItem("weight", weight);
  localStorage.setItem("annotation", annotation);

  // сохраняем выбранную картинку
  const handlerChange = (evt) => {
    const data = evt.target.files[0];
    setTest(data);
    setImg(evt.target.files[0].name)
    console.log(data)
  };

  return (
    <>
      <h2>Заполните форму ниже: </h2>
      <form>
        <div className={classes.form} data-theme={ctx.theme}>
          <div className={classes.item}>
            <label htmlFor="title" title="Название">
              Название
            </label>
            <input
              type="text"
              id="title"
              onChange={titleHandler}
              value={title}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="author" title="автор">
              Автор
            </label>
            <input
              type="text"
              id="author"
              onChange={authorHandler}
              value={author}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="rating" title="number">
              Рейтинг
            </label>
            <input
              type="number"
              id="rating"
              onChange={ratingHandler}
              value={rating}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="ID_item" title="ID_item">
              ID товара
            </label>
            <input
              type="number"
              id="ID_item"
              onChange={ID_itemHandler}
              value={id}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="publishing" title="Издательство">
              Издательство
            </label>
            <input
              type="text"
              id="publishing"
              onChange={publishingHandler}
              value={publishing}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="series" title="Серия">
              Серия
            </label>
            <input
              type="text"
              id="series"
              onChange={seriesHandler}
              value={series}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="size" title="Формат">
              Формат
            </label>
            <input type="text" id="size" onChange={sizeHandler} value={size} />
          </div>

          <div className={classes.item}>
            <label htmlFor="year" title="Год издания">
              Год издания
            </label>
            <input
              type="number"
              id="year"
              maxLength="2"
              onChange={yearHandler}
              value={year}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="pages" title="Кол-во страниц">
              Кол-во страниц
            </label>
            <input
              type="number"
              id="pages"
              onChange={pagesHandler}
              value={pages}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="type" title="Тип обложки">
              Тип обложки
            </label>
            <input type="text" id="type" onChange={typeHandler} value={type} />
          </div>

          <div className={classes.item}>
            <label htmlFor="сirculation" title="Тираж">
              Тираж
            </label>
            <input
              type="number"
              id="сirculation"
              onChange={сirculationHandler}
              value={сirculation}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="weight" title="Вес">
              Вес
            </label>
            <input
              type="number"
              id="weight"
              onChange={weightHandler}
              value={weight}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="annotation" title="Аннотация">
              Аннотация
            </label>
            <input
              type="text"
              id="annotation"
              onChange={annotationHandler}
              value={annotation}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="price" title="price">
              Цена
            </label>
            <input
              type="number"
              id="price"
              onChange={priceHandler}
              value={price}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="image" title="Обложка">
              Обложка
            </label>
            <input type="file" id="image" onChange={handlerChange} />
          </div>
        </div>
      </form>

      <button onClick={submit}><h3>Добавить</h3></button>
      {/* ----------------------------------------------------------- */}

      <section className={classess.information}>
        {test && (
          <div className={classess.wrapper}>
            <img
              className={classess.pic}
              alt="Изоображение товара"
              src={URL.createObjectURL(test)}
            />
          </div>
        )}

        <div className={classess.description}>
          <h3 className={classess.title}>{title}</h3>
          <p className={classess.author}>{author}</p>
          <div className={classess.rating}>
            <svg
              className={classess.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              height="20"
            >
              <title>Star</title>
              <path
                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                fill="rgb(201, 134, 25)"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
            <span className={classess.number}>{rating}</span>
          </div>
          <div className={classess.divider}></div>
          <table className={classess.table}>
            <tbody>
              <tr>
                <td>ID товара</td>
                <td>{id}</td>
              </tr>
              <tr>
                <td>Цена</td>
                <td>{price}</td>
              </tr>
              <tr>
                <td>Издательство</td>
                <td>{publishing}</td>
              </tr>
              <tr>
                <td>Серия</td>
                <td>{series}</td>
              </tr>
              <tr>
                <td>Формат</td>
                <td>{size}</td>
              </tr>
              <tr>
                <td>Год издания</td>
                <td>{year}</td>
              </tr>
              <tr>
                <td>Кол-во страниц</td>
                <td>{pages}</td>
              </tr>
              <tr>
                <td>Тип обложки</td>
                <td>{type}</td>
              </tr>
              <tr>
                <td>Тираж</td>
                <td>{сirculation}</td>
              </tr>
              <tr>
                <td>Вес</td>
                <td>{weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={classess.annotation}>
          <span>Аннотация</span>
          <br />
          {annotation}
        </p>
      </section>
    </>
  );
};

export default Constructor;
