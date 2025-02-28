import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import { academicFacultyValidationSchema } from "./academicFaculty.validation";

const router = express.Router();

router.get("/", AcademicFacultyControllers.getAllAcademicFaculty);

router.post(
  "/",
  validateRequest(academicFacultyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty
);

router.get("/:facultyId", AcademicFacultyControllers.getSingleAcademicFaculty);

router.put(
  "/:academicFacultyId",
  AcademicFacultyControllers.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
