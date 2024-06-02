// Variables

    var searchbar = document.getElementById("searchbar")
    var all_item_wrappers_store = document.getElementsByClassName("store-container__wrapper")
    var all_item_wrappers_book = document.getElementsByClassName("book-container__wrapper")

// 

// Event listener that changes the display according the search progress

    searchbar.addEventListener("input", function() {

        // Gets the value
        const input_value = searchbar.value

        // For store search
        for (let item of all_item_wrappers_store) {
            let storeName = item.getAttribute('data-searchValue')

            if (storeName.includes(input_value)) {
                item.style.display = 'flex'
            } else {
                item.style.display = 'none'
            }
        }

        // For book search
        for (let item of all_item_wrappers_book) {
            let storeName = item.getAttribute('data-searchValue')

            if (storeName.includes(input_value)) {
                item.style.display = 'flex'
            } else {
                item.style.display = 'none'
            }
        }
    })

// 