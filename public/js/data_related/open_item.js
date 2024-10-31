// Function that opens a Store Page when a store item is clicked on the Home Page or a Book Page

    function openStore(store_name) {

        // Finds the sotre object in the data
        let store = data.find(obj => obj.name === store_name)

        // Cleans the section and give Store Name
        document.getElementById('store_page').innerHTML = ''
        document.getElementById('store__text__name__store-name').innerHTML = store.name
        document.getElementById('store-logo').setAttribute('src', `../images/Store Logos/${store_name}.svg`)

        // Creates the Book Item, with name, price, amount and id, also counts how many differents book are in the store
        var store_amount = 0
        store.resellerBookStock.forEach(book => {

            let name = book.name
            let price = book.price
            let amount = book.amount
            let id = book.id

            createBook(name, price, amount, id, 'store_page')

            store_amount++
        })

        // Puts the amount of books in the HTML
        document.getElementById('store__text__description__store-amount').innerHTML = store_amount + ' Books'

        // Resets the avaiable items for search
        all_item_wrappers_book =  document.getElementById('store_page').getElementsByClassName('book-container__wrapper')
    }

//



// Function that opens a Book Page when a book item is clicked on the All Books Page or a Store Page

    function openBook(book_name, book_id) {
            
        // Cleans the section and give Book Name and Book Cover
        document.getElementById('book_page').innerHTML = ''
        document.getElementById('book-name').innerHTML = book_name
        document.getElementById('book-cover').setAttribute('src', `../images/Book Covers/${book_id}.png`)

        // Displays all the Stores with this book
        data.forEach(store => {
            store.resellerBookStock.forEach(book => {
                if (book.id == book_id) {
                    createStore(store.name, book.amount, 'book_page', book.price)
                }
            })
        })
        
        // Resets the avaiable items for search
        all_item_wrappers_store =  document.getElementById('book_page').getElementsByClassName('store-container__wrapper')
    }

// 