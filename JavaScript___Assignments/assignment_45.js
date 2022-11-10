// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
//  It should then accept an arbitrary number of keyword arguments. 
//  Call the function with the required information and two other name-value pairs,
//   such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.

function car({...params}) {
    let data = {};
    let keys = Object.keys(params);
    keys.map((item,index) => {
        data[`${item}`] = params[keys[index]]
    })
    return data;
    }

let carManufacturer = car({
        color: "black",
        brakes: "Antilock brakes",
        control:"Electronic stability control",
})
console.log(carManufacturer)
