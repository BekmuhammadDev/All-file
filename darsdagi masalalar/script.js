let a = 56;
let b = 4;

function sunNumber(x,y) {
    console.log("KICHIK FUNKSIYA");
    return x + y;
}

function findPeremetr(fn, a, b) {
    console.log("KATTA FUNKSIYA");
    return fn(a, b) * 2
}

let result = findPeremetr(sunNumber, a, b);
console.log(result);