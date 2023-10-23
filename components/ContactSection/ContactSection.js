import contact from '@/public/css/ContactSection/contact.module.css'
import sent from '@/public/css/ContactSection/sent.module.css'
import Send, { ReturnBtn } from './Send'
import global from '@/public/css/global.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section id='contactSection' className={`${contact.bg}`}>
            <div className={`container-fluid row justify-content-center align-items-center py-5`}>
                    <div className={`col-md-12 col-11 ${global.projectDiv} d-flex justify-content-start mt-5 align-items-center`}>
                        <span className={`${global.projectBar} me-4`}></span>
                        <span className={`${global.project}`}>{"Contact/>"}</span>
                    </div>
                    <div className={`col-md-9 col-10 mt-5 pt-4 ${contact.bd}`}>
                        <div className={`form`}>  
                            <div id='doneSent' className={`col-md-6 text-center ${sent.bg}`}>
                                <Image className={`${sent.img}`} src={'/img/contact/check.svg'} alt="done" width={80} height={80} />
                                <h4>Your Message has been Sent</h4>
                                <p className={`${sent.pg}`}>I'll get to you as soon as possible</p>
                                <ReturnBtn />
                            </div>
                        <div id={`formHead`}>
                            <div className={`form-floating col-md-12 mb-3`}>
                                <input id='name' type="text" className="form-control" name='name'/>
                                <label htmlFor="name">Name:</label>
                            </div>
                            <div className="form-floating col-md-12 mb-3">
                                <input id='email' name='email' type="email" className="form-control"/>
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div className={`form-floating col-md-12 ${contact.textArea}`}>
                                <textarea id='descr' name='descr' style={{height:'300px',resize:'none'}} className="form-control"></textarea>
                                <label htmlFor="descr">Message:</label>
                                </div>
                            <div className='col-md-12 col-12 d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link target='_blank' href={'https://github.com/Nitin1-singh'}><Image  className={`${contact.img}`} alt='github' src={'/img/nav/github.svg'} width={30} height={30}/></Link>
                                    <Link target='_blank' href={'https://www.linkedin.com/in/nitin-singh-negi-9b6a95297/'}><Image alt='linkdin' className={`ms-4 ${contact.img}`} src={'/img/nav/linkedin.svg'} width={30} height={30}/></Link>
                                </div>
                                <div>
                                <Send />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}