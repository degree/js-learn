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
