import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Books from "./components/Books/Books";
import InformationAboutBook from "./components/Books/InformationAboutBook";
import AuthForm from "./components/Authentication/AuthForm";
import Constructor from "./components/Constructor/Constructor";
import { Route, Switch, Redirect } from "react-router-dom";
import Report from "./components/Report/Report";
import ThemeContext from "./store/theme-context";

function App() {
  const initialState = localStorage.getItem("theme") || "def";
  const [style, setStyle] = useState(initialState);

  const handler = (evt) => {
    if (evt.target.value === "def") {
      setStyle("def");
    }

    if (evt.target.value === "green") {
      setStyle("green");
    }
    if (evt.target.value === "purple") {
      setStyle("purple");
    }
  };

  localStorage.setItem("theme", style);
  return (
    <>
      <ThemeContext.Provider value={{ theme: style }}>
        <Header />
        <main>
          <div className="theme_change">
            <p className="title_theme">Изменить тему:</p>
            <select className="theme_select" onChange={handler}>
              <option disabled selected>
                Выберите цвет..
              </option>
              <option value="def">Стандартная</option>
              <option value="green">Зеленая</option>
              <option value="purple">Фиолетовая</option>
            </select>
          </div>

          <Switch>
            <Route path="/" exact>
              <Redirect to="/catalog" />
            </Route>
            <Route path="/catalog" exact>
              <Books />
            </Route>
            <Route path="/constructor/:role">
              <Constructor />
            </Route>
            <Route path="/Auth">
              <AuthForm />
            </Route>
            <Route path="/catalog/:bookId">
              <InformationAboutBook />
            </Route>
            <Route path="/Report">
              <Report />
            </Route>
          </Switch>
        </main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
