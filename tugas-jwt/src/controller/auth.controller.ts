import { Request, Response } from "express";
import * as Yup from "yup";
import { login, register, updateProfile } from "../services/auth.service";
import { IRequestWithUser } from "../middleware/auth.middleware";
import userModel, { User } from "../models/user.model";
import { ObjectId } from "mongoose";


const registrationSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), ""],
        "password must match"
    ),
    roles: Yup.array().of(Yup.string()).optional()
})

const loginSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required()
})


type TloginBody = Yup.InferType<typeof loginSchema>;
type TRegisterBody = Yup.InferType<typeof registrationSchema>;

interface IRequestLogin extends Request{
    body: TloginBody
}

interface IRequestRegister extends Request{
    body: TRegisterBody
}

export default {
    async login(req: IRequestLogin, res: Response){
        try {
            const {email, password} = req.body;
            await loginSchema.validate({email, password});
            const token = await login({email, password});
            res.status(200).json({
                message: "login success",
                data: token
            })
        } catch (error) {
            const err = error as unknown as Error
            res.status(500).json({
                data: null,
                message: err.message
            })
            
        }
    },

    async register(req: IRequestRegister, res: Response) {
        try {
            const {email, fullName, password, username, confirmPassword, roles} = req.body
            await registrationSchema.validate({
                email,
                password,
                fullName,
                username,
                confirmPassword,
                roles
            })

            const user  = await register({
                email,
                fullName,
                username,
                password,
                roles
            })

            res.status(200).json({
                message: "registration success!!!",
                data: user
            })
        } catch (error) {
            const err = error as unknown as Error
            res.status(500).json({
                message: "registration failed",
                data: err.message
            })
        }
    },

    async me(req: IRequestWithUser, res: Response){
        try {
            const id = req.user?.id
            const user = await userModel.findById(id);
            if(!user){
                res.status(403).json({
                    message: `user not found`,
                    data: null
                })
            }

            res.status(200).json({
                message: "success fetch user",
                data: user
            })
        } catch (error) {
            const err = error as unknown as Error
            res.status(500).json({
                message: `failed to get profile`,
                data: err.message
            })
        }
    },

    async updateProfile(req: IRequestWithUser, res: Response){
        try {
            const id = req.user?.id
            const result = await updateProfile(
                id as unknown as ObjectId,
                req.body as User
            )

            res.status(200).json({
                message: "profile update successfully",
                data: result
            })
        } catch (error) {
            res.status(500).json({
                message: "failed to update profile "
            })
        }
    }
}