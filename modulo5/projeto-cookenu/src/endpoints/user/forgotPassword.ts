import { Request, Response } from "express";
import { UserDatabase } from "../../data/user/userDatabase";
import transporter from "../../services/mailTransporter";

export const forgotPassword = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.body.email) {
            throw new Error("Please, inform the user is email.")
        }

        await new UserDatabase().changePasswordByEmail(req.body.email)

        const [userData] = await new UserDatabase().getUserByEmail(req.body.email)

        if (!userData) {
            throw new Error("User not found.")
        }

        const mailNewPassword = await transporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: `${req.body.email}`,
            subject: "[NO-REPLY] You new password on Cookenu",
            text: `Hello ${userData.name}, this is your new password: ${userData.password}.
            Please, as soon is possible change your password in our system.
            Regards!
            Cookenu team!`,
            html: `<p>Hello ${userData.name}, this is your new password: ${userData.password}.</p>
            <p>Please, as soon is possible change your password in our system.</p>
            <p>Regards!</p>
            <p>Cookenu team!</p>`
        })

        res.status(200).send({mailNewPassword, message: "User is password has been changed." })
    } catch (error: any) {
        res.status(200).send
    }
}