import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);

    // Later, this will search products from the database.
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for a product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;