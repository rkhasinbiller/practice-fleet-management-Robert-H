class fleetVehicles {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }


drive(distance) {
  if (distance > 0) {
    this.mileage += distance;
 console.log(`The ${this.make} ${this.model} drove ${distance} miles`); 
} else {
  console.log("Distance must be a positive number.");
}
}

getDetails () {
  return `${this.type}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage}`;
}

}

let car = new fleetVehicles("car", "chevy", "malibu", 2008);

let truck = new fleetVehicles("truck", "Ford", "F150", 2023);

let motorcycle = new fleetVehicles("motorcycle", "Harley", "Davidson", 2018);

car.drive(250);
truck.drive(375);
motorcycle.drive(520);

console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());