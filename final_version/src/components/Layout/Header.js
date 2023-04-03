// Шапка приложение

import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import ThemeContext from "../../store/theme-context";

const Header = () => {
  const ctx = useContext(ThemeContext);

  return (
    <Fragment>
      <div className={classes.wrapper} data-theme={ctx.theme}>
        <h1 className={classes.title}>JustBooks</h1>
        <header className={classes.header}>
          <NavLink
            activeClassName={classes.active}
            className={classes.item}
            to="/catalog"
            data-theme={ctx.theme}
          >
            Каталог
          </NavLink>
          <NavLink className={classes.item} data-theme={ctx.theme} to="/Report">
            Отчет
          </NavLink>
          <NavLink
            className={classes.item}
            data-theme={ctx.theme}
            to="/constructor"
          >
            Конструктор
          </NavLink>
          <NavLink className={classes.item} data-theme={ctx.theme} to="./Auth">
            Вход
          </NavLink>
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
