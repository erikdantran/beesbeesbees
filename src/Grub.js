var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype = {}
Grub.prototype.constructor = Grub

Grub.prototype.eat = function () {
  console.log(this, 'ate some', this.food)
}

