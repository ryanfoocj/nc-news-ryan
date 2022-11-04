import { Link } from "react-router-dom";
import TopicButtons from "./TopicButtons";
import SortBy from "../ArticlesComponents/SortBy";
import { useState, useEffect } from "react";

const SortByTopic = ({ topicSelect, articles, topics, setTopicSelect }) => {
  const filteredArticles = articles.filter((article) => {
    return article.topic === topicSelect;
  });
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("descending");
  const [sortedArticles, setSortedArticles] = useState([{}]);

  useEffect(() => {
    if (sortBy === "created_at") {
      if (order === "descending") {
        setSortedArticles(
          [...filteredArticles].sort((a, b) =>
            b[sortBy].localeCompare(a[sortBy])
          )
        );
      }
      if (order === "ascending") {
        setSortedArticles(
          [...filteredArticles].sort((a, b) =>
            a[sortBy].localeCompare(b[sortBy])
          )
        );
      }
    } else if (sortBy !== "created_at" && order === "descending") {
      setSortedArticles(
        [...filteredArticles].sort((a, b) => b[sortBy] - a[sortBy])
      );
    } else {
      setSortedArticles(
        [...filteredArticles].sort((a, b) => a[sortBy] - b[sortBy])
      );
    }
  }, [sortBy, order, topicSelect]);

  return (
    <div>
      <h2 className="p-8 mob:text-sm tab:text-lg lap:text-xl desktop:text-2xl">
        News Topics
      </h2>
      <h1 className="text-lg italic font-medium p-6">
        Articles related to {topicSelect}
      </h1>
      <TopicButtons topics={topics} setTopicSelect={setTopicSelect} />
      <SortBy setOrder={setOrder} setSortBy={setSortBy} />
      <div className=" grid mob:grid-cols-1 tab:grid-cols-2 lap:grid-cols-3 p-8 w-9/12 mt-14 m-64 place-content-center border border-solid border-black bg-transparent rounded-lg ">
        {sortedArticles.map(
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
                className="flex bg-deeppurp border rounded-lg border-solid border-black m-3 p-2 flex-col text-base "
                key={article_id}
              >
                <Link to={`/articles/${article_id}`} key={article_id}>
                  <div className="font-serif italic font-medium underline mob:text-base tab:text-lg lap:text-xl desktop:text-2xl max-w-sm">
                    {title}
                  </div>
                  <div className="text-slate-800 italic mob:text-xs tab:text-sm lap:text-base ">
                    Author: {author} <br></br>
                    <br></br>
                  </div>
                  Topic: {topic} <br></br>
                  Votes: {votes}
                  <br></br>
                  Article ID: {article_id}
                  <br></br>
                  Comments: {comment_count} <br></br>
                  Posted: {created_at} <br></br>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SortByTopic;
