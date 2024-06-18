import { hash, compare } from "bcryptjs";

const users = [
  {
    email: "admin@admin.com",
    password: "admin",
    isAdmin: true,
    name: "admin",
  },
  {
    email: "test@test.com",
    password: "test",
    isAdmin: false,
    name: "test",
  },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);
    if (user && compare(password, user.password)) {
      res.status(200).json({ user });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } else if (req.method === "POST" && req.url === "/signup") {
    const { email, password } = req.body;
    const hashedPassword = hash(password, 10);
    const user = { email, password: hashedPassword };
    users.push(user);
    res.status(201).json({ user });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
