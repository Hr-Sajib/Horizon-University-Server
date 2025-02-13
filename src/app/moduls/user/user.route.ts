import express, { NextFunction ,Request, Response} from 'express'
import { AnyZodObject } from 'zod';
import { studentValidations } from '../student/student.validation';
import { UserController } from './user.controller';


const router = express.Router();


// validator 
const validateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
  
      try {
        // Ensure that 'student' exists within the request body
        await schema.parseAsync({
          student: req.body?.student, // This should be wrapped in `student` property
        });
  
        next();
      } catch (err) {
        next(err);
      }
    };
  };
  


 

router.post('/create-student',validateRequest(studentValidations.createStudentValidationSchema), UserController.createStudent);

export const UserRoutes = router;
