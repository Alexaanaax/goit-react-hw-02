import { useState, useEffect } from "react";

import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";
import reviews from "./reviews.json";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const clickReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description
        name={"Sip Happens Café"}
        descr={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options
        totalFeedback={totalFeedback}
        clickReset={clickReset}
        updateFeedback={updateFeedback}
        reviews={reviews}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          feedback={feedback}
        />
      ) : (
        <Notification message={"No feedback yet"} />
      )}
    </div>
  );
};

export default App;
