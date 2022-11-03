import { useContext } from "react";
import { UserContext } from "..";
const Header = () => {
  const { currUser } = useContext(UserContext);
  return (
    <div className="background-transparent flex justify-center ">
      <img
        src="https://img.icons8.com/carbon-copy/344/news.png"
        alt="NC News Logo"
        className="background-transparent w-24 h-auto "
      />
      <h1 className="font-serif font-medium text-4xl italic py-8 flex w-full">
        NC News
      </h1>
      {currUser ? (
        currUser !== "anon" ? (
          <div className="justify-self-end self-center w-2/6 flex">
            <h2 className=" p-4 m-4 text-xl self-center font-fell">
              Welcome back, {currUser.name}.
            </h2>
            <img
              className="w-24 h-auto border-2 rounded-full"
              alt={`${currUser.username}'s avatar`}
              src={currUser.avatar_url}
            ></img>
          </div>
        ) : (
          "Anon"
        )
      ) : null}
    </div>
  );
  // if user is logged in, display username and avatar
};

export default Header;
