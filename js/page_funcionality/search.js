// Variables

    var searchbar = document.getElementById("searchbar")
    var all_item_wrappers_store = document.getElementsByClassName("store-container__wrapper")
    var all_item_wrappers_book = document.getElementsByClassName("book-container__wrapper")

    var there_is_item = 0

    const margin_bottom_actions = document.getElementById('actions').style.marginBottom

// 

// Event listener that changes the display according the search progress

    searchbar.addEventListener("input", function() {

        there_is_item = 0

        // Gets the value
        const input_value = searchbar.value.trim().toLowerCase()

        // For store search
        if (searchbar.getAttribute('placeholder') == "Look for a store...") {
            for (let item of all_item_wrappers_store) {
                let storeName = item.getAttribute('data-name').toLowerCase()

                if (storeName.includes(input_value)) {
                    item.style.display = 'flex'

                    there_is_item = 1
                } else {
                    item.style.display = 'none'
                }
            }
        }

        // For book search
        if (searchbar.getAttribute('placeholder') == "Look for a book...") {
            for (let item of all_item_wrappers_book) {
                let storeName = item.getAttribute('data-name').toLowerCase()

                if (storeName.includes(input_value)) {
                    item.style.display = 'flex'

                    there_is_item = 1
                } else {
                    item.style.display = 'none'
                }
            }
        }

        if (!there_is_item) {
            
            document.getElementById('no-items-found').style.display = "block"
            
            document.getElementById('actions').style.marginBottom = 0

        } else {

            document.getElementById('no-items-found').style.display = "none"

            document.getElementById('actions').style.marginBottom = margin_bottom_actions

        }
    })

// 