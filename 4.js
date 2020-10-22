function Electrodevice(){
    this.name = "Электроприбор"
}

Electrodevice.prototype.getWatt = function (amp, volt){
    console.log(`Потребляемая мощность - ${amp * volt} Вт`);
}

Electrodevice.prototype.turnOn = function () {
    console.log(`${this.name} включен`);
}

Electrodevice.prototype.turnOff = function () {
    console.log(`${this.name} выключен`);
}


function Pc(name, processor){
    this.name = name,
        this.processor = processor
}

function Lamp(name, count){
    this.name = name,
        this.count = count
}

Pc.prototype = new Electrodevice();
Lamp.prototype = new Electrodevice();


Pc.prototype.getWatt = function (amp, volt){
    console.log(`Потребляемая мощность ${this.name} - ${amp * volt} Вт`);
}

Lamp.prototype.getWatt = function (amp, volt){
    console.log(`Потребляемая мощность ${this.name} из ${this.count} лампочек - ${amp * volt} Вт`);
}

const laptop = new Pc('asus', 'intel');
const lamp = new Electrodevice();
const lustra = new Lamp('Люстра', 6);


console.log(lustra.getWatt(2, 220));

console.log(laptop.getWatt(5, 220))

console.log(lamp.turnOn())