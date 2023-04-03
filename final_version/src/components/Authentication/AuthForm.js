// Форма авторизации
import { useContext, useState } from "react";
import classes from "../Authentication/AuthForm.module.css";
import ThemeContext from "../../store/theme-context";
import Axios from 'axios'
import { Link, useHistory} from "react-router-dom";


const AuthForm = () => {
  const ctx = useContext(ThemeContext);
  const [reglogin,regLogin] = useState("")
  const [regpassword,regPassword] = useState("")
  const [login,Login] = useState("")
  const [password,Password] = useState("")
  const back = useHistory()

  const submitHandler = (evt) => {
    evt.preventDefault();

  };
  const submit=()=>{
    Axios.post("http://localhost:3001/api/register",{login: reglogin,password: regpassword}).then((response)=>{console.log(response)});
  }
  const aut=()=>{ 
    Axios.post("http://localhost:3001/api/login",{login: login,password: password}).then((response)=>{
      if(response.data[0].role!="ADMIN"){
        back.push("/")
      }else{
        back.push(`/constructor/${response.data[0].role}`)
      }
      
    });
  }


  return (
    <section className={classes.auth} data-theme={ctx.theme}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Введите логин</label>
          <input type="text" name="login" onChange={(e) => {
            regLogin(e.target.value)
          }} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Введите пароль</label>
          <input type="password"  name="password" onChange={(e) => {
            regPassword(e.target.value)
          }} required />
        </div>
        <div className={classes.actions}>
          <button onClick={submit}>Регестрация</button>
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Введите логин</label>
          <input type="text" name="login" onChange={(e) => {
            Login(e.target.value)
          }} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Введите пароль</label>
          <input type="password"  name="password" onChange={(e) => {
            Password(e.target.value)
          }} required />
        </div>
        <div className={classes.actions}>
          <button onClick={aut}>Вход</button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
