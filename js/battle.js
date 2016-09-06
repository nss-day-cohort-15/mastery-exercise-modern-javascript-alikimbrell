var Weapon = function(){};

Weapon.prototype = {
  name: "defaultWeapon",
  attackDefault: 1
};


var Lightsaber = function() {
  this.name = "lightsaber";
  this.attackDefault = this.attackDefault + 4;
};
Lightsaber.prototype = new Weapon();


var Lightning = function() {
  this.name = "lightning";
  this.attackDefault = this.attackDefault + 4;
};
Lightning.prototype = new Weapon();


var Rocket = function() {
  this.name = "rocket";
  this.attackDefault = this.attackDefault + 3;
};
Rocket.prototype = new Weapon();


var Grenade = function() {
  this.name = "grenade";
  this.attackDefault = this.attackDefault + 2;
};
Grenade.prototype = new Weapon();


var Pistol = function() {
  this.name = "pistol";
  this.attackDefault = this.attackDefault + 2;
};
Pistol.prototype = new Weapon();


var Smoke = function() {
  this.name = "smoke";
  this.attackDefault = this.attackDefault + 1;
};
Smoke.prototype = new Weapon();


//////////////////////////////////////

var Defense = function(){};

Defense.prototype = {
  name: "defaultDefense",
  defenseDefault: 1
};


var Shield = function(){
  this.name = "shield",
  this.defenseDefault = this.defenseDefault + 6;
};
Shield.prototype = new Defense();

var Agility = function(){
  this.name = "agility",
  this.defenseDefault = this.defenseDefault + 2;
};
Agility.prototype = new Defense();

//////////////////////////////////////

var Robot = function(){};

Robot.prototype = {
  type: null,
  model: null,
  healthDefault: 5,
  weapon: new Weapon(),
  defense: new Defense(),
  generateHealth: function(min, max){
    this.healthDefault = Math.floor(Math.random() * (max - min) + min); 
  },
  attack: function(){
    return this.weapon.attackDefault;
  },
  defend: function(){
    return this.defense.defenseDefault;
  }
};


//////////////////////////////////////

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


// TEST PLAYER/INSTANCE
// var player = new Vader();
// console.log(player.healthDefault);
// console.log(player.attack());
// console.log(player.defend());
// console.log(player.fly());
// console.log(player.bomb());


//////////////////////////////////////

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




////////////////////////////////////////

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



//FIGHT!

var Battledome = function(){};

Battledome.prototype = {
  robot1Name: null,
  robot2Name: null,
  robot1: null,
  robot2: null,
  createRobot: function(model){
    var robot = null;
    switch(model){
      case "skywalker":
        robot = new Skywalker();
        console.log("skywalker selected");
        break;
      case "vader":
        robot = new Vader();
        console.log("vader selected");
        break;
      case "r2d2":
        robot = new R2D2();
        console.log("r2d2 selected");
        break;        
      case "bb8":
        robot = new BB8();
        console.log("bb8 selected");
        break;        
      case "c3p0":
        robot = new C3P0();
        console.log("c3p0 selected");
        break;        
      case "jarjar":
        robot = new JarJar();
        console.log("jarjar selected");
        break;        
      default:
        console.log("Default");
    }
    return robot; 
  },
  createRobot1: function(name, model){
    robot1 = this.createRobot(model);
    robot1name = name;
  },
  createRobot2: function(name, model){
    robot2 = this.createRobot(model);
    robot2name = name;
  },
  attack: function(){
    console.log("robot1.attack: ", robot1.attack());
    console.log("robot2.attack: ", robot2.attack());

    robot1.healthDefault = robot1.healthDefault - robot2.attack();
    robot2.healthDefault = robot2.healthDefault - robot1.attack();
    console.log("robot1.healthDefault: ", robot1.healthDefault);
    console.log("robot2.healthDefault: ", robot2.healthDefault);
  },
  gameOver: function(){
    if(robot1.healthDefault<=0 || robot2.healthDefault<=0){
      return true;
    }else{
      return false;
    }
  },
  declareWinner: function(){
    var winner = null;
    var loser = null;
    if(robot1.healthDefault<=0){
      winner = robot2;
      loser = robot1;
    }else{
      winner = robot1;
      loser = robot2;
    };
    
    console.log(winner.weapon);
    var message = "The " + winner.model + " " + winner.type + " defeated the " + loser.model + " " + loser.type + " wielding a " + winner.weapon.name + ".";
    $("#output").text(message);
    console.log(message);
  }
};



