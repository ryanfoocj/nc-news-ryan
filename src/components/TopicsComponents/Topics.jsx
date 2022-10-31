import TopicButtons from "./TopicButtons";

const Topics = ({ topics, setTopicSelect }) => {
  return (
    <div className="h-screen">
      <h2 className="text-2xl p-8">News Topics</h2>
      <TopicButtons topics={topics} setTopicSelect={setTopicSelect} />
    </div>
  );
};

export default Topics;
