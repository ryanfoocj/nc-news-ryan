import TopicButtons from "./TopicButtons";
const SortByTopic = ({ topicSelect, articles, topics, setTopicSelect }) => {
  const filteredArticles = articles.filter((article) => {
    return article.topic === topicSelect;
  });

  return (
    <div>
      <h2 className="text-2xl p-8">News Topics</h2>
      <h1 className="text-lg italic font-medium p-6">
        Articles related to {topicSelect}
      </h1>
      <TopicButtons topics={topics} setTopicSelect={setTopicSelect} />
      <div className=" flex basis-14 flex-wrap flex-row place-content-center border border-solid border-black bg-transparent  w-9/12 mt-14 mx-64">
        {filteredArticles.map(
          ({
            title,
            author,
            topic,
            votes,
            comment_count,
            article_id,
            created_at,
          }) => {
            return (
              <div
                className="flex bg-blue-400 border rounded-lg border-solid border-black m-3 p-2 flex-col text-base "
                key={article_id}
              >
                <div className="font-serif italic font-medium underline text-base">
                  {title}
                </div>
                <div className="text-slate-800 text-sm italic">
                  Author:{author} <br></br>
                  <br></br>
                </div>
                Topic: {topic} <br></br>
                Votes: {votes}
                <br></br>
                Article ID: {article_id}
                <br></br>
                Comments: {comment_count} <br></br>
                Posted: {created_at} <br></br>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SortByTopic;
