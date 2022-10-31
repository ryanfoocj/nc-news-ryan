const InfoCard = ({
  selectedArticle: { title, article_id, author, topic, votes, created_at },
}) => {
  return (
    <div className="flex col-start-7 col-end-9 row-start-2">
      <div className="text-2xl justify-start">{title}</div>
      <div>Article ID: {article_id}</div>
      <div>{author}</div>
      {topic}
      {votes}
      {created_at}
    </div>
  );
};

export default InfoCard;
