import contact from '@/public/css/ContactSection/contact.module.css'
import sent from '@/public/css/ContactSection/sent.module.css'
import Send, { ReturnBtn} from './Send'
import global from '@/public/css/global.module.css'
import Image from 'next/image'
import Form from '@/components/ContactSection/Form'

export default function ContactSection() {
    return (
        <section id='contactSection' className={`${contact.bg}`}>
            <div className={`container-fluid row justify-content-center align-items-center py-5`}>
                    <div className={`col-md-12 col-11 ${global.projectDiv} d-flex justify-content-start mt-5 align-items-center`}>
                        <span className={`${global.projectBar} me-4`}></span>
                        <span className={`${global.project}`}>{"Contact/>"}</span>
                    </div>
                    <div className={`col-md-9 col-10 mt-5 pt-4 ${contact.bd}`}>
                        <div  className={`form`}>  
                            <div id='doneSent' className={`col-md-6 text-center ${sent.bg}`}>
                                <Image className={`${sent.img}`} src={'/img/contact/check.svg'} alt="done" width={80} height={80} />
                                <h4>Your Message has been Sent</h4>
                                <p className={`${sent.pg}`}>{"I'll get to you as soon as possible"}</p>
                                <ReturnBtn />
                            </div>
                            <div id={`${contact.spinner}`}>
                                <div className={`spinner-border text-primary`} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <div className='form'>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}