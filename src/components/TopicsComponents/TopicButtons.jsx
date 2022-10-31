import { Link } from "react-router-dom";
const TopicButtons = ({ topics, setTopicSelect }) => {
  const handleClick = (event) => {
    setTopicSelect(event.target.value);
  };
  return (
    <div>
      {topics.map(({ slug }) => {
        return (
          <Link to={`/topics/${slug}`} key={slug}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 m-4 rounded-full"
              onClick={handleClick}
              value={slug}
            >
              {slug}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default TopicButtons;
