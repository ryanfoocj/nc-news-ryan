import { Link } from "react-router-dom";
import SortBy from "../ArticlesComponents/SortBy";
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
              className="bg-aqueous  border border-black font-bold py-2 px-8 m-4 rounded-full"
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
