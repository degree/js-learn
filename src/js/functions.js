Function.prototype.extend = function(Parent, mixin) {
	var F = function () { };
	F.prototype = Parent.prototype;
	var f = new F();
	this.prototype = f;
	this.prototype.constructor = this;
	this.superclass = Parent.prototype;

	if (mixin) {
		Object.keys(mixin).forEach(function (p) { f[p] = mixin[p]; })
	}
}
