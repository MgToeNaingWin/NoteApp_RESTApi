import type { Request, Response } from "express";
import { Todo } from "../models/todo.js";
import { User } from "../models/user.js";
import generateToken from "../utils/generatoken.js";
import errorHandler from "../middleware/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";

export const UserRegister =asyncHandler( async (req: Request , res : Response) =>{
    const {name, email , password} = req.body;
    const existUser  = await User.findOne({email});
    if (existUser){
        res.status(400);
        throw new Error ("This Email isbExisting User");
    }
    const user = await User.create({
        name,
        email,
        password
    });
    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email
        });
    }else{
        res.status(400);
        throw new Error ("User register is not success!");

    }
}); 


export const Userlogin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide both email and password");
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const existUser = await User.findOne({ email: normalizedEmail });

  if (existUser && (await existUser.matchPassword(password))) {
    generateToken(res, existUser._id);

    res.status(200).json({
      _id: existUser._id,
      name: existUser.name,
      email: existUser.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});


export const Userlogout = asyncHandler(async (req: Request , res : Response) =>{
    res.cookie("token", null, {
        httpOnly : true,
        expires: new Date(0)
    });
    res.status(200).json({"message" : "User Logout!"

    })
});

export const getUserProfile  = asyncHandler(async (req : Request, res : Response) =>{
    res.status(200).json({
        message : "User Profile"
    })
});

export const updateUserProfile  = asyncHandler(async (req : Request, res : Response) =>{
    res.status(200).json({
        message : "Update User Profile"
    })
});