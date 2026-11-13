import type { NextFunction, Request, Response } from "express";
import type { AuthRequest } from "../middleware/authMiddleware.js";

const asyncHandler = (
    controllerFn:(
        req: Request | AuthRequest,
        res: Response,
        next : NextFunction )=>Promise<void>
) =>
    (req: Request,
     res: Response,
     next : NextFunction) =>{
    Promise.resolve(controllerFn(req, res, next)).catch(next);
}

export default asyncHandler;