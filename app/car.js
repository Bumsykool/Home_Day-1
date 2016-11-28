var Car = function (name = 'General', model, type) {
  
  this.type = type;
  this.model = model;
  this.name = name;
  this.numOfDoors = 4;
  this.numOfWheels = 4;
};

Car.prototype.callCar = function() {
  if(this.name === 'Porshe' || this.name === 'Koenigsegg'){
     this.numOfDoors = 2;
  }
  if(this.type === 'trailer'){
     this.numOfWheels = 8;
  }
  console.log("Hello, I'm " + this.name + ' of model ' + this.model + ' and i have ' + this.numOfDoors + ' doors');
};

var car1 = new Car();
var car2 = new Car("Porshe","Omega 3");

car1.callCar();
car2.callCar();