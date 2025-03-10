import express, { Application, ErrorRequestHandler, NextFunction, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/moduls/user/user.route"; // Ensure correct path for the import
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFoundHandler } from "./app/middlewares/notFound";
import router from "./app/routes/routes";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api/v1/", router);


// Root route
app.get("/", async(req: Request, res: Response) => {
  const a = 'Welcome to Horizon University..';
  res.send(String(a)); // Send a string as response
});


// global error handler 
app.use(globalErrorHandler);

// not found route 
app.use(notFoundHandler);




export default app;
