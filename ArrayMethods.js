const cars = ["mahindra","ferrari","tesla","audi","suziki","yamaha"]
console.log(cars)
console.log( "my first car is",cars[0])
console.log(cars[2])
console.log(cars[3])

const noofcars = cars.length
console.log(noofcars)

document.getElementById("totalcars").innerHTML = noofcars

console.log("last car is", cars[noofcars -1])
console.log("third car is", cars[noofcars -2])

//adding elements at the end of array using push method

console.log(cars)
cars.push("benz")
cars.push("verna")
console.log(cars)

//pop method used to remove the items at the end of the array
const removeditem = cars.pop();
cars.pop()
cars.pop()
console.log("removed item is", removeditem)
console.log(cars,"after using pop method")

cars.push(removeditem)
console.log(cars)

//shift method used to remove items at starting of array

console.log(cars)
cars.shift()
console.log(cars)

//unshift method used to add items at starting of array

cars.unshift("swift")
console.log(cars)

console.log(cars)
let carsstringdata = cars.toString()
console.log(carsstringdata)

let joincardata = cars.join(" * ")
console.log(joincardata) 

// slice method is used to cut the part of the array
// it wil not modify the original array


console.log(cars)
const selectedcars = cars.slice(2,4)
console.log(selectedcars)

const favouritecar = cars.slice(1,2)
console.log(favouritecar)
console.log(cars)

//splice method used to add and remove items at any part of the array
cars.splice(2,0,"yamaha,","rx")
console.log(cars)

//sort method is used to sort the data in ascending order
const sortedcars = cars.sort()
console.log(cars)

//reverse method is used to reverse the itmes in array
const reverseddata = cars.reverse()
console.log(cars)


const iitranks = [30,20,77,90,60,500,430]

const firstrank = Math.min.apply(null,iitranks)
console.log(firstrank)
const lastrank = Math.max.apply(null,iitranks)
console.log(lastrank)


const sortedranks = iitranks.sort((a,b)=>a-b)
console.log(sortedranks)

console.log(iitranks)
console.log(cars)


