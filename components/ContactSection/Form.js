'use client'
import React from "react"
import { useForm } from "react-hook-form"
import Link from 'next/link'
import Image from 'next/image'

import contact from '@/public/css/ContactSection/contact.module.css'
import { loadingCss } from "@/components/ContactSection/Send"
export default function Form() {
    const {register,handleSubmit,formState:{errors}} = useForm()
    return(
            <form onSubmit={handleSubmit((data) => {
                loadingCss(data.firstname,data.email,data.message)
            })}>
                <div id={`formHead`}>
                    <div className={`form-floating col-md-12 mb-3`}>
                        <input className={`${contact.inputForm} form-control`}  {...register("firstname",{required: "This feild is required", minLength: {value:4,
                        message:"Min lenght is 4"}})} id="name"/>
                        <label htmlFor="name">Name</label>
                        <p className={`${contact.pForm}`}>{errors.firstname?.message}</p>
                    </div>
                    <div className={`form-floating col-md-12 mb-3`}>
                        <input className={`${contact.inputForm} form-control`} type="email" {...register("email",{required: "This feild is required", minLength: {value:4,message:"Min lenght is 4"}})} id="email"/>
                        <label htmlFor="email">Email</label>
                        <p className={`${contact.pForm}`}>{errors.email?.message}</p>
                    </div>
                    <div className={`form-floating col-md-12`}>
                        <textarea id="descr" className={`${contact.messageBox}`} {...register("message",{required: "This feild is required", minLength: {value:4,message:"Min lenght is 4"}})} placeholder="Message"/>
                        <p className={`${contact.pForm}`}>{errors.message?.message}</p>
                    </div>
                    <div className='col-md-12 col-12 d-flex align-items-center justify-content-between'>
                        <div>
                            <Link target='_blank' href={'https://github.com/Nitin1-singh'}><Image  className={`${contact.img}`} alt='github' src={'/img/nav/github.svg'} width={30} height={30}/></Link>
                            <Link target='_blank' href={'https://www.linkedin.com/in/nitin-singh-negi-9b6a95297/'}><Image alt='linkdin' className={`ms-4 ${contact.img}`} src={'/img/nav/linkedin.svg'} width={30} height={30}/></Link>
                        </div>
                        <div>
                            <button className={`${contact.btn}`} type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
    )
}