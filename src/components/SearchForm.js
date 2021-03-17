import React from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchHandler = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSumbit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktails</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchHandler}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
