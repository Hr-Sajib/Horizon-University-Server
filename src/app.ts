import express, { Application, Request, Response } from "express";
import cors from "cors";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { StudentRoutes } from "./app/moduls/student/student.route";

const app: Application = express();
const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// application routes 
    app.use("/api/v1/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

console.log(process.cwd());

export default app;
