import React from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/common/Card";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
      <Card>hello</Card>
    </>
  );
};

export default App;
