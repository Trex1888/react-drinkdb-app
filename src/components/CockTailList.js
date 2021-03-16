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
    <div>
      <h2>cocklist list</h2>
    </div>
  );
}

export default CockTailList;
