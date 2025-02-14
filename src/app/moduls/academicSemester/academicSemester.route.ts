import express, { request } from 'express'
import { validateRequest } from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { createAcademicSemesterValidationSchema } from './academicSemester.validation';


const router = express.Router()


router.post('/create-acedemic-semester', validateRequest(createAcademicSemesterValidationSchema),AcademicSemesterController.createAcademicSemester)


export const AcademicSemesterRoutes = router; 