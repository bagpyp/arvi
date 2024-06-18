import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import VehicleList from "../components/Vehicles/VehicleList";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, logout } = useAuth();
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
    <div className={styles.main}>
      <header className={styles.header}>
        <h1>Vehicle Rental Service</h1>
        <nav>
          {user ? (
            <div>
              <span>Welcome, {user.email}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div>
              <Link href="/login">Login</Link> |
              <Link href="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </header>

      <main className={styles.vehicles}>
        <h2>Available Vehicles</h2>
        <VehicleList vehicles={vehicles} />
      </main>
    </div>
  );
}
