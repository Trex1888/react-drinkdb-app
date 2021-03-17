import { useGlobalContext } from "../context";
import CockTail from "./Cocktail";
import Loading from "./Loading";

function CockTailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">No matches found in search criteria.</h2>
    );
  }

  return (
    <section>
      <div className="section-title">
        <h2>Cocktails</h2>
        <div className="cocktails-center">
          {cocktails.map((item) => {
            return <CockTail key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CockTailList;
