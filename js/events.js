//Events

var battle = null;

$("#attack").click(function(){
  if(battle === null){
    battle = new Battledome();
    battle.createRobot1($("#robot1").val(), $("#robot1model").val());
    battle.createRobot2($("#robot2").val(), $("#robot2model").val());
  }
  battle.attack();
  if(battle.gameOver() === true){
    $("#output").val(battle.declareWinner())
  }

//   Robot.prototype.generateHealth = function(max, min){
//     this.health = Math.floor(Math.random() * (max - min) + min);  
//   }
  console.log("Clicked attack button.");
});



