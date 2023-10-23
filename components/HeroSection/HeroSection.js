import hero from '@/public/css/HeroSection/hero.module.css'
import Link from 'next/link'
export default function HeroSection() {
    return(
        <div className={`${hero.bg}`}>
            <div className={`container-fluid d-flex flex-column justify-content-evenly pt-5`}>
                <div className={`d-flex ${hero.bg2}`} >
                    <div>
                        <h1>NITIN SINGH NEGI</h1>
                </div>
                </div>
                <div className={`d-flex justify-content-end`}>
                    <div className={`d-flex justify-content-end ${hero.bg3} mb-5`} >
                        <div>
                            <h1>WEB DEVELOPER</h1>
                            <p>Hi 👋 Welcome to my portfolio! I am an enginnering student working on  my degree in I.T</p>
                            <Link href={'#contactSection'} className={`${hero.btn}`}>GET IN TOUCH</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}