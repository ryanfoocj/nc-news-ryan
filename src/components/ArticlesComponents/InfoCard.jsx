import { useState, useEffect } from "react";
import moment from "moment/moment";

const InfoCard = ({
  selectedArticle: { title, article_id, author, topic, votes, created_at },
}) => {
  const [changeVotes, setChangeVotes] = useState(0);
  const [err, setErr] = useState(null);
  const date = moment(created_at).format("DD/MM/YY");
  const time = moment(created_at).format("hh:mm A");

  const handleClick = (event) => {
    const request = { inc_votes: 1 };
    if (event.target.value === "upvote") {
      setChangeVotes((changeVotes) => changeVotes + 1);
    }

    if (event.target.value === "downvote") {
      setChangeVotes((changeVotes) => changeVotes - 1);
      request.inc_votes = -1;
    }

    setErr(null);

    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    };

    fetch(
      `https://news-api-ryanfoo.herokuapp.com/api/articles/${article_id}`,
      options
    ).then((res) => {
      res
        .json()
        .then((data) => {})
        .catch((err) => {
          setErr("Oops, something has gone wrong!");
          if (event.target.value === "upvote") {
            setChangeVotes((changeVotes) => changeVotes - 1);
          } else if (event.target.value === "downvote") {
            setChangeVotes((changeVotes) => changeVotes + 1);
          }
        });
    });
  };
  if (err) return <p>{err}</p>;

  return (
    <section className="flex flex-col col-start-6 col-end-9 row-start-1 row-span-2 border border-black rounded-lg p-8 m-8 h-5/6 bg-deeppurp">
      <div className="text-xl text-left font-serif">
        {title} by <div className="italic">{author}</div>
      </div>
      <div className=" py-4">
        {date} {time}
      </div>
      <div className="text-right">
        Article ID: {article_id} {topic}
      </div>
      <div>
        <button className="text-3xl" value="upvote" onClick={handleClick}>
          ↑
        </button>
        Current Votes: {votes + changeVotes}
        <button className="text-3xl" value="downvote" onClick={handleClick}>
          ↓
        </button>
      </div>
    </section>
  );
};

export default InfoCard;
