import classes from "./ExamsFilters.module.css";
import FilterSection from "./FilterSection";

const ALLFILTERS = [
  { id: 1, category: "Difficulty", filters: ["Easy", "Medium", "Hard"] },
  {
    id: 2,
    category: "Subject",
    filters: ["Math", "Physics", "React", "JavaScript"],
  },
];

const ExamFilters = () => {
  const allFilters = ALLFILTERS;

  return (
    <div className={classes["exam-filters"]}>
      {allFilters.map((filter) => (
        <FilterSection
          className={classes["single-fl-element"]}
          filter={filter}
        />
      ))}
      <div className={classes["btn-group"]}>
        <button className={classes["filter-btn"]}>Filter</button>
        <button className={classes["filter-btn"]}>Clear Filters</button>
      </div>
    </div>
  );
};

export default ExamFilters;
