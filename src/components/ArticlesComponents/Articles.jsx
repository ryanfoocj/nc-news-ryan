import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Articles = ({ articles, setArticles }) => {
  const handleClick = () => {};
  return (
    <>
      <div className="p-8 text-lg">Articles</div>
      <SearchBar />
      <div className=" flex basis-14 flex-wrap flex-row place-content-center border border-solid border-black bg-transparent  w-9/12 mt-14 mx-64">
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
                className="flex bg-blue-400 border rounded-lg border-solid border-black m-3 p-2 flex-col text-base "
                key={article_id}
                onClick={handleClick}
              >
                <Link to={`/articles/${article_id}`} key={article_id}>
                  <div className="font-serif italic font-medium underline text-base max-w-sm">
                    {title}
                  </div>
                  <div className="text-slate-800 text-sm italic">
                    Author:{author} <br></br>
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
