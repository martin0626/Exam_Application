import classes from "./FilterSection.module.css";

const FilterSection = (props) => {
  const filter = props.filter;
  console.log(filter);
  return (
    <div key={filter.id} className={classes["filter-section"]}>
      <p className={classes["fl-title"]}>{filter.category}</p>
      <div className={classes["fl-all"]}>
        {filter.filters.map((f) => (
          <div key={f} className={classes["fl-single"]}>
            <input
              className={classes["fl-checkbox"]}
              type="checkbox"
              id={f}
              name={f}
            />
            <label className={classes["fl-text"]} for={f}>
              {f}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
