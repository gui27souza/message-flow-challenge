var window_width = window.innerWidth

function home() {

    if (menu_is_open || window_width > 940) {
        document.getElementById('stores').style.display = 'flex'
        
        document.getElementById('books').style.display = 'none'
        document.getElementById('store-books').style.display = 'none'
        document.getElementById('store-books-header').style.display = 'none'
        document.getElementById('book-page').style.display = 'none'
        document.getElementById('book-page-stores').style.display = 'none'

        
    } else {
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

    closeMenu()
}

function bookPage() {
    document.getElementById('book-page').style.display = 'flex'
    document.getElementById('book-page-stores').style.display = 'flex'
    
    document.getElementById('stores').style.display = 'none'
    document.getElementById('books').style.display = 'none'
    document.getElementById('store-books').style.display = 'none'
    document.getElementById('store-books-header').style.display = 'none'

    closeMenu()
}

function store() {
    document.getElementById('store-books').style.display = 'flex'
    document.getElementById('store-books-header').style.display = 'flex'
    
    document.getElementById('books').style.display = 'none'
    document.getElementById('stores').style.display = 'none'
    document.getElementById('book-page').style.display = 'none'
    document.getElementById('book-page-stores').style.display = 'none'

    closeMenu()
}