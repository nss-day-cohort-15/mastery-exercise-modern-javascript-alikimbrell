// TYPE: BIPEDAL
var Bipedal = function(){
  this.type = "Bipedal",
  this.generateHealth(10, 30)
};

Bipedal.prototype = new Robot();

Bipedal.prototype.climb = function(){
    console.log("I can climb!"); //returns an undefined...?
};

Bipedal.prototype.crush = function(){
    console.log("Smash!"); //returns an undefined...?
};

// MODELS
C3P0 = function(){
  this.model = "C3P0";
  this.generateHealth(14, 30);
  this.weapon = new Pistol();
};
C3P0.prototype = new ATV();


JarJar = function(){
  this.model = "JarJar";
  this.generateHealth(12, 22)
  this.weapon = new Smoke();
};
JarJar.prototype = new Bipedal();
