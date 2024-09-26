// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implement a class named Car that implements the Vehicle interface 
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Create an instance of the Car class and initialize it with some values ​​for make , model , and year .

const myCar = new Car("Land Rover", "Range Rover", 2024);
//Call the start method on the Car class instance to verify that it logs the appropriate message to the console.

myCar.start(); // Logs "Car engine started" 
