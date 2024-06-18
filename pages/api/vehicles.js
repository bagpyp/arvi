const vehicles = [
  {
    name: "RV",
    description: "This is a great RV",
    image: "/img/rv.jpg",
  },
  {
    name: "Van",
    description: "This is a great Van",
    image: "/img/van.webp",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ vehicles });
  } else if (req.method === "POST") {
    const { name, description, image } = req.body;
    const vehicle = { id: Date.now(), name, description, image };
    vehicles.push(vehicle);
    res.status(201).json({ vehicle });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
