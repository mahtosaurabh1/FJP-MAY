// Q- using generators write a function that in theory can run an infinite for loop

function* reachInfinity(){
    let i=0;
    while(true){
        yield i;
        i++;
    }
}

let num = reachInfinity();
console.log("HI");