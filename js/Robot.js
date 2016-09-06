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