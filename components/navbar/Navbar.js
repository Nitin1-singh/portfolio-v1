import Link from "next/link"
import navbarCss from "@/public/css/navbar/navbar.module.css"
import Image from "next/image"
import MenuBtn from "../client/btn/MenuBtn"
export default function Navbar() {
    return(
        <nav className={`${navbarCss.navBg} fixed-top`}>
            <div className="row justify-content-between align-items-center container-fluid py-3">
                <div className="col-md-4 col-sm-6 col-6">
                    <div className={` d-flex align-items-center text-center ${navbarCss.navLeft}`}>
                        <Link  className={`d-flex align-items-center`} href="#" >
                            {"HOME />"}
                        </Link>
                    </div>
                </div>
                <div className={`col-4 p-auto ${navbarCss.menuBtn}`}>
                    <MenuBtn closeBtn={`${navbarCss.closeBtn}`} />
                </div>
                <div className="col-md-8 col-sm-6">
                    <div className={`${navbarCss.navRight}`}>
                        <ol className={`m-auto ${navbarCss.navItms}`}>
                            <li> <Link  href="#" >{"HOME />"} </Link> </li>
                            <li> <Link  href="#project" >{"PROJECT />"}</Link> </li>
                            <li> <Link  href="#about" >{"ABOUT />"}</Link> </li>
                            <li> <Link  href="#contactSection" > {"CONTACT />"} </Link> </li>
                            <li> <Link  target='_blank' href={'https://github.com/Nitin1-singh'}> <Image alt="github" src={"/img/nav/github.svg"} width={25} height={25} quality={100}/></Link></li>
                            <li><Link target='_blank' href={'https://www.linkedin.com/in/nitin-singh-negi-9b6a95297/'} ><Image alt="linkdin" src={"/img/nav/linkedin.svg"} width={25} height={25} quality={100}/></Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </nav>
    )
}