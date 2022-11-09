const SearchResults = ({ data }) => {
  if (!data || !data.length) return null;

  const resultList = data.map(({ id, course }) => {
    return (
      <li key={id}>
        <span>{course}</span>
      </li>
    );
  });

  return (
    <div>
      <ul>{resultList.SearchResults}</ul>
    </div>
  );
};

export default SearchResults;
