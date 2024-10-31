// Global var that will recieve the JSON data
let data = [] 

// Makes sure that the data store happens once
document.addEventListener('DOMContentLoaded', () => {
    loadJSON()
})

async function loadJSON() {

    // Gets the data of the JSON
    const response = await fetch('/data/data.json')
    
    // Store data in global var
    data = await response.json()
    
    // Check the loaded data
    console.log(data)
    
    // Loads all the stores in the home page
    loadStores()
    // Loads all the books in the books page
    loadBooks()
}