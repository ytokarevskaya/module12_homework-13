const car = {
    brand: "BMW"
}

const bmw = Object.create(car);

bmw.name = "M5";
bmw.motor = 4.3;
bmw.hp = 625;


function print(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)) console.log(key + " - " + obj[key])
    }
}

print(bmw);
