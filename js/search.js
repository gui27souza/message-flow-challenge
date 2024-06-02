var searchbar = document.getElementById("searchbar")
var all_item_wrappers_store = document.getElementsByClassName("store-container__wrapper")
var all_item_wrappers_book = document.getElementsByClassName("book-container__wrapper")

searchbar.addEventListener("input", function() {
    const input_value = searchbar.value

    for (let item of all_item_wrappers_store) {
        let storeName = item.getAttribute('data-searchValue')

        if (storeName.includes(input_value)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    }

    for (let item of all_item_wrappers_book) {
        let storeName = item.getAttribute('data-searchValue')

        if (storeName.includes(input_value)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    }
})
