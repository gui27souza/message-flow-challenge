
function home() {

    if (menu_is_open) {
        document.getElementById('stores').style.display = 'flex'
        
        document.getElementById('books').style.display = 'none'
        document.getElementById('store-books').style.display = 'none'
        document.getElementById('store-books-header').style.display = 'none'
    }

}

function books() {
    document.getElementById('books').style.display = 'flex'

    document.getElementById('stores').style.display = 'none'
    document.getElementById('store-books').style.display = 'none'
    document.getElementById('store-books-header').style.display = 'none'
    
}

function store() {
    document.getElementById('store-books').style.display = 'flex'
    document.getElementById('store-books-header').style.display = 'flex'
    
    document.getElementById('books').style.display = 'none'
    document.getElementById('stores').style.display = 'none'
}