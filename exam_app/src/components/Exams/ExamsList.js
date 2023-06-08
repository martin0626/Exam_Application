import classes from "./ExamsList.module.css";
import SimpleExam from "./SimpleExam";

let exams_list = [
  {
    id: 1,
    title: "Test 1",
    subject: "Math",
    "max-score": 10,
    questions: 10,
    "time-duration": 60,
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Test 2",
    subject: "Physics",
    "max-score": 10,
    questions: 10,
    "time-duration": 60,
    difficulty: "Hard",
  },
  {
    id: 3,
    title: "Test 2",
    subject: "Physics",
    "max-score": 10,
    questions: 10,
    "time-duration": 60,
    difficulty: "Hard",
  },
  {
    id: 4,
    title: "Test 2",
    subject: "Physics",
    "max-score": 10,
    questions: 10,
    "time-duration": 60,
    difficulty: "Hard",
  },
  {
    id: 5,
    title: "Test 2",
    subject: "Physics",
    "max-score": 10,
    questions: 10,
    "time-duration": 60,
    difficulty: "Hard",
  },
  {
    id: 6,
    title: "Test 2",
    subject: "Physics",
    "max-score": 10,
    questions: 10,
    "time-duration": 60,
    difficulty: "Hard",
  },
  {
    id: 7,
    title: "Test 2",
    subject: "Physics",
    "max-score": 10,
    questions: 10,
    "time-duration": 60,
    difficulty: "Hard",
  },
];

const ExamsList = () => {
  const exams = exams_list;

  return (
    <div className={classes.exams}>
      {exams.map((ex) => (
        <SimpleExam exam={ex} />
      ))}
    </div>
  );
};

export default ExamsList;
