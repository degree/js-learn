/**
 * User: Eugene Dubrovka
 * Date: 5/10/13
 * Time: 11:20 PM
 */
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
