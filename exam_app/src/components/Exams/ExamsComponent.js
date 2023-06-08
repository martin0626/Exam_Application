import classes from "./ExamsComponent.module.css";
import ExamFilters from "./Filters/ExamsFilters";
import ExamsList from "./ExamsList";

const ExamsComponent = () => {
  return (
    <div className={classes["exams-section"]}>
      <div className={classes["exams-title"]}>Title</div>
      <ExamsList />
      <ExamFilters />
    </div>
  );
};

export default ExamsComponent;
