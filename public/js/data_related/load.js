// Function that is called when the page is loaded and loads all the stores in the main page

    function loadStores() {

        // Loop that gets each and every store in the main array of the data and create a store
        data.forEach(store => {

            // Full Amount of the Store
            let store_full_amount = 0
            store.resellerBookStock.forEach( _ => store_full_amount++)

            // Create an HTML Element for each store
            createStore(store.name, store_full_amount, 'all_store_page')

        })

        // By default, display in alphabetical order
        order('store', 'name_ascending')

    }

//


// Function that is called when the page is loaded and loads all the books for the book page
    
    function loadBooks() {

        // Object to store books and their aggregated data
        let all_books = {}

        // Loop that checks if a book is already on the page, if it's not, it will add it
        data.forEach(store => {
            store.resellerBookStock.forEach(book => {
                if (!all_books[book.id]) {
                    all_books[book.id] = {
                        id: book.id,
                        name: book.name,
                        price: book.price,
                        amount: book.amount
                    }
                } else {
                    // checks the amount to sum it and checks the price to find the lowest
                    all_books[book.id].amount += book.amount
                    if (book.price < all_books[book.id].price) {
                        all_books[book.id].price = book.price
                    }
                }
            })
        })

        // Create an HTML Element for each book
        Object.values(all_books).forEach(book => {
            createBook(book.name, book.price, book.amount, book.id, 'all_book_page')
        })
    }

// 