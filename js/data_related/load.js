// Function that is called when the page is loaded and loads all the stores in the main page

    function loadStores() {

        // Loop that gets each and every store in the main array of the data and create a store
        data.forEach(obj => {

            let store_name = obj.name
            
            let store_full_amount = 0
            obj.resellerBookStock.forEach( _ => store_full_amount++)

            // Creates a store item with the name and amount of different books, also being a link to the store page
            createStore(store_name, store_full_amount + ' books', 'all_store_page')

        })

    }

//



// Function that is called when the page is loaded and loads all the books for the book page

    function loadBooks() {

        // Array that will help to see if a book is already on the page
        let all_books = []

        // Loop that checks if a book is already on the page, if it's not, it will add it
        data.forEach(store => {
            store.resellerBookStock.forEach(book => {
                if (!all_books.includes(book.id)) {
                    all_books.push(book.id)
                    createBook(book.name, book.price, book.amount, book.id, 'all_book_page')
                }
            })
        })

    }

//