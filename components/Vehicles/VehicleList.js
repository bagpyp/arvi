import VehicleCard from "./VehicleCard";
import styles from "./VehicleList.module.css";

export default function VehicleList({ vehicles }) {
  return (
    <div className={styles.vehicleList}>
      <h1>Available Vehicles</h1>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
