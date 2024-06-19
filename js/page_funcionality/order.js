function order(type, ordenation) {

    // Finds the section that doesn't have a display: none
    let visible_section = findVisibleContainer()

    // Gets all the store or book items
    var all_items = Array.from(visible_section.getElementsByClassName(`container-item-${type}`))
    
    // Orders the items
    var all_items_ordered = sortBy(all_items, ordenation)
    
    // Cleans the section
    visible_section.innerHTML = ''

    // Puts the items in the selected order
    all_items_ordered.forEach(item => visible_section.appendChild(item))
}

function sortBy(all_items, ordenation) {

    switch (ordenation) {

        case 'name_ascending': {
            all_items.sort((a, b) => {
                const nameA = a.getAttribute('data-name').toUpperCase()
                const nameB = b.getAttribute('data-name').toUpperCase()
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            })

            break
        }

        case 'name_descending': {
            all_items.sort((a, b) => {
                const nameA = a.getAttribute('data-name').toUpperCase()
                const nameB = b.getAttribute('data-name').toUpperCase()
                if (nameA > nameB) {
                    return -1
                }
                if (nameA < nameB) {
                    return 1
                }
                return 0
            })

            break
        }


        case 'price_ascending': {
            all_items.sort((a, b) => {
                const priceA = parseFloat(a.getAttribute('data-price'))
                const priceB = parseFloat(b.getAttribute('data-price'))
                return priceA - priceB
            })
            break
        }
    
        case 'price_descending': {
            all_items.sort((a, b) => {
                const priceA = parseFloat(a.getAttribute('data-price'))
                const priceB = parseFloat(b.getAttribute('data-price'))
                return priceB - priceA
            })
            break
        }
        
        case 'amount_ascending': {
            all_items.sort((a, b) => {
                const amountA = parseInt(a.getAttribute('data-amount'), 10)
                const amountB = parseInt(b.getAttribute('data-amount'), 10)
                return amountA - amountB
            })
            break
        }
    
        case 'amount_descending': {
            all_items.sort((a, b) => {
                const amountA = parseInt(a.getAttribute('data-amount'), 10)
                const amountB = parseInt(b.getAttribute('data-amount'), 10)
                return amountB - amountA
            })
            break
        }

    }

    return all_items
}