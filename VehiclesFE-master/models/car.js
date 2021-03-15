export class Car {
    constructor(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    addWheel(wheel) {
        this.wheels.push(wheel);
    }
    format() {
        return `Brand: ${this.brand} - Color: ${this.color} - Plate: ${this.plate}`;
    }
}
