import classes from "./InformationAboutBook.module.css";
import ThemeContext from "../../store/theme-context";
import { useContext } from "react";

const InfaBook = (item) =>{
    const ctx = useContext(ThemeContext);
    return (
        <>
          <>
          <div className={classes.wrapper}>
              <img
                className={classes.pic}
                alt="Изоображение товара"
                src={`http://localhost:3001/${item.img}`}
              />
            </div>
    
            <div className={classes.description}>
              <h3 className={classes.title}>{item.title}</h3>
              <p className={classes.author}>{item.author}</p>
    
    
              <div className={classes.divider}></div>
              <table className={classes.table}>
                <tbody>
                  <tr>
                    <td>ID товара</td>
                    <td>{item.id_book}</td>
                  </tr>
                  <tr>
                    <td>Издательство</td>
                    <td>{item.publishing}</td>
                  </tr>
                  <tr>
                    <td>Серия</td>
                    <td>{item.series}</td>
                  </tr>
                  <tr>
                    <td>Формат</td>
                    <td>{item.size}</td>
                  </tr>
                  <tr>
                    <td>Год издания</td>
                    <td>{item.year}</td>
                  </tr>
                  <tr>
                    <td>Кол-во страниц</td>
                    <td>{item.pages}</td>
                  </tr>
                  <tr>
                    <td>Тип обложки</td>
                    <td>{item.type}</td>
                  </tr>
                  <tr>
                    <td>Тираж</td>
                    <td>{item.сirculation}</td>
                  </tr>
                  <tr>
                    <td>Вес</td>
                    <td>{item.weight}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.annotation}>
              <span>Аннотация</span>
              <br />
              {item.annotation}
              <br />
            </p>
          </>
        </>
      );
};

export default InfaBook;