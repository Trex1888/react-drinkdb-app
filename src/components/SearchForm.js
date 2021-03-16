import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  return (
    <div>
      <h3>SearchForm</h3>
    </div>
  );
}

export default SearchForm;
