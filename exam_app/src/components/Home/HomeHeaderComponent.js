import classes from "./HomeHeaderComponent.module.css";

const HomeHeader = () => {
  return (
    <div className={classes["home-header"]}>
      <div className={classes["header-text"]}>
        <div>
          <h1>My Title For Exams App</h1>
          <p>
            Random secondary text to my h1 element, exam app for students and
            teachers who wants to create tests and exams online.
          </p>
        </div>
        <a className={classes["header-btn"]}>Sign Up Now</a>
      </div>
      <div className={classes["header-img"]}>
        <img
          src="https://s35691.pcdn.co/wp-content/uploads/2020/04/Fourteen-Simple-Strategies-to-Reduce-Cheating-on-Online-Examinations.jpg"
          alt="Example Test Image"
          title="Test Image"
        />
      </div>
    </div>
  );
};

export default HomeHeader;
