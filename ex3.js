//let listEuler1=(a,b,l)=>0;//obviously wrong - compute the sum of multiples of a or b in list l
//let listEuler2=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l
//let listEuler3=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l

let listeuler=(a,b,l)=>
{
        let sum = 0;

    for (let i of l) {
        if (i % a == 0 || i % b == 0) {
            sum += i;
        }
    }

    return sum;
//    a=2//can un-hardcode
//    b=3
//    l=[1,2,3,4,5,6,7,9,10,10,10]  //document.getElementById('l').value.split(" ").map((x=>parseInt(x)); // if l is space separated numbers
    //call listEuler1 and alert. - compute the sum of multiples of a or b in list l
}

let Lists2euler=(a,l)=>
{
        let sum = 0;
    for (let i of l) {
        if (i % a[0] == 0 || i % a[1] == 0) {
            sum += i;
        }


//    a=[2,3]//can un-hardcode
//    l=[1,2,3,4,5,6,7,9,10,10,10]
//    //call listEuler2 and alert.
}
        return sum;
}

let Lists3euler=(b,n)=>
{
    console.log("b:", b);
    console.log("n:", n);
        let sum = 0;
    for (let i of n) {
        for (let j of b) {
            if (i % j == 0) {
                sum += i;
                break;
            }
    }   
    return sum;
//    a=[2,3,5]//can un-hardcode
//    l=[1,2,3,4,5,6,7,9,10,10,10]
//    //call listEuler3 and alert.
}
}
function eulerlist() {

    const a = Number(document.getElementById("a1").value);
    const b = Number(document.getElementById("b1").value);
    const l = document.getElementById("l").value
                    .split(",")
                    .map(x => Number(x.trim()));

    if (!a || !b || l.some(isNaN)) {
        alert("Please enter valid numbers for A, B, and list L");
        return;
    }

    const result = listeuler(a, b, l);
    alert(`Sum of multiples of ${a} or ${b} in list L is: ${result}`);
}

function euler2Lists() {

    const a = document.getElementById("aList").value
                    .split(",")
                    .map(x => Number(x.trim()));
    const l = document.getElementById("mList").value
                    .split(",")
                    .map(x => Number(x.trim()));
    if (a.length !== 2 || a.some(isNaN) || l.some(isNaN)) {
        alert("Please enter valid numbers. A must contain exactly 2 numbers.");
        return;
    }
    const result = Lists2euler(a,l);
    alert(`Sum of multiples of ${a[0]} or ${a[1]} in list L is: ${result}`);
}

function euler2Lists1() {

    const b = document.getElementById("bList").value
                    .split(",")
                    .map(x => Number(x.trim()));
    const n = document.getElementById("nList").value
                    .split(",")
                    .map(x => Number(x.trim()));
    if (b.length < 1 || b.some(isNaN) || n.some(isNaN)) {
        alert("Please enter valid numbers. B must contain at least 1 number.");
        return;
    }
    const result = Lists3euler(b,n);
    alert(`Sum of multiples of ${b.join(", ")} in list N is: ${result}`);
}