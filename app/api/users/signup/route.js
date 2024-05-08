import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import brcrptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";


connect();

export async function POST(req) {
    try {
        // error are created here req.body

        const reqBody = req.json();
        const { username, email, password } = reqBody;

        //validation 

        console.log(req.body);

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User Already Registered" }, { status: 400 });
        }

        const salt = await brcrptjs.genSalt(10);
        const hashedPassword = await brcrptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        //send verifation email 
        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })

        return NextResponse.json({
            message: "user registered successfully",
            success: true,
            savedUser
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
