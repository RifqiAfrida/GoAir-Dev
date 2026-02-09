import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;

  const users = await query("SELECT * FROM users WHERE email=$1", [email]);
  const user = users[0];

  if (!user) return res.status(401).json({ message: "Email tidak ditemukan" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Password salah" });

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  );

  res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
}
