import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Articles = ({ articles }) => {
  const handleClick = () => {};
  return (
    <>
      <div className="p-8 mob:text-sm tab:text-base lap:text-xl desktop:text-2xl">
        Articles
      </div>
      <SearchBar />
      <div className=" grid mob:grid-cols-1 tab:grid-cols-2 lap:grid-cols-3 gap-4 p-8 w-9/12 mt-14 m-64 place-content-center border border-solid border-black bg-transparent rounded-lg ">
        {articles.map(
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
                className="flex bg-deeppurp border rounded-lg border-solid border-black m-3 p-2 flex-col text-base transition duration-300 ease-in-out delay-150 hover:bg-darkpurp hover:-translate-y-1 hover:scale-110"
                key={article_id}
                onClick={handleClick}
              >
                <Link to={`/articles/${article_id}`} key={article_id}>
                  <div className="font-serif italic font-medium underline mob:text-base tab:text-lg lap:text-xl desktop:text-2xl max-w-sm">
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
                  Posted: {created_at} <br></br>
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
