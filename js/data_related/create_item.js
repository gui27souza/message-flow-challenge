// Creates a Store Item in the HTML

    function createStore(store_name, store_full_amount, section_id, price) {
            
        const store_element = document.createElement("div")
        store_element.classList.add("store-container__wrapper")
        store_element.setAttribute('data-searchValue', `${store_name}`)

        store_element.innerHTML = `
            <div class="store-item"
                onclick="sectionSwitcher('store_page', 'store_page_header'); openStore('${store_name}')">
                    <img src="images/Store Logos/${store_name}.svg" alt="" class="store-item__logo">
                    <div class="store-item__text">
                        <div class="store-item__text__name">
                            <span>
                                ${store_name}
                            </span>
                        </div>
                        <div class="store-item__text__amount">
                            <span>
                                ${store_full_amount}
                            </span>
                        </div>
                        <div class="store-item__text__price">
                            <span>
                                U$ ${price}
                            </span>
                        </div>
                    </div>
                </div>
        `;

        document.getElementById(`${section_id}`).appendChild(store_element)

        if (price == undefined) {
            price = ''
            for (let price_div of document.getElementsByClassName('store-item__text__price')) {
                price_div.style.display = 'none'
            }
        }
    }

//



// Creates a Book Item in the HTML

    function createBook(name, price, amount, id, section_id) {

        const book_element = document.createElement("div")
        book_element.classList.add("book-container__wrapper")
        book_element.setAttribute('data-searchValue', `${name}`)
        book_element.innerHTML = `
            <div class="book-item" onclick="sectionSwitcher('book_page', 'book_page_header'); openBook('${name}', '${id}')">
                    
                <img src="images/Book Covers/${id}.png" alt="" class="book-item__logo">
                
                <div class="book-item__text">
                    <div class="book-item__text__name book-item__text__item">
                        <span>
                            ${name}
                        </span>
                    </div>
                    <div class="book-item__text__price book-item__text__item">
                        <span>
                            U$ ${price}
                        </span>
                    </div>
                    <div class="book-item__text__units book-item__text__item">
                        <span>
                            ${amount} units
                        </span>
                    </div>
                </div>
                
            </div>
        `;

        document.getElementById(`${section_id}`).appendChild(book_element)

    }

//