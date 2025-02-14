import express, { request } from 'express'
import { validateRequest } from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';


const router = express.Router()


router.post('/create-acedemic-semester', validateRequest(request.body.academicSemesterData),AcademicSemesterController.createAcademicSemester)


export const AcademicSemesterRoutes = router; 