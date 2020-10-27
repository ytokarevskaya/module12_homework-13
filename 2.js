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

//  Вы не совсем правильно поняли задание. Нужно было искать свойства по ключу, не по значению. Свойств с одинаковым значением в объекте может быть сколько угодно много, а вот ключи должны быть уникальными. Балл снижать не стала, т.к. остальные задания выполнены верно и вижу, что тему вы поняли. Ниже написала верный вариант решения для этого задания:

function isPropertyInObj(obj, property) {
    return property in obj;
}

console.log(isPropertyInObj(bmw, "name"));