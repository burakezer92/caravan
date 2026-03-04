import { useSelector, useDispatch } from "react-redux";
import styles from "./FilterPanel.module.css";
import tv from "../../assets/tv.svg";
import wind from "../../assets/wind.svg";
import bathroom from "../../assets/bathroom.svg";
import diagram from "../../assets/diagram.svg";
import cup_hot from "../../assets/cup-hot.svg";
import gap_3x3 from "../../assets/gap_3x3.svg";
import bi_grid from "../../assets/bi_grid.svg";
import gap_1x2 from "../../assets/gap_1x2.svg";
import { setFilters } from "../../redux/caravanSlice";

const vehicleEquipment = [
  { label: "AC", value: "AC", icon: wind },
  { label: "Automatic", value: "transmission", icon: diagram },
  { label: "Kitchen", value: "kitchen", icon: cup_hot },
  { label: "TV", value: "TV", icon: tv },
  { label: "Bathroom", value: "bathroom", icon: bathroom },
];

const vehicleTypes = [
  { label: "Van", value: "panelTruck", icon: gap_1x2 },
  { label: "Fully Integrated", value: "fullyIntegrated", icon: bi_grid },
  { label: "Alcove", value: "alcove", icon: gap_3x3 },
];

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.caravans.filters);

  const handleEquipmentClick = (value) => {
    const newEquipment = filters.equipment.includes(value)
      ? filters.equipment.filter((item) => item !== value)
      : [...filters.equipment, value];

    dispatch(setFilters({ ...filters, equipment: newEquipment }));
  };

  const handleTypeClick = (value) => {
    dispatch(
      setFilters({ ...filters, type: filters.type === value ? null : value }),
    );
  };

  const handleLocationChange = (e) => {
    dispatch(setFilters({ ...filters, location: e.target.value }));
  };

  return (
    <div>
      <div>
        <p className={styles.label}>Location</p>
        <div className={styles.locationBox}>
          <input
            type="text"
            className={styles.inputArea}
            value={filters.location}
            onChange={handleLocationChange}
            placeholder="Kyiv, Ukraine"
          />
        </div>
      </div>

      <div>
        <p className={styles.label}>Filters</p>

        <h3 className={styles.sectionTitle}>Vehicle equipment</h3>
        <div className={styles.grid}>
          {vehicleEquipment.map((item) => {
            const active = filters.equipment.includes(item.value);

            return (
              <button
                key={item.value}
                onClick={() => handleEquipmentClick(item.value)}
                className={`${styles.option} ${active ? styles.active : ""}`}
              >
                <img src={item.icon} alt="" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <h3 className={styles.sectionTitle}>Vehicle type</h3>
        <div className={styles.grid}>
          {vehicleTypes.map((item) => {
            const active = filters.type === item.value;

            return (
              <button
                key={item.value}
                onClick={() => handleTypeClick(item.value)}
                className={`${styles.option} ${active ? styles.active : ""}`}
              >
                <img src={item.icon} alt="" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
