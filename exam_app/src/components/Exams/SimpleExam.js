import classes from "./SimpleExam.module.css";

const SimpleExam = (props) => {
  const exam = props.exam;

  return (
    <div key={exam.id} className={classes["ex-element"]}>
      <div className={classes["ex-text"]}>
        <p className={classes["ex-title"]}>{exam.title}</p>
        <p className={classes["ex-description"]}>
          <b style={{ color: "#2b6777" }}>{exam.difficulty}</b>, {exam.subject},
          Max Score: {exam["max-score"]}
        </p>
        <p className={classes["ex-conditions"]}>
          Qusetions: {exam.questions} Practice time: {exam["time-duration"]}
        </p>
      </div>
      <div className={classes["ex-btn"]}>
        <a>Start Attempt</a>
      </div>
    </div>
  );
};

export default SimpleExam;
