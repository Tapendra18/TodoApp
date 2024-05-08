import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: "string",
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: "string",
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: "string",
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifytoken: String,
    verifytokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
