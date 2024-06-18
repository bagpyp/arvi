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
        <h1>Outdoor Rentals</h1>
        <nav>
          {user ? (
            <div>
              <span>Welcome, {user.name}</span>
              <button onClick={logout}>Logout</button>
              {user.isAdmin ? <Link href="/admin">Admin Portal</Link> : <></>}
            </div>
          ) : (
            <div>
              <Link href="/login">Login</Link> |
              <Link href="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </header>

      <main className={styles.main}>
        <VehicleList vehicles={vehicles} />
      </main>
    </div>
  );
}
