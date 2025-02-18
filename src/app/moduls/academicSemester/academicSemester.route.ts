import express, { request } from 'express'
import { validateRequest } from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { createAcademicSemesterValidationSchema } from './academicSemester.validation';


const router = express.Router()


router.post('/create-academic-semester', validateRequest(createAcademicSemesterValidationSchema),AcademicSemesterController.createAcademicSemester)
router.get('/',AcademicSemesterController.getAllAcademicSemesters)

export const AcademicSemesterRoutes = router; 