import about from '@/public/css/AboutSection/about.module.css'
export default function Code3({line,code,code1,codeColor,code1Color,code2,code2Color,code3,code4,code3Color,code4Color,padding}) {
    return (
        <div className={`container-fluid row justify-content-center align-items-center ${about.lightHover}`}>
            <div className={`col-md-1 col-1 d-flex justify-content-end`}>
                <span className={`${about.lineNo}`}>{line}</span>
            </div>
            <div className={`col-md-10 col-10  ${about.bd}`}>
                <div className={`ps-4`}>
                    <span className={`${about.codePadding}`}  style={{letterSpacing:'0.3rem',color:'#3b3553'}}>{padding}</span>
                    <span style={{color:codeColor}} className={`${about.code}`}>{code}</span>
                    <span style={{color:code1Color}} className={`${about.code} ps-2`}>'{code1}'</span>
                    <span style={{color:code2Color}} className={`${about.code} ps-2`}>{code2}</span>
                    <span style={{color:code3Color}} className={`${about.code} ps-2`}>'{code3}'</span>
                    <span style={{color:code4Color}} className={`${about.code} ps-2`}>{code4}</span>
                </div>
            </div>
        </div>
    )
}