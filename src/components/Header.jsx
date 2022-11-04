import { useContext } from "react";
import { UserContext } from "..";
import { Link } from "react-router-dom";
const Header = () => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const handleLogout = () => {
    setCurrUser(null);
  };
  return (
    <div className="flex justify-between items-center bg-color1">
      <Link to="/articles">
        <div className="background-transparent flex">
          <img
            src="https://img.icons8.com/carbon-copy/344/news.png"
            alt="NC News Logo"
            className="background-transparent w-24 h-auto"
          />
          <h1 className="font-serif font-medium text-4xl italic py-8 flex w-full">
            NC News
          </h1>
        </div>
      </Link>
      {currUser ? (
        currUser !== "anon" ? (
          <div className="self-center w-2/6 p-4 flex justify-end">
            <h2 className=" p-4 m-4 text-xl self-center font-fell">
              Welcome back, {currUser.name}.<br></br>
              <Link
                to="/"
                onClick={handleLogout}
                className="text-sm underline italic text-bluey"
              >
                Logout
              </Link>
            </h2>

            <img
              className="w-24 h-auto border-2 rounded-full"
              alt={`${currUser.username}'s avatar`}
              src={currUser.avatar_url}
            ></img>
          </div>
        ) : (
          <p className="p-4 m-4 text-xl font-fell">Logged in as Anonymous</p>
        )
      ) : null}
    </div>
  );
  // if user is logged in, display username and avatar
};

export default Header;
