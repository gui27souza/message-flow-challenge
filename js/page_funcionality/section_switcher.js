// Variables

    // All displayable sections 
    var all_main_section = document.getElementsByClassName("main_section")

    // Window width check for display type: flex or grid
    var window_width = window.innerWidth

// 



// Changes the section visibility, showing the ones in the parameter

    function sectionSwitcher(...args) {

        for (let section of all_main_section) {
            
            // Display type manager
            if (args.includes(section.id)) {

                if (
                    // If bigger screen and all store page / store page
                    window_width >= 600 && (
                        section.id == 'all_store_page' || 
                        section.id == 'store_page') ||
                    
                    // If bigger screen and all book page / book page
                    window_width >= 400 && (
                        section.id == 'all_book_page' || 
                        section.id == 'book_page')
                ) {
                    section.style.display = "grid"
                } else {
                    section.style.display = "flex"
                }

            } else {
                section.style.display = "none"
            }

        }

        // Styles both sections if the section has a header
        if (args.length == 2) {
            sectionStyle(args[0], args[1])
        }        

        // Menu reset on page switch
        closeMenu()

        // Search Reset
        searchReset(args)

        // Order options manager
        if (args.includes('all_store_page')) {
            document.getElementById('price_ascending').style.display = 'none'
            document.getElementById('price_descending').style.display = 'none'
        } else {
            document.getElementById('price_ascending').style.display = 'block'
            document.getElementById('price_descending').style.display = 'block'
        }

        // Actions manager
        if (args.includes('about_page') || args.includes('contact_page')) {
            document.getElementById('actions').style.display = 'none'
        } else {
            document.getElementById('actions').style.display = 'flex'
        }

        // Scroll reset
        window.scrollTo(0, 0)
    }

// 



// Reset search items on page switch

    function searchReset(args) {

        // Makes all the store items avaiable visible again
        for (let item of all_item_wrappers_store) {
            item.style.display = "flex"
        }

        // Makes all the book items avaiable visible again
        for (let item of all_item_wrappers_book) {
            item.style.display = "flex"
        }

        // Placehold manager
        
            if (args.includes('all_book_page') || args.includes('store_page')) {
                searchbar.setAttribute("placeholder", "Look for a book...")
                order_type = 'book'
            }
            if (args.includes('all_store_page') || args.includes('book_page')) {
                searchbar.setAttribute("placeholder", "Look for a store...")
                order_type = 'store'
            }
            
        // 

        searchbar.value = ""
    }

// 

// Style Manager for pages with 2 sections

    function sectionStyle(section1, section2) {

        document.getElementById(section1).style.borderRadius = '0 0 .5rem .5rem'
        document.getElementById(section2).style.borderRadius = '.5rem .5rem 0 0'

    }

// 