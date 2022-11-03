import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "..";

const Login = ({ users }) => {
  const usernames = users.map((user) => user.username);
  const { currUser, setCurrUser } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (currUser)
      setTimeout(() => {
        navigate("articles");
      }, 5000);
  }, [currUser]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValid(usernames.includes(input) ? true : false);
    const currentUser = users.find((user) => user.username === input);
    if (valid) {
      setCurrUser(currentUser);
    }
  };

  const handleAnon = () => {
    setCurrUser("anon");
  };

  return (
    <div className="flex flex-col flex-wrap flex-wrapborder border-black self-center mob:h-3 mob:w-3 tab:h-4 tab:w-4 desktop:h-1/3 desktop:w-1/4 rounded-lg justify-center my-24 shadow-2xl">
      {!currUser ? (
        <>
          <p className="italic text-bluey">
            PLACEHOLDER: USE 'tickle122' to login
          </p>
          <label className="text-lg font-quicksand">
            Please enter your username to login:
          </label>
          <form className="" onSubmit={handleSubmit}>
            <input
              className="m-2 w-1/2"
              placeholder="username"
              value={input}
              onChange={handleChange}
            ></input>
            <button
              className="p-1 mx-2 border border-black rounded-lg "
              type="submit"
            >
              Login
            </button>
          </form>
        </>
      ) : currUser !== "anon" ? (
        <>
          <div className="flex flex-col justify-center items-center">
            <p>Nice to see you again, {currUser.username}.</p>
            <img
              className=" p-6 w-1/2"
              alt={`${currUser.username}'s avatar`}
              src={currUser.avatar_url}
            ></img>
          </div>
        </>
      ) : (
        <p>Visiting as Anonymous, enjoy your stay!</p>
      )}
      {!valid ? (
        <p className="text-red p-2">Sorry, that username doesn't exist!</p>
      ) : null}

      {!currUser ? (
        <p className="text-sm my-8 p-2">
          Click{" "}
          <button onClick={handleAnon} className="text-bluey">
            here{" "}
          </button>{" "}
          to log in as anonymous instead{" "}
          <p>(You will not be able to vote, post articles or comment)</p>
        </p>
      ) : null}
      {currUser ? <p>We are redirecting you...</p> : null}
    </div>
  );
};

export default Login;
