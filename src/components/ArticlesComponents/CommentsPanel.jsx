import { mockComponent } from "react-dom/test-utils";
import { Link } from "react-router-dom";
import { fetchComments } from "../../Api";
import moment from "moment/moment";

const CommentsPanel = ({ article, article_id, comments, setComments }) => {
  const topComments = comments.sort((a, b) => a.votes - b.votes).slice(0, 2);
  console.log(comments);

  return (
    <section className="bg-deeppurp row-start-3 row-span-3 col-start-6 col-end-9 flex flex-col items-center justify-center border-black rounded-lg border min-h-full mx-8">
      <h1 className="text-xl py-4 my-2">Top Comments</h1>
      <section className=" bg-color1 relative flex flex-col  border-black border rounded-lg w-11/12 h-5/6 place-content-evenly">
        {topComments.map(({ author, body, comment_id, created_at, votes }) => {
          const date = moment(created_at).format("DD/MM/YY");
          const time = moment(created_at).format("hh:mm A");
          return (
            <div
              key={comment_id}
              className="bg-darkpurp p-2 m-2 border rounded-lg  text-ellipsis w-fit h-1/2"
            >
              <div className="text-left text-sm">
                {author} said on {date} at {time} :
              </div>
              <p className="text-base">{body}</p>
              <div className="text-sm">
                <p>
                  {date} {time}
                </p>
                {votes}
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
    </section>
  );
};

export default CommentsPanel;
