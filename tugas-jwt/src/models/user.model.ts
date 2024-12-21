import mongoose, { model } from "mongoose";
import {encrypt} from "../utils/encryption"


const  Schema = mongoose.Schema;

export interface User {
    fullName: string,
    username: string,
    email: string,
    password: string,
    roles: [string],
    profilePicture: string,
    createdAt?: string
}

const userSchema = new Schema<User> (
    {
        fullName: {
            type: Schema.Types.String,
            required: true
        },
        username: {
            type: Schema.Types.String,
            required: true,
            unique: true
        },
        email: {
            type: Schema.Types.String,
            required: true,
            unique: true
        },
        password: {
            type: Schema.Types.String,
            required: true
        },
        roles: {
            type: [Schema.Types.String],
            enum: ["admin", "user"],
            default: ["user"]
        },
        profilePicture:{
            type: Schema.Types.String,
            default: "user.jpg"
        }
    },
    {
        timestamps: true,
    }
)

userSchema.pre("save", function(next) {
    const user = this;
    user.password = encrypt(user.password)
    next()
})

userSchema.pre("updateOne", function(next){
    const user = (this as unknown as {_update: any})._update as User
    user.password = encrypt(user.password)
    next()
})

userSchema.methods.toJSON = function(){
    const user = this.toObject();
    delete user.password;
    return user 
}

const userModel = mongoose.model("User", userSchema);
export default userModel;
