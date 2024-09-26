// Implement the Car class that implements the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Example 
var myCar = new Car("Land Rover", "Range Rover", 2024);
myCar.start(); // Logs "Range Rover engine started" to the console
