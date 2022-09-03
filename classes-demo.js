const person = {
    'firstName': 'Chandler',
    "lastName": 'Bing',
    age: 30 //prefer
}

const personAge: 'age'

console.log(person.firstName)
console.log(person['lastName'])
console.log(person[personAge])

const food = {
    appetizer: 'dinosaur',
    entree: "ice cream",
    dessert: 'fish tacos',
    drink: 'chocolate milk or potentially straight syrup',
    
    const food2 = {
        appetizer: 'chips and queso',
        entree: "chicken burrito",
        dessert: 'churros',
        drink: 'Margarita',
}

const { entree, appetizer } = food
const { entree: mexicanDinnerEntree, appetizer: mexicanDInnerAppetizer } = food2

console.log()
console.log(appetizer)
console.log(food.entree, entree, appetizer)
console.log(mexicanDinnerAppetizer, mexicanDinnerEntree)

food.dessert2 = 'key lime pie'
food.dessert3 = 'tres leches'

for (let course in food){
    console.log(food[course])
}



// const food2Keys = Object.key(food2)
// console.log(food2Keys)
// for(let i=0; i<food2Keys.lenght i++){
//     console.log(food2Keys[i])
//     console.log(food2[food2Keys[i]])
// }