//let listEuler1=(a,b,l)=>0;//obviously wrong - compute the sum of multiples of a or b in list l
//let listEuler2=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l
//let listEuler3=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l

let listeuler=(a,b,l)=>
{
        let sum = 0;

    for (let i of l) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }

    return sum;
//    a=2//can un-hardcode
//    b=3
//    l=[1,2,3,4,5,6,7,9,10,10,10]  //document.getElementById('l').value.split(" ").map((x=>parseInt(x)); // if l is space separated numbers
    //call listEuler1 and alert. - compute the sum of multiples of a or b in list l
}

let euler2Lists=()=>
{
    a=[2,3]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler2 and alert.
}

let euler2Lists1=()=>
{
    a=[2,3,5]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler3 and alert.
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