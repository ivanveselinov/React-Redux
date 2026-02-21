import {produce} from 'immer'
import { add } from 'lodash'

// import {compose, pipe} from 'lodash/fp'

// let userName = "    Ivan    "
// let message = "Hello " + userName.trim() + " Good Morning"
// console.log(message)


// const trim = name => name.trim()
// const generateMessage = name => `Hello ${name} good morning!`
// const convertToUpper = name => name.toUpperCase()
// const result = generateMessage(convertToUpper(trim(userName)));
// console.log(result)


// const newFunc = pipe(trim, convertToUpper, generateMessage);
// const result2= newFunc(userName)
// console.log(result2)

// Update Object method 1

// const employee = { name: "Ivan", age: 34}
// const newEmployee = Object.assign({}, employee, {name: "Martin"})

// console.log(employee)
// console.log(newEmployee)


// Update object method 2

// const employee = { name: "Ivan", age: 34, company: {country: "Australia", city: "Melbourne" }}
// const newEmployee = {
//     ...employee,
//     name: "Martin",
//     company: {...employee.company, city: "Bitola"},
// }

// console.log(employee)
// console.log(newEmployee)


// //  PRODUCE!!
// const employee = { name: "Ivan", age: 34, company: {country: "Australia", city: "Melbourne" }}

// const newEmployee = produce(employee, (draftState) => {
//     draftState.name = "Martin"
//     draftState.company.city = "Bitola"
// })

// console.log(employee)
// console.log(newEmployee)


//  Arrays using immutable opperator //
// const numbers = [10, 20, 30, 40]

// // adding items
// const addedNumber = [...numbers, 50];
// console.log(addedNumber);


// const index = numbers.indexOf(30)

// const addedNumber1= [...numbers.slice(0, index), 50, ...numbers.slice(index)]

// console.log(addedNumber1)

// // Update the item

// const updated = numbers.map (a => a === 40 ? 80 : a)
// console.log(updated)

// // Remove item

// const remove = numbers.filter(a => a !==30)
// console.log(remove)


//  FINAL EXERCISE!!!

const book = {
    author: "Robert Kiyosaki",
    book: {
        name: "Rich Dad Poor Dad",
        price: "$8",
        rating: 4.7,
    },
}

const updatedBook = {
    ...book,
    book: 
        {
            price: "$10",
            rating: 4.8
        }
}

console.log(updatedBook)

const arrayOfBooks = ["Book1", "Book2", "Book3"]
console.log(...arrayOfBooks)

const changeBooks = arrayOfBooks.map(book => book === "Book2" ? "Book4" : book)
console.log(...changeBooks)

console.log('Changed books: ', changeBooks)

