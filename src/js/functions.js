Function.prototype.extend = function(Parent, mixin) {
	var F = function () { };
	F.prototype = Parent.prototype;
	this.prototype = new F();
	this.prototype.constructor = this;
	this.superclass = Parent.prototype;

	if (mixin) {
		Object.keys(mixin).forEach(function (p) { this.prototype[p] = mixin[p]; }, this);
	}
};
