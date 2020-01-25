const menuIcon = document.getElementById('navbar-container_navbar_menu')
const menuBackground = document.getElementById('menu-active_background')
const list = document.getElementById('menu-list')
const menubars = document.querySelectorAll('.navbar-container_navbar_menu_bars')

let menuactive = false

menuIcon.addEventListener('click', (e)=>{
    menuBackground.classList.toggle('invisible')
    list.classList.toggle('invisible')
    for(x of menubars){
        if(menuactive){
            x.style.background = "white"
        }else{
            x.style.background = "grey"
        }
    }
    menuactive = !menuactive
})

menuBackground.addEventListener('click', e =>{
    menuBackground.classList.toggle('invisible')
    list.classList.toggle('invisible')
    for(x of menubars){
        x.style.background = "white"
    }
    menuactive = !menuactive
})