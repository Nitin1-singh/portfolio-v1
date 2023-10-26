'use client'
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
	const loaderCss = document.getElementById('contact_spinner__wCkW6');
	loaderCss.style.display = 'none';
	formHead.style.display = 'none';
	doneCss.style.display = 'flex';
	doneCss.style.flexDirection = "column";
	doneCss.style.justifyContent = "center";
	doneCss.style.alignItems = "center"
}
export async function loadingCss(name,email,message) {
	console.log("sending laoding css")
	const doneCss = document.getElementById('doneSent');
	const formHead = document.getElementById('formHead');
	const loaderCss = document.getElementById('contact_spinner__wCkW6');

	loaderCss.style.display = 'flex';
	loaderCss.style.justifyContent = 'center';
	loaderCss.style.alignItems = 'center'; 
	formHead.style.display = 'none';
	doneCss.style.display = 'none';

	document.getElementById('email').value = ''
	document.getElementById('name').value = ''
	document.getElementById('descr').value = ''

	const response = await fetch('/api/sendEmail',{
		method: 'POST',
		body: JSON.stringify({name,email,message})
	})
	if(response.status == 200) {
		handleCss()
	}
}
export default function Send() {
  return (  <input onClick={loadingCss} type='button' value={'Send'} className={`${contact.btn}`} />)
}
export function ReturnBtn() {
	return ( <button onClick={returnContact} className={`${sent.btn}`}>Return</button>)
}