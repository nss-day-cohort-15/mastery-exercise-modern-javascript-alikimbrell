var Weapon = function(){};

Weapon.prototype = {
  name: "defaultWeapon",
  attackDefault: 1
};


var Missile = function() {
  this.name = "missile";
  this.attackDefault = this.attackDefault + 5;
};
Missile.prototype = new Weapon();


var Flamethrower = function() {
  this.name = "flamethrower";
  this.attackDefault = this.attackDefault + 3;
};
Flamethrower.prototype = new Weapon();


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
  healthDefault: 10,
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
  this.generateHealth(20, 25);
};

Drone.prototype = new Robot();

Drone.prototype.fly = function(){
    console.log("I can fly!"); //returns an undefined...?
};

Drone.prototype.bomb = function(){
    console.log("Kaboom!"); //returns an undefined...?
};


//////////////////////////////////////

// MODELS
Skywalker = function(){
  this.model = "Skywalker";
  this.generateHealth(26, 30);
  this.weapon = new Missile();
};
Skywalker.prototype = new Drone();


Vader = function(){
  this.model = "Vader";
  this.generateHealth(31, 35)
  this.weapon = new Flamethrower();
};
Vader.prototype = new Drone();


// PLAYER/INSTANCE
var player = new Vader();
console.log(player.healthDefault);
console.log(player.attack());
console.log(player.defend());
console.log(player.fly());
console.log(player.bomb());


//////////////////////////////////////

// TYPE: ATV
var ATV = function(){
  this.type = "ATV",
  this.generateHealth(36, 40)
};

ATV.prototype = new Robot();

ATV.prototype.climb = function(){
    console.log("I can climb!"); //returns an undefined...?
};

Drone.prototype.crush = function(){
    console.log("Smash!"); //returns an undefined...?
};



//////////////////////////////////////

// MODELS
C3P0 = function(){
  this.model = "C3P0";
  this.generateHealth(41, 45);
  this.weapon = new Missile();
};
C3P0.prototype = new ATV();


BB8 = function(){
  this.model = "BB8";
  this.generateHealth(46, 50)
  this.weapon = new Flamethrower();
};
BB8.prototype = new ATV();




////////////////////////////////////////

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
      case "c3p0":
        robot = new C3P0();
        console.log("c3p0 selected");
        break;        
      case "bb8":
        robot = new BB8();
        console.log("bb8 selected");
        break;        
      // case "skywalker":
      //   robot = new Skywalker();
      //   console.log("skywalker selected");
      //   break;        
      // case "skywalker":
      //   robot = new Skywalker();
      //   console.log("skywalker selected");
      //   break;        
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
      console.log(message);
      return message;
    
  }
};



