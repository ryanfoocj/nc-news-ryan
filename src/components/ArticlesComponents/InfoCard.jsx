import { useState, useEffect } from "react";

const InfoCard = ({
  selectedArticle: { title, article_id, author, topic, votes, created_at },
}) => {
  const [changeVotes, setChangeVotes] = useState(0);
  const [err, setErr] = useState(null);

  /* useEffect(() => {
    fetch(
      `https://news-api-ryanfoo.herokuapp.com/api/articles/${article_id}`
    ).then((res) => {
      res.json().then((data) => {
        setVote(data[0].votes);
      });
    });
  }, []); */

  const handleClick = (event) => {
    if (event.target.value === "upvote") {
      setChangeVotes((changeVotes) => changeVotes + 1);
    }

    if (event.target.value === "downvote") {
      setChangeVotes((changeVotes) => changeVotes - 1);
    }
    const request = { inc_votes: 1 };
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
          } else {
            setChangeVotes((changeVotes) => changeVotes + 1);
          }
        });
    });
  };
  if (err) return <p>{err}</p>;

  return (
    <div className=" bg-deeppurp grid grid-cols-5 grid-rows-4 col-start-6 col-end-9 row-start-1 row-span-2 border border-black rounded-lg p-8 m-8 h-5/6">
      <div className="text-2xl col-span-5 text-left">{title}</div>
      <div>Article ID: {article_id}</div>
      <div>{author}</div>
      {topic}
      {votes}
      {created_at}
    </div>
  );
};

export default InfoCard;
