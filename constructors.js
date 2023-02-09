function Alien(name,tech) {
    this.name=name;
    this.tech=tech;
    this.work = ()=>{
        console.log("\nDoes nothing\n")
    }
}

let abhishek =new Alien('abhishek', 'javascript')
console.log(abhishek)
abhishek.work()
// its like a template/ class to crate an object