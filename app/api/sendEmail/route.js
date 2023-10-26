import { NextResponse } from "next/server";
import { createTransport } from "nodemailer"
export  async function POST(req) {
    const {name,email,message} = await req.json();
    const transporter = createTransport({
		host:"smtp-relay.brevo.com",
		port:587,
		auth:{
			user:'nitinforcoding@gmail.com',
			pass:process.env.EMAIL_API
		}
	})
    const mailOption = {
		from:email,
		to:'nitinforcoding@gmail.com',
		subject:"Email from portfolio v1 2023",
		html:`<h1>Name = ${name}</h1>
        <li>Email = ${email}</li>
        <p>Subject = ${message}</p>`
	}
	await transporter.sendMail(mailOption)
    return NextResponse.json({message:'Done'},{status:200})
}