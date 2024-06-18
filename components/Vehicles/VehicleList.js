import VehicleCard from "./VehicleCard";

export default function VehicleList({ vehicles }) {
  return (
    <div className="vehicle-list">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
