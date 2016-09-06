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