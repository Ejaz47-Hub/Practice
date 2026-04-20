import express from "express"
import Router from "./routes/Auth.Route.js";

const app = express()
app.use(express.json())
app.use("/api/auth",Router)


export default app;