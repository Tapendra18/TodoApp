import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import brcyptjs from "bcryptjs"


export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        const hashedToken = await brcyptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                { verifyToken: hashedToken, verifytokenExpiry: Date.now() + 3600000 })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 })
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: true,
            auth: {
                user: "maddison53@ethereal.email",
                pass: "jn7jnAPss4f63QBp6D",
            },
        });

        const mailOptions = {
            from: 'tapendra34@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your Email" : "Reset Your Passwords",
            html: "<b>Hello world?</b>",
        }

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse
    } catch (error) {
        throw new Error(error.message);
    }
}