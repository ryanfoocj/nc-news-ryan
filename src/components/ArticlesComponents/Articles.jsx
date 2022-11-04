import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SortBy from "./SortBy";
import moment from "moment/moment";

const Articles = ({ articles }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("descending");
  const [sortedArticles, setSortedArticles] = useState([{}]);

  useEffect(() => {
    if (sortBy === "created_at") {
      if (order === "descending") {
        setSortedArticles(
          [...articles].sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        );
      }
      if (order === "ascending") {
        setSortedArticles(
          [...articles].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        );
      }
    } else if (sortBy !== "created_at" && order === "descending") {
      setSortedArticles([...articles].sort((a, b) => b[sortBy] - a[sortBy]));
    } else {
      setSortedArticles([...articles].sort((a, b) => a[sortBy] - b[sortBy]));
    }
  }, [sortBy, order]);

  return (
    <>
      <div className="p-8  mob:text-sm tab:text-base lap:text-xl desktop:text-2xl font-gentium underline">
        Articles
      </div>
      <SortBy setSortBy={setSortBy} setOrder={setOrder} />

      <div className=" grid mob:grid-cols-1 tab:grid-cols-2 lap:grid-cols-3 gap-4 p-8 w-9/12 mt-14 m-64 place-content-center border border-solid border-black bg-transparent rounded-lg ">
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
            const date = moment(created_at).format("DD/MM/YY");

            return (
              <div
                className="flex shadow-xl hover:shadow-2xl bg-deeppurp border rounded-lg border-solid border-black m-3 p-2 flex-col text-base transition duration-300 ease-in-out delay-150 hover:bg-darkpurp hover:-translate-y-1 hover:scale-110"
                key={article_id}
              >
                <Link to={`/articles/${article_id}`} key={article_id}>
                  <div className="font-gentium italic font-medium underline mob:text-base tab:text-lg lap:text-xl desktop:text-2xl max-w-sm">
                    {title}
                  </div>
                  <div className="text-slate-800 italic mob:text-xs tab:text-sm lap:text-base ">
                    Author: {author} <br></br>
                    <br></br>
                  </div>
                  Topic: {topic}
                  <br></br>
                  Votes: {votes}
                  <br></br>
                  Article ID: {article_id}
                  <br></br>
                  Comments: {comment_count} <br></br>
                  Posted: {date} <br></br>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Articles;
