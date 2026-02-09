import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export function authMiddleware(req: NextApiRequest, res: NextApiResponse, roles: string[] = []) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    return decoded;
  } catch (err) {
    return res.status(401).json({ message: "Token invalid" });
  }
}
