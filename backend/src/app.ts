import express from "express";

import apiRoutes from "./routes/apiRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

export default app; //default export is usually for a single main item
