import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function middleware(req: Request, res: Response, next: NextFunction) { 
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY);
    if(!decoded) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = (decoded as any).payload.sub;
//
    req.userId = userId;

    next();
}