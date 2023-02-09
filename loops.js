// while loop
console.log("\nwhile loop\n")
let i=0
while (i<5){
    console.log(i," Hello")
    i++
}
console.log("\ndo while loop\n")
// do while loop
let j=0
do{
    console.log(j," Hello")
    j++
}while(j<5)

// for loop
console.log("\nfor loop\n")
for (let i=0 ;i<5;i++){

    console.log(i," bye")

}

// for in loop 
console.log("\nfor in loop\n")
let alien = {
    name : "navin",
    tech : "js",
    laptop : {
        cpu : 'i7',
        ram: 8,
        brand: 'msi'
    }
}
for ( i in alien){
    console.log(i,alien[i])
}

// the for in loops only give us keys

// for of loop 
// its like for in loop but it returen only value
console.log("\nfor of loop\n")
let a=[1,2,3,4,34,34]
for(let i of a){
    console.log(i)
}
// vs for i loop
for(let i in a){
    console.log(i)
}