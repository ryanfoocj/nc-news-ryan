import { useEffect } from "react";
import SearchBar from "./SearchBar";

const Articles = ({ articles, setArticles }) => {
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
                className="flex bg-blue-400 border rounded-lg border-solid border-black m-2 p-2 flex-col text-base "
                key={article_id}
              >
                <div className="font-serif italic font-medium underline text-base">
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
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Articles;
