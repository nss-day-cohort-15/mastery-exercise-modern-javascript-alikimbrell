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



