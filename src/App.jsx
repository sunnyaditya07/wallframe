/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Image from "./Image";
import Pagination from "./Pagination";
import Message from "./Message";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(
    function () {
      fetchImage();
    },
    [pages]
  );
  async function fetchImage() {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${
          import.meta.env.VITE_KEY
        }&query=${query}&page=${pages}&per_page=12&orientation=squarish`
      );
      const data = await res.json();

      setResults(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      alert(error.message);
    }
  }

  function handleClick() {
    fetchImage();
  }

  return (
    <div className="app">
      <a href="/" className="logo-link">
        <p className="logo">WallFrame</p>
      </a>
      <div className="searchBox">
        <input
          type="text"
          value={query}
          placeholder="Search for free photos"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleClick} className="search-btn">
          {" "}
          Search
        </button>
      </div>
      <div className="gallery">
        {results.length === 0 ? (
          <Message message="Search your favourite Images" />
        ) : (
          results.map((items) => <Image items={items} key={items.id} />)
        )}
      </div>
      {results.length !== 0 && (
        <Pagination pages={pages} setPages={setPages} totalPages={totalPages} />
      )}
    </div>
  );
}

export default App;
