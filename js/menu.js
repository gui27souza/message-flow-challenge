// Variables

    var all_items = document.getElementsByClassName("header__menu__item")
    var menu_is_open = 0
    var window_width = window.innerWidth

// 


// Function that makes the menu work in smaller screens

    function menu() {

        // Does nothing if the screen is big, so it doesn't require the menu
        if (window_width > 940) {
            return
        } 

        // Calls the open or close menu if the menu is alternate
        if (!menu_is_open) {
            openMenu()
        } else {
            closeMenu()
        }

    }

// 

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