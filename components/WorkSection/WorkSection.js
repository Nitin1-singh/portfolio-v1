import work from '@/public/css/WorkSection/work.module.css'
import global from '@/public/css/global.module.css'
import Link from 'next/link'
export default function WorkSection() {
    return (
        <section id='project' className={`${work.workBg}`}>
            <div className={`container-fluid row justify-content-center`}>
                <div className={`col-md-12 col-11 ${global.projectDiv} d-flex justify-content-start mt-5 align-items-center`}>
                    <span className={`${global.projectBar} me-4`}></span>
                    <span className={`${global.project}`}>{"PROJECT />"}</span>
                </div>
            </div>
            <div className={`container-fluid row justify-content-center`}>
                <div className={`${work.webDiv} col-md-6 col-12 justify-content-center mt-4`}>
                    <span className={`${work.title} col-6 col-md-6`}>WEB</span>
                    <div className={`col-12 ${work.web} mt-4`}><Link href={'#'}> Portfolio V1 🔥 2023</Link></div>
                </div>
                <div className={`${work.mobileDiv} col-md-4 col-12 mt-4`}>
                    <span className={`${work.title}`}>MOBILE</span>
                    <div className={`col-12 ${work.mobile} mt-4`}><Link href={'#'}>Comming Soon...</Link></div>
                </div>
            </div>
        </section>
    )
}