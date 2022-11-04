import { useContext, useState } from "react";
import { UserContext } from "../..";

const CommentInput = ({ article_id, setNewComment }) => {
  const [input, setInput] = useState("");
  const [err, setErr] = useState(null);
  const [commentStatus, setCommentStatus] = useState(false);
  const { currUser } = useContext(UserContext);
  const { username } = currUser;

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    setErr(null);
    setCommentStatus(false);
    event.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, body: input }),
    };
    fetch(
      `https://news-api-ryanfoo.herokuapp.com/api/articles/${article_id}/comments`,
      options
    )
      .then((res) => {
        setNewComment(input);
        setCommentStatus(true);
        setInput("");
      })
      .catch((err) => {
        setErr("Your comment request timed out, please try again.");
      });
  };
  if (err) <p>{err}</p>;
  return (
    <section className="flex flex-col w-2/4 ">
      <h2 className="text- underline italic text-sm self-start">
        Currently logged in as {username}
      </h2>
      <label className=" self-start py-2">POST A COMMENT:</label>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className=" w-full h-52  p-4 border rounded-lg border-bluey "
          placeholder="Type your comment here!"
          value={input}
          onChange={handleInput}
        ></textarea>
        <button
          className="  p-2 my-4 border rounded-lg bg-darkpurp transition duration-300 ease-in-out delay-150 hover:bg-bluey hover:-translate-y-1 hover:scale-110"
          type="submit"
        >
          Post!
        </button>
        {commentStatus ? (
          <p className="font-opensans text-green-500 ">
            Your comment has been posted below!
          </p>
        ) : null}
      </form>
    </section>
  );
};

export default CommentInput;
