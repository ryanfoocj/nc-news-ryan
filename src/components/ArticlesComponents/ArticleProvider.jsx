import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import CommentsPanel from "../CommentsComponents/CommentsPanel";
import { fetchComments } from "../../Api";

const ArticleProvider = () => {
  const { article_id } = useParams();
  const [articleState, setArticle] = useState([{}]);

  useEffect(() => {
    fetch(
      `https://news-api-ryanfoo.herokuapp.com/api/articles/${article_id}`
    ).then((res) => {
      res.json().then((article) => {
        setArticle(article);
      });
    });
  }, []);

  return (
    <div className="h-screen grid grid-cols-8 grid-rows-6 ">
      <h1 className="font-medium flex flex-col flex-shrink text-5xl col-start-1 col-end-6 py-8 font-gentium underline">
        {articleState[0].title}
        <div className="text-sm italic font-normal py-8 col-start-5">
          - Article ID: {articleState[0].article_id}
        </div>
      </h1>
      <InfoCard selectedArticle={articleState[0]} />
      <div className="text-3xl tab:text-center mob:text-left  row-start-2 row-end-5 col-start-1 col-end-6 p-4 m-4 font-opensans ">
        {articleState[0].body}
      </div>
      <CommentsPanel article={articleState[0]} article_id={article_id} />
    </div>
  );
};

export default ArticleProvider;
