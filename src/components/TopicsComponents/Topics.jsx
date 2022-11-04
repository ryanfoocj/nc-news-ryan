import TopicButtons from "./TopicButtons";

const Topics = ({ topics, setTopicSelect }) => {
  return (
    <div className="h-screen">
      <h2 className="p-8 mobile:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-gentium underline">
        News Topics
      </h2>
      <TopicButtons topics={topics} setTopicSelect={setTopicSelect} />
    </div>
  );
};

export default Topics;
