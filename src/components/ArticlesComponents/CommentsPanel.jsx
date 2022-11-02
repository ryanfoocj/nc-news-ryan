import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CommentsPanel = ({ article, article_id, comments }) => {
  return (
    <section className="bg-deeppurp row-start-3 row-span-3 col-start-6 col-end-9 flex flex-col items-center justify-center border-black rounded-lg border min-h-full mx-8 h-5/6">
      <h1 className="text-xl py-4 my-2">User Comments</h1>
      <section className=" bg-color1 relative flex flex-col border-black border rounded-lg w-11/12 overflow-scroll overflow-x-hidden scroll-smooth h-5/6">
        {comments.map(({ author, body, comment_id, created_at, votes }) => {
          return (
            <div
              key={comment_id}
              className="bg-darkpurp p-2 m-2 border rounded-lg"
            >
              <div className="text-left">
                {author} {comment_id}
              </div>
              <p>{body}</p>
              <div>
                {created_at} {votes}
              </div>
            </div>
          );
        })}
      </section>

      <h2 className="text-xs text-right self-end mx-6">
        Comment Count : {comments.length}
      </h2>
      <Link
        to={`/articles/${article_id}/comments`}
        state={{ comments, article }}
      >
        <button className="bg-white hover:bg-buttonh p-1 my-2 border-black border rounded-lg transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
          View All Comments
        </button>
      </Link>
      <section>
        <label>Write a comment:</label>
        <input placeholder="Post a Comment" className="m-2"></input>
      </section>
    </section>
  );
};

export default CommentsPanel;
