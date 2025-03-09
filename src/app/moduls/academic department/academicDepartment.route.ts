import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";
import { academicDepartmentValidationSchema } from "./academicDepartment.validation";


const router = express.Router();

router.get("/", AcademicDepartmentControllers.getAllAcademicDepartment);

router.post(
  "/",
  // validateRequest(academicDepartmentValidationSchema),
  AcademicDepartmentControllers.createAcademicDepartment
);

router.get("/:departmentId", AcademicDepartmentControllers.getSingleAcademicDepartment);

router.put(
  "/:academicDepartmentId",
  AcademicDepartmentControllers.updateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
