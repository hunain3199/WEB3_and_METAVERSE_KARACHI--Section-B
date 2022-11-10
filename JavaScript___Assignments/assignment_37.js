// Large Shirts: Modify the make_shirt() function so that 
// shirts are large by default with a message that reads I love JavaScript. Make a large
//  shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = "Large",textmessage = "I love Javascript"){
    console.log(`The size of the shirt is "${size}". 
And the text which have to be written on the shirt is "${textmessage}"`)
}

make_shirt()
make_shirt("small","Paul Walker")