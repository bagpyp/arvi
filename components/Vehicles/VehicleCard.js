import Image from "next/image";
import BookingForm from "../Booking/BookingForm";
import styles from "./VehicleCard.module.css";

export default function VehicleCard({ vehicle }) {
  return (
    <div className={styles.vehicleCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          width={800} // Default width
          height={450} // Default height
          layout="responsive" // Responsive layout
          className={styles.image}
        />
      </div>
      <h3>{vehicle.name}</h3>
      <p>{vehicle.description}</p>
      <BookingForm />
    </div>
  );
}
