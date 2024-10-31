// Variables

    var searchbar = document.getElementById("searchbar")
    
    var all_item_wrappers_store = document.getElementsByClassName("store-container__wrapper")
    var all_item_wrappers_book = document.getElementsByClassName("book-container__wrapper")

    var there_is_item = 0

    const margin_bottom_actions = document.getElementById('actions').style.marginBottom
    const padding_bottom_actions = document.getElementById('actions').style.paddingBottom

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

        noItemsFound(there_is_item)
    })

// 



// no-items-found manager

    function noItemsFound(there_is_item) {
        
        // Gets HTML elements
            let visible_container = findVisibleContainer()
            let visible_header = findVisibleHeader()

            const actions = document.getElementById('actions')
            const no_items_found = document.getElementById('no-items-found')
        // 

        if (!there_is_item) {
                
            no_items_found.style.display = "block"
            
            actions.style.marginBottom = 0
            actions.style.paddingBottom = 0
            actions.style.borderRadius = '.5rem .5rem 0 0'

            visible_container.style.visibility = 'hidden'

            if (visible_header) visible_header.style.visibility = 'hidden'

        } else {

            no_items_found.style.display = "none"
            
            actions.style.marginBottom = margin_bottom_actions
            actions.style.paddingBottom = padding_bottom_actions
            actions.style.borderRadius = '.5rem'

            visible_container.style.visibility = 'visible'
            if (visible_header) visible_header.style.visibility = 'visible'
        }
    }

// 