import { Router } from "express";
import express from "express";

import { StudentRoutes } from "../moduls/student/student.route";
import { UserRoutes } from "../moduls/user/user.route";

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
]

moduleRoutes.forEach(route => router.use(route.path,route.route))

export default router;

