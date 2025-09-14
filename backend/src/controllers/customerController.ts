import type { Request, Response } from "express"; // Types for Express
import pool from "../db/db.js"; // Import the PostgreSQL pool

export const getCustomers = async (req: Request, res: Response) => {
    try {
      // Execute a simple SELECT query
      const result = await pool.query("SELECT * FROM customers ORDER BY id ASC");
  
      // Send the rows as JSON response
      res.json(result.rows);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };