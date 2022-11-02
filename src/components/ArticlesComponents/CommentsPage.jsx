import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import DateFormatter from "../UtilityFunctions/DateFormatter";

const CommentsPage = () => {
  const location = useLocation();
  const { comments, article } = location.state;

  return (
    <section>
      <h2 className="py-6 m-4 mob:text-sm tab:text-base lap:text-xl desktop:text-2xl font-roboto font-bold underline">
        Comments for "{article.title}"
      </h2>
      <div className=" bg-color1 grid grid-cols-1 p-8 w-9/12 mt-14 m-64 place-content-center border border-solid border-black bg-transparent rounded-lg ">
        {comments.map(({ author, body, comment_id, created_at, votes }) => {
          const [date, time] = DateFormatter(created_at);
          return (
            <section className="flex flex-col p-2">
              <div className="  bg-bluey text-white px-2 mx-2 flex flex-wrap text-left border border-black rounded-lg max-w-max ">
                {author} posted on {date}
              </div>
              <div
                key={comment_id}
                className="bg-darkpurp p-2 m-2 border rounded-lg"
              >
                <div className="text-left">At {time}: </div>

                <p>{body}</p>
                <div>Current Votes: {votes}</div>
                <div className="text-left text-xs">
                  Comment ID: {comment_id}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
export default CommentsPage;
