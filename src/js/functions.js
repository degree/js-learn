function extend(Child, Parent, mixin) {
	var F = function () { };
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;

	if (mixin) {
		Object.keys(mixin).forEach(function (p) { Child.prototype[p] = mixin[p]; });
	}
}
