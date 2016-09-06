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