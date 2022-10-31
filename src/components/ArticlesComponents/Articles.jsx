import { useEffect } from "react";
import SearchBar from "./SearchBar";

const Articles = ({ articles, setArticles }) => {
  const fetchArticles = () => {
    fetch("https://news-api-ryanfoo.herokuapp.com/api/articles").then((res) => {
      res.json().then((articlesArr) => {
        setArticles(articlesArr);
      });
    });
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <SearchBar />
      <div className=" grid grid-cols-3  gap-2 w-full place-content-center ">
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
              <div className="container flex-col bg-blue-400 border rounded-md border-solid border-black p-3 m-4">
                {title}
                {author}
                {topic}
                {votes}
                {article_id}
                {comment_count}
                {created_at}
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Articles;
