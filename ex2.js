//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n

function solveEuler1() {
    let sum = 0;
    for (let i = 1; i < 10; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;  //output will be captured in variable sum
}

let euler1=()=>alert(`sum of all multiples of 2 or 3 less than 10 is: ${solveEuler1()}`);

let eulerCustom=()=>alert(`sum of all multiples of 2 or 3 less than 10 is: ${solveEuler1()}`)
