import express from 'express'
import { AcademicFacultyControllers } from './academicFaculty.controller';

const router = express.Router()


router.get('/', AcademicFacultyControllers.getAllAcademicFaculty)
router.post('/', AcademicFacultyControllers.createAcademicFaculty)
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty)

export const AcademicFacultyRoutes = router;