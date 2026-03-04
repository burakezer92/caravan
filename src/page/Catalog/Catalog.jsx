import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCaravan } from "../../redux/operations";
import { selectFilteredCampers } from "../../redux/selectors";
import CaravanCard from "../../components/CaravanCard/CaravanCard";
import FilterPanel from "../../components/FilterPanel/FilterPanel";

function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);
  const { loading, error } = useSelector((state) => state.caravans);

  useEffect(() => {
    dispatch(fetchCaravan());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div style={{ padding: 20, display: "flex" }}>
        <FilterPanel />

        <div style={{ padding: 40, flex: 1 }}>
          {loading && <p>Yükleniyor...</p>}
          {error && <p>Hata: {error}</p>}

          {campers.map((item) => (
            <CaravanCard key={item.id} camper={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalog;
