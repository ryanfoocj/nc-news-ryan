import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment/moment";
import { CommentsContext, UserContext } from "../..";
import CommentInput from "./CommentInput";
import { fetchComments } from "../../Api";
import DeleteComment from "./DeleteComment";

const CommentsPage = () => {
  const location = useLocation();
  const { article } = location.state;
  const [newComment, setNewComment] = useState("");
  const [deletedComment, setDeletedComment] = useState(null);
  const { comments, setComments } = useContext(CommentsContext);
  const { currUser } = useContext(UserContext);

  useEffect(() => {
    fetchComments(setComments, article.article_id);
  }, [newComment, deletedComment]);

  return (
    <section className="flex flex-col items-center">
      <h2 className="py-6 m-4 mob:text-sm tab:text-base lap:text-xl desktop:text-2xl font-serif font-bold underline ">
        Comments for "{article.title}"
      </h2>
      {currUser ? (
        currUser !== "anon" ? (
          <CommentInput
            article_id={article.article_id}
            setNewComment={setNewComment}
          />
        ) : (
          <p className="text-lg font-fell font-bold">
            Log in to comment on this article!
          </p>
        )
      ) : null}
      <div className=" bg-color1 grid grid-cols-1 p-8 w-9/12 mt-8 m-64 place-content-center border border-solid border-black bg-transparent rounded-lg ">
        {comments.map(({ author, body, comment_id, created_at, votes }) => {
          const date = moment(created_at).format("DD/MM/YY");
          const time = moment(created_at).format("hh:mm A");
          return (
            <section
              className="flex flex-col p-2"
              key={`${comment_id} ${author}`}
            >
              <div className=" font-serif bg-bluey text-white px-2 mx-2 flex flex-wrap text-left border border-black rounded-lg max-w-max ">
                {author} posted on {date}
              </div>
              <div
                key={comment_id}
                className="bg-darkpurp p-2 m-2 border rounded-lg flex flex-col"
              >
                <p className="text-left">At {time}: </p>

                <p className="font-opensans">{body}</p>
                <div>Current Votes: {votes}</div>
                <div className="text-left text-xs">
                  Comment ID: {comment_id}
                </div>
                {currUser.username === author ? (
                  <DeleteComment
                    comment_id={comment_id}
                    setDeletedComment={setDeletedComment}
                  />
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
export default CommentsPage;
