class Electrodevice {
    constructor() {
        this.name = "Электроприбор"
    }

    getWatt(amp, volt){
        return `Потребляемая мощность - ${amp * volt} Вт`;
    }
    turnOn() {
        return `${this.name} включен`;
    }
    turnOff() {
        return `${this.name} выключен`;
    }
}

class Pc extends Electrodevice{
    constructor(name, processor) {
        super(),
            this.name = name,
            this.processor = processor
    }
    getWatt (amp, volt){
        return `Потребляемая мощность ${this.name} - ${amp * volt} Вт`;
    }
}

class Lamp extends Electrodevice{
    constructor (name, count){
        super(),
            this.name = name,
            this.count = count
    }
    getWatt(amp, volt){
        return `Потребляемая мощность ${this.name} из ${this.count} лампочек - ${amp * volt} Вт`;
    }
}

const laptop = new Pc('asus', 'intel');
const lamp = new Electrodevice();
const lustra = new Lamp('Люстра', 6);

console.log(lustra.getWatt(2, 220));

console.log(laptop.getWatt(5, 220))

console.log(lamp.turnOn())
