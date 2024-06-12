// Variables

    // All displayable sections 
    var all_main_section = document.getElementsByClassName("main_section")
    // Window width check for display type: flex or grid
    var window_width = window.innerWidth

// 



// Changes the section visibility, showing the ones in the parameter

    function sectionSwitcher(...args) {

        for (let section of all_main_section) {
            
            if (args.includes(section.id)) {

                if (
                    window_width >= 600 && (
                        section.id == 'all_store_page' || 
                        section.id == 'store_page') ||
                    
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

        if (args.length == 2) {
            sectionStyle(args[0], args[1])
        }

        closeMenu()

        searchReset(args)

        if (args.includes('about_page') || args.includes('contact_page')) {
            document.getElementById('actions').style.display = 'none'
        } else {
            document.getElementById('actions').style.display = 'flex'
        }
    }

// 



// Reset search items on page switch

    function searchReset(args) {

        for (let item of all_item_wrappers_store) {
            item.style.display = "flex"
        }

        for (let item of all_item_wrappers_book) {
            item.style.display = "flex"
        }

        if (args.includes('all_book_page') || args.includes('store_page')) {
            searchbar.setAttribute("placeholder", "Look for a book...")
        }

        if (args.includes('all_store_page') || args.includes('book_page')) {
            searchbar.setAttribute("placeholder", "Look for a store...")
        }

        searchbar.value = ""
    }

// 

// Border Radius Adjust

    function sectionStyle(section1, section2) {

        document.getElementById(section1).style.borderRadius = '0 0 .5rem .5rem'
        document.getElementById(section2).style.borderRadius = '.5rem .5rem 0 0'

    }

// 