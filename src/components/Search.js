import './Search.scss';

const searchResults = ["Example 1", "Example 2", "Example 3"];

export default function Search() {
  return (
    <section className="search">
      <input type="text"></input>
      <ul className="search-results">
        {searchResults.map(result =>
          <li key={result}>
            <span>{result}</span>
            <span><i class="fas fa-plus"></i></span>
          </li>
        )}
      </ul>
    </section>
  );
}