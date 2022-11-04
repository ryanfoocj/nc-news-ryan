const SortBy = ({ setSortBy, setOrder }) => {
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };
  const handleOrder = (event) => {
    setOrder(event.target.value);
  };
  return (
    <div>
      <label className="font-medium font-gentium ">Sort By: </label>
      <select
        className="border border-black rounded-lg text-sm my-2 mr-6"
        onChange={handleSortBy}
        defaultValue="created_at"
      >
        <option value="created_at">Date posted</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>

      <label className="font-medium font-gentium">Order: </label>
      <select
        className="border border-black rounded-lg text-sm my-2"
        onChange={handleOrder}
        defaultValue="descending"
      >
        <option value="descending">Descending</option>
        <option value="ascending">Ascending</option>
      </select>
    </div>
  );
};

export default SortBy;
