import { Router } from "express";
import express from "express";

import { StudentRoutes } from "../moduls/student/student.route";
import { UserRoutes } from "../moduls/user/user.route";
import { AcademicSemesterRoutes } from "../moduls/academicSemester/academicSemester.route";

const router = express.Router();

const moduleRoutes = [
    {
        path:'/users',
        route: UserRoutes
    },
    {
        path:'/students',
        route: StudentRoutes
    },
    {
        path:'/academic-semester',
        route: AcademicSemesterRoutes
    },
]

moduleRoutes.forEach(route => router.use(route.path,route.route))

export default router;

