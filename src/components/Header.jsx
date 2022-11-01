const Header = () => {
  return (
    <div className="background-transparent flex justify-center ">
      <img
        src="https://img.icons8.com/carbon-copy/344/news.png"
        alt="NC News Logo"
        className="background-transparent w-24 h-auto "
      />
      <h1 className="font-serif font-medium text-4xl italic py-8"> NC News</h1>
    </div>
  );
  // if user is logged in, display username and avatar
};

export default Header;
