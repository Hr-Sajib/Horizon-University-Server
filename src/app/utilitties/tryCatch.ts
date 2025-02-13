import { NextFunction, RequestHandler ,Response, Request} from "express"


 
export const catchAsync = (fn: RequestHandler) => {   // instead of repeaded use of try catch in all functions we used upper level function
    return (req: Request, res: Response, next:NextFunction)=>{
        Promise.resolve( fn(req, res, next)).catch(err => next(err))
    }
    
}