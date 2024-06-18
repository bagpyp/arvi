import { useEffect, useState } from "react";
import VehicleList from "../components/Vehicles/VehicleList";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch vehicles from API
    const fetchVehicles = async () => {
      const res = await fetch("/api/vehicles");
      const data = await res.json();
      setVehicles(data.vehicles);
    };
    fetchVehicles();
  }, []);

  return (
    <div>
      <h1>Available Vehicles</h1>
      <VehicleList vehicles={vehicles} />
    </div>
  );
}
