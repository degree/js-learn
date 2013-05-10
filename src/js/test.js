console.log("=========================================================================================================");

function extend(Child, Parent) {
	var F = function () { };
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
}

function mixin(dst, src) {
	Object.keys(src).forEach(function (p) { dst[p] = src[p]; });
}

function Animal(name, walkSpeed) {
	this.name = name;
	this.walkSpeed = walkSpeed;
}

mixin(
	Animal.prototype,
	{
		distance: 0,
		walk: function (time) { this.distance += time * this.walkSpeed; }
	}
);

function Bird(name, walkSpeed, flySpeed) {
	Bird.superclass.constructor.apply(this, arguments);

	this.flySpeed = flySpeed;
}

extend(Bird, Animal);

mixin(
	Bird.prototype,
	{
		fly: function (time) { this.distance += time * this.flySpeed; }
	}
);

var animal = new Animal("animal", 1);
var bird = new Bird("bird", 1, 5);
animal.walk(10);
bird.walk(10);
bird.fly(3);

console.log(animal.name + ": " + animal.distance);
console.log(bird.name + ": " + bird.distance);
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);
