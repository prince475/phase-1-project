//ADDING LINKS TO API
const Meals =  'https://www.themealdb.com/api/json/v1/1/categories.php'
const Drinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const Search = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

//ADDIMG DOM CONTENT EVENT LISTENER TO LOAD CONTENT IN THE DOM
document.addEventListener('DOMContentLoaded', () => {

    //ROWS DATA
const homeRow = document.getElementById('home')
const mealCategoryRow = document.getElementById('meals')
const searchRow = document.getElementById('search-result')
const dessertRow = document.getElementById('dessert')
const drinksRow = document.getElementById('drinks')

// LINKS DATA
const homeLink = document.getElementById('home-link')    
const mealsLink = document.getElementById('meals-link')
const drinksLink = document.getElementById('drinks-link')
const dessertLink = document.getElementById('dessert-link')


//SEARCH FORM
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search')

//CLICK EVENTS FOR LINKS
mealsLink.addEventListener('click', () => {
    // HIDE DRINKS
    drinksRow.style.display = "none"
    //HIDE DESSERT
    dessertRow.style.display = "none"
    //HIDE SEARCH PAGE
    searchRow.style.display = "none"
    //SHOW MEALS
    mealCategoryRow.removeAttribute('hidden')
    mealCategoryRow.style.display = "flex"
})
drinksLink.addEventListener('click', () => {
    //HIDE MEALS
    mealCategoryRow.style.display = "none"
    //HIDE DESSERT
    dessertRow.style.display = "none"
    //HIDE SEARCH PAGE
    searchRow.style.display = "none"
    //SHOW DRINKS
    drinksRow.removeAttribute('hideen')
    drinksRow.style.display = "flex"
})

})
