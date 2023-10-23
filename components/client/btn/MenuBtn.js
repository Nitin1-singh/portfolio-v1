"use client"
function menuCLick() {
    const menuBar = document.querySelector(".navbar_navRight__6NbV9");
    const menuImg = document.querySelector(".menuBtnA");
    menuBar.classList.toggle("navbar_activeMenu__MiC04");
    menuImg.classList.toggle("navbar_closeBtn__xZ2Eu");
    console.log(menuImg);

}
export default function MenuBtn() {
    return(<a onClick={()=>menuCLick()} className={`menuBtnA`}></a>);
}