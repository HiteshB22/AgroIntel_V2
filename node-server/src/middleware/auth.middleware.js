import jwt from "jsonwebtoken";
import { ENV } from "../config/env.config.js";

export const protect = (req, res, next) => {
  const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, ENV.JWT_ACCESS_SECRET);
        req.userId = decoded.id;
        next();
    }catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}
