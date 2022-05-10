import "./Searchbar.css";

function Searchbar() {
  return (
    <form className="searchWrapper">
      <select
        className="searchbar searchDropdown"
        name="instruments"
        id="instruments"
      >
        <option value="all">All</option>
        <option value="guitars">Guitars</option>
        <option value="bass">Bass</option>
        <option value="drums">Drums</option>
        <option value="keyboards">Keyboards</option>
        <option value="misc">Misc.</option>
      </select>

      <input className="searchbar" type="text" placeholder="Search..." />

      <button className="searchbar searchBtn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Searchbar;
