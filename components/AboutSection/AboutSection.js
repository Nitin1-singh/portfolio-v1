import about from '@/public/css/AboutSection/about.module.css'
import global from '@/public/css/global.module.css'
import CodePart from './CodePart'
import Code2 from './Code2'
import Code3 from './Code3'
import Code4 from './Code4'
export default function AboutSection() {
    return(
        <section id='about'>
            <div className={`${about.bg} pb-5`}>
                <div className={`container-fluid row justify-content-center py-5`}>
                <div className={`col-md-12 col-11 ${global.projectDiv} d-flex justify-content-start mt-5 align-items-center`}>
                        <span className={`${global.projectBar} me-4`}></span>
                        <span className={`${global.project}`}>{"ABOUT />"}</span>
                    </div>
                </div>
                <CodePart line={'01'} code={'class'} codeColor={'#4C17B8'} code1={'Nitin Singh Negi'} code1Color={'#DFEF30'} code2={'{'}/>
                <CodePart line={'02'} code={'constructor ( )'} padding={'..'} codeColor={'#4C17B8'} code1={'{'}/>
                <Code2 line={'03'} code={'this'} padding={'....'} codeColor={'#D8234A'} code1={'.'}
                    code2={'name'} code2Color={'#22D48B'} code3={'='} code3Color={'#D8234A'} code4={"'Nitin Singh Negi'"} code4Color={'#23DE3A'}
                />
                 <Code2 line={'04'} code={'this'} padding={'....'} codeColor={'#D8234A'} code1={'.'}
                    code2={'dateOfBirth'} code2Color={'#22D48B'} code3={'='} code3Color={'#D8234A'} code4={"'08-08-2003'"} code4Color={'#DFEF30'}
                />
                 <Code2 line={'05'} code={'this'} padding={'....'} codeColor={'#D8234A'} code1={'.'}
                    code2={'email'} code2Color={'#22D48B'} code3={'='} code3Color={'#D8234A'} code4={"'nitinforcoding@gmail.com'"} code4Color={'#23DE3A'}
                />
                <CodePart line={'06'} padding={'..'} code={'}'} />
                <CodePart line={'07'} padding={'..'} code={'education'} codeColor={'#DFEF30'} code1={'( ) {'} />
                <CodePart line={'08'} padding={'....'} code={'return'} codeColor={'#4C17B8'} code1={'['} />
                <Code3 line={'09'} padding={'......'} code={'{'} code1={'2023-now'} code2={':'} code3={'College student pursuing Btech in IT'} code4={'}'} code1Color={'#23DE3A'} code3Color={'#23DE3A'} />
                <CodePart line={'10'} padding={'....'} code={']'} />
                <CodePart line={'11'} padding={'..'} code={'}'} />
                <CodePart line={'12'} padding={'..'} code={'skills'} codeColor={'#DFEF30'} code1={'( ) {'} />
                <Code4 line={'13'} codeColor={'#4C17B8'} code2Color={'#23DE3A'} />
                <CodePart line={'14'} padding={'..'} code={'}'}/>
                <CodePart line={'15'} code={'}'} />
            </div>
        </section>
    )
}