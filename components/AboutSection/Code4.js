import about from '@/public/css/AboutSection/about.module.css'
export default function Code4({line,code,code1,codeColor,code1Color,code2,code2Color,code3,code4,code3Color,code4Color,padding}) {
    return (
        <div className={`container-fluid row justify-content-center ${about.lightHover}`}>
            <div className={`col-md-1 col-1 d-flex justify-content-end`}>
                <span className={`${about.lineNo}`}>{line}</span>
            </div>
            <div className={`col-md-10 col-10  ${about.bd}`}>
                <div className={`ps-4`}>
                    <span className={`${about.codePadding}`}  style={{letterSpacing:'0.3rem',color:'#3b3553'}}>....</span>
                    <span style={{color:codeColor}} className={`${about.code} `}>{'return'}</span>
                    <span style={{color:code1Color}} className={`${about.code} ps-2`}>{'['}</span>
                    <span style={{color:code2Color}} className={`${about.code} ps-2`}>{"'HTML/CSS/JS', 'Node.js', 'Bootstrap', 'Next.js', 'React', 'C/C++', 'python', 'Java, 'mongoDB' "}</span>
                    <span>|</span>
                    <span style={{color:code3Color}} className={`${about.code} ps-2`}>{']'}</span>
                </div>
            </div>
        </div>
    )
}