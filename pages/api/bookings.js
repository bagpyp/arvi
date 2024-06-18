const bookings = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { vehicleId, startDate, endDate } = req.body;
    const booking = { id: Date.now(), vehicleId, startDate, endDate };
    bookings.push(booking);
    res.status(201).json({ success: true, booking });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
