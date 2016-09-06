// TYPE: DRONE
var Drone = function(){
  this.type = "Drone",
  this.generateHealth(24, 48);
};

Drone.prototype = new Robot();

Drone.prototype.fly = function(){
    console.log("I can fly!"); //returns an undefined...?
};

Drone.prototype.bomb = function(){
    console.log("Kaboom!"); //returns an undefined...?
};

// MODELS
Skywalker = function(){
  this.model = "Skywalker";
  this.generateHealth(32, 48);
  this.weapon = new Lightsaber();
};
Skywalker.prototype = new Drone();


Vader = function(){
  this.model = "Vader";
  this.generateHealth(24, 40)
  this.weapon = new Lightning();
};
Vader.prototype = new Drone();
