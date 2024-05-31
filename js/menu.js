var all_items = document.getElementsByClassName("header__menu__item")

var menu_is_open = 0

function menu() {

    var window_width = window.innerWidth

    if (window_width > 940) {
        return
    } 

    if (!menu_is_open) {
        openMenu()
    } else {
        closeMenu()
    }

}

function openMenu() {

    for (let item of all_items) {
        item.style.display = "flex"
    }

    menu_is_open = 1
}

function closeMenu() {

    if (window_width < 940) {
        
        for (let item of all_items) {
            item.style.display = "none"
        }
        
        document.getElementById("main-button").style.display = "flex"
        
        menu_is_open = 0
    } 
}