import { NextResponse } from "next/server";
import User from "@/models/userModel.js"; // Adjust this import to your actual User model
import brcrptjs from "bcryptjs"; // Ensure this is properly imported
import { sendEmail } from "@/helpers/mailer"; // Adjust this import to your actual sendEmail function

export async function POST(req, res) {
  try {
    const body = await req.json(); // Parse the incoming request body as JSON

    const { username, email, password } = body;
    console.log(body);

    // Validation check for required fields
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Username, email, and password are required." },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already registered" },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await brcrptjs.genSalt(10);
    const hashedPassword = await brcrptjs.hash(password, salt);

    // Create and save the new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    // Send verification email
    // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json(
      {
        message: "User registered successfully",
        success: true,
        savedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
