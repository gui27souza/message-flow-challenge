// Variables

    var searchbar = document.getElementById("searchbar")
    var window_width = window.innerWidth

// 

// Functions that change the sections displays on each specific case

function home() {

    if (menu_is_open || window_width > 940) {
        document.getElementById('stores').style.display = 'flex'
        
        document.getElementById('books').style.display = 'none'
        document.getElementById('store-books').style.display = 'none'
        document.getElementById('store-books-header').style.display = 'none'
        document.getElementById('book-page').style.display = 'none'
        document.getElementById('book-page-stores').style.display = 'none'

        searchbar.setAttribute("placeholder", "Look for a store...")
        searchbar.value = ""

    } else {
        
        // Closes the menu in smaller screens in case it is open on the page switch
        closeMenu()
    }

}

function books() {
    document.getElementById('books').style.display = 'flex'

    document.getElementById('stores').style.display = 'none'
    document.getElementById('store-books').style.display = 'none'
    document.getElementById('store-books-header').style.display = 'none'
    document.getElementById('book-page').style.display = 'none'
    document.getElementById('book-page-stores').style.display = 'none'

    searchbar.setAttribute("placeholder", "Look for a book...")
    searchbar.value = ""

    
    // Closes the menu in smaller screens in case it is open on the page switch
    closeMenu()
}

function bookPage() {
    document.getElementById('book-page').style.display = 'flex'
    document.getElementById('book-page-stores').style.display = 'flex'
    
    document.getElementById('stores').style.display = 'none'
    document.getElementById('books').style.display = 'none'
    document.getElementById('store-books').style.display = 'none'
    document.getElementById('store-books-header').style.display = 'none'

    searchbar.setAttribute("placeholder", "Look for a store...")
    searchbar.value = ""

    
    // Closes the menu in smaller screens in case it is open on the page switch
    closeMenu()
}

function store() {
    document.getElementById('store-books').style.display = 'flex'
    document.getElementById('store-books-header').style.display = 'flex'
    
    document.getElementById('books').style.display = 'none'
    document.getElementById('stores').style.display = 'none'
    document.getElementById('book-page').style.display = 'none'
    document.getElementById('book-page-stores').style.display = 'none'

    searchbar.setAttribute("placeholder", "Look for a book...")
    searchbar.value = ""

    
    // Closes the menu in smaller screens in case it is open on the page switch
    closeMenu()
}