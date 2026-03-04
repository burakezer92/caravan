import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCaravan } from "../../redux/operations";
import { selectFilteredCampers } from "../../redux/selectors";
import CaravanCard from "../../components/CaravanCard/CaravanCard";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import css from "../../components/Button/Button.module.css";

function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);
  const { loading, error } = useSelector((state) => state.caravans);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCaravan());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [campers]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      <Header />
      <div style={{ padding: 20, display: "flex" }}>
        <FilterPanel />

        <div style={{ padding: 40, flex: 1 }}>
          {loading && <p>Yükleniyor...</p>}
          {error && <p>Hata: {error}</p>}

          {campers.slice(0, visibleCount).map((item) => (
            <CaravanCard key={item.id} camper={item} />
          ))}

          {visibleCount < campers.length && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <button className={css.button} onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Catalog;
