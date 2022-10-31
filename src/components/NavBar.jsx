import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className=" border border-black">
      <Link to="/articles" className="px-14">
        Articles
      </Link>
      <Link to="/topics">Topics</Link>
    </nav>
  );
};

export default NavBar;
