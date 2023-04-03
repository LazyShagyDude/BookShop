// Страница с отчетом
import classes from "./Report.module.css";
import PDF from "../../assets/2.pdf";

const Report = () => {
  return (
    <div>
      <p className={classes.p}>Отчет</p>
      <a className={classes.link} href={PDF}>
        Файл
      </a>
    </div>
  );
};

export default Report;
