/**
 * User: Eugene Dubrovka
 * Date: 5/10/13
 * Time: 11:20 PM
 */
function Bird(name, walkSpeed, flySpeed) {
	Bird.superclass.constructor.apply(this, arguments);

	this.flySpeed = flySpeed;
}

extend(
	Bird,
	Animal,
	{
		fly: function (time) { this.distance += time * this.flySpeed; }
	}
);
