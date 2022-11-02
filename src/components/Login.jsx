import { useEffect, useState } from "react";

const Login = ({ users }) => {
  const usernames = users.map((user) => user.username);

  const [input, setInput] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setValid(usernames.includes(input) ? true : false);
  };

  return (
    <div className="flex flex-col flex-wrap flex-wrapborder border-black self-center mob:h-3 mob:w-3 tab:h-4 tab:w-4 desktop:h-1/2 desktop:w-1/4 rounded-lg justify-center my-24 shadow-2xl">
      <label className="text-lg font-quicksand">
        Please enter your username to login:
      </label>
      <form className="">
        <input
          className="m-2 w-1/2"
          placeholder="username"
          value={input}
          onChange={handleChange}
        ></input>
        <button
          className="p-1 mx-2 border border-black rounded-lg "
          type="button"
          onClick={handleClick}
        >
          Login
        </button>
      </form>
      {!valid ? (
        <p className="text-red">Sorry, that username doesn't exist!</p>
      ) : null}
    </div>
  );
};

export default Login;
