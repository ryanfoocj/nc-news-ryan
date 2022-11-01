const InfoCard = ({
  selectedArticle: { title, article_id, author, topic, votes, created_at },
}) => {
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
