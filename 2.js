const car = {
    brand: "BMW"
}

const bmw = Object.create(car);

bmw.name = "M5";
bmw.motor = 4.3;
bmw.hp = 625;

function print(obj, str){
    let compare = false;
    for (let key in obj){
        if (obj[key].toString().toLowerCase() == str.toLowerCase()) compare = true;
    }
    return compare;
}

console.log(print(bmw, "m5"));