import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Admin() {
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (user?.isAdmin) {
      // Fetch vehicles from API
      const fetchVehicles = async () => {
        const res = await fetch("/api/vehicles");
        const data = await res.json();
        setVehicles(data.vehicles);
      };
      fetchVehicles();
    }
  }, [user]);

  if (!user?.isAdmin) {
    return <div>Access denied</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.name}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
