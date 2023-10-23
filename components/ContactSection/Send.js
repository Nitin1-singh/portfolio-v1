'use client'
import { Resend } from 'resend';
import contact from '@/public/css/ContactSection/contact.module.css'
import sent from '@/public/css/ContactSection/sent.module.css'

function returnContact() {
	const doneCss = document.getElementById('doneSent');
	const formHead = document.getElementById('formHead');
	formHead.style.display = 'block';
	doneCss.style.display = 'none';
	doneCss.style.flexDirection = "none";
	doneCss.style.justifyContent = "none";
	doneCss.style.alignItems = "none"
}

function handleCss() {
	const doneCss = document.getElementById('doneSent');
	const formHead = document.getElementById('formHead');
	formHead.style.display = 'none';
	doneCss.style.display = 'flex';
	doneCss.style.flexDirection = "column";
	doneCss.style.justifyContent = "center";
	doneCss.style.alignItems = "center"

}
export default function Send() {
  return (  <input onClick={sendMessage} type='button' value={'Send'} className={`${contact.btn}`} />)
}
export function ReturnBtn() {
	return ( <button onClick={returnContact} className={`${sent.btn}`}>Return</button>)
}
function sendMessage() {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const descr = document.getElementById('descr');
	handleCss()
//   	const resend = new Resend('re_abTXJEN3_9ciEFknAJiz3YGVwEapa5esG');
  
//   resend.emails.send({
//     from: 'onboarding@resend.dev',
//     to: 'nitinforcoding@gmail.com',
//     subject: 'Hello World',
//     html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
//   });

}