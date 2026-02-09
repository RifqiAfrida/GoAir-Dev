import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../lib/db";
import bcrypt from "bcrypt";
import { authMiddleware } from "../../../lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const users = await query("SELECT id, name, email, role, created_at FROM users");
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const auth = authMiddleware(req, res, ["admin"]);
    if (!auth) return;

    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await query(
      "INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,$4) RETURNING id,name,email,role",
      [name, email, hashedPassword, role]
    );
    return res.status(201).json(newUser[0]);
  }
}
