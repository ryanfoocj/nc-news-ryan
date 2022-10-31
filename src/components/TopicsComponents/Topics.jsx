import { Link } from "react-router-dom";
import TopicButtons from "./TopicButtons";

const Topics = ({ topics, setTopicSelect }) => {
  return (
    <>
      <h2 className="text-2xl p-8">News Topics</h2>
      <TopicButtons topics={topics} setTopicSelect={setTopicSelect} />;
    </>
  );
};

export default Topics;
