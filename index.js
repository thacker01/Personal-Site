const menuIcon = document.getElementById('navbar-container_navbar_menu')
const menuBackground = document.getElementById('menu-active_background')
const menuForeground = document.getElementById('menu-active_foreground')

menuIcon.addEventListener('click', (e)=>{
    menuBackground.classList.toggle('invisible')
    menuForeground.classList.toggle('invisible')
})

menuBackground.addEventListener('click', e =>{
    menuBackground.classList.toggle('invisible')
    menuForeground.classList.toggle('invisible')
})

menuForeground.addEventListener('click', e =>{
    menuForeground.classList.toggle('invisible')
    menuBackground.classList.toggle('invisible')
})