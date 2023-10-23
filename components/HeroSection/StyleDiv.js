import styleDiv from '@/public/css/HeroSection/stydiv.module.css'
export default function StyleDiv({widthD,heightD,marginR,bgimg,bg,bdrd}) {
    return (
        <span style={{width:widthD,height:heightD,backgroundColor:bg, backgroundImage:bgimg,marginRight:marginR,borderRadius:bdrd}} className={`${styleDiv.div}`} />
    )
}