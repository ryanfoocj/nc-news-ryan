import { useState } from "react";

const DeleteComment = ({ comment_id, setDeletedComment }) => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setDeletedComment(null);
    setErr(null);
    setIsLoading(true);
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://news-api-ryanfoo.herokuapp.com/api/comments/${comment_id}`,
      options
    )
      .then((res) => {
        setDeletedComment(true);
        alert("Your comment has been deleted!");
      })
      .catch((err) => {
        setErr("Your comment request has failed. Please try again");
      });
  };

  if (err) <p>{err}</p>;
  return (
    <section className="flex justify-end">
      {!isLoading ? (
        <button
          className="border m-1 px-3 py-1 border-black text-color1 rounded-lg  bg-red-600 font-serif"
          onClick={handleClick}
        >
          Delete
        </button>
      ) : (
        <div className="border m-1 px-3 py-1 border-black text-color1 rounded-lg  bg-red-600 font-serif flex justify-center items-center">
          <div
            class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-black rounded-full mr-2"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
          Deleting...
        </div>
      )}
    </section>
  );
};

export default DeleteComment;
