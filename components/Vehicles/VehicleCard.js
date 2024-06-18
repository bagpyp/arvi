import Image from "next/image";
import BookingForm from "../Booking/BookingForm";

export default function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <Image width={500} height={300} src={vehicle.image} alt={vehicle.name} />
      <h3>{vehicle.name}</h3>
      <p>{vehicle.description}</p>
      <BookingForm />
    </div>
  );
}
