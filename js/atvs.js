// TYPE: ATV
var ATV = function(){
  this.type = "ATV",
  this.generateHealth(40, 60)
};

ATV.prototype = new Robot();

ATV.prototype.climb = function(){
    console.log("I can climb!"); //returns an undefined...?
};

ATV.prototype.crush = function(){
    console.log("Smash!"); //returns an undefined...?
};

// MODELS
R2D2 = function(){
  this.model = "R2D2";
  this.generateHealth(52, 64);
  this.weapon = new Rocket();
};
R2D2.prototype = new ATV();


BB8 = function(){
  this.model = "BB8";
  this.generateHealth(44, 60)
  this.weapon = new Grenade();
};
BB8.prototype = new ATV();
