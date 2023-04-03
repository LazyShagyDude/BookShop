import classes from "./Comment.module.css";

const Comment = (props) => {
  return (
    <section className={classes.reviews}>
      <div className={classes.rating}>
        <svg
          className={classes.svg}
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
        <span className={classes.number}>{props.rating}</span>
      </div>
      <span className={classes.name}>{props.name}</span>
      <p className={classes.comment}>{props.text}</p>
      <p>
        <span className={classes.plus}>Плюсы: </span>
        {props.plus}
      </p>
      <p>
        <span className={classes.minus}>Минусы: </span>
        {props.minus}
      </p>
    </section>
  );
};

export default Comment;
