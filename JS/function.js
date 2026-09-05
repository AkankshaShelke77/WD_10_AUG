//Named Function

// function add(a,b) {
//     console.log(a+b);
// }
// add(3, 5);


//Anonymous function

// function (a,b) {
//     console.log(a+b);
// }
// (3, 5);


/*
//IIF
(function(a,b) {
    console.log(a+b);
}
(9, 8))


//fun with expression
let sub = function(a,b) {
    console.log(a-b);
}
sub(9, 8)


//arrow fun --> reduce code. we do not need to write function 

let div=((a,b)=>{
    console.log(a/b)
})
div(24,4)


// Nested function

function grandparent(){
    console.log("I am GP")

    function parent(){
        console.log("I am Parent")

        function child(){
            console.log("I am child")
        }
        child()
    }
    parent()
}
grandparent()



//Object
//key:value
//literals

let emp={
    id:101,
    name : "Akanksha",
    city:"Pune"
}
console.log(emp)
console.table(emp) // print in table format
console.log(Object.keys(emp));
console.log(Object.values(emp));
*/


//Constructor Function

let emp2={
    id:101,
    name : "Akanksha",
    address:{
        area:"Shivajinagar",
        city:"Pune"
    }
}
console.log(emp2)
console.table(emp2) // print in table format
console.log(Object.keys(emp2));
console.log(Object.values(emp2));



