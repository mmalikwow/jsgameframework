class Vector2 {
	constructor(tx, ty) {
		this.set(tx, ty);
	}

	// Operations
	set(tx, ty) {
		// Sets the components of the v2, Aliases: s
		this.x = tx ?? 0;
		this.y = ty ?? 0;

		if (typeof this.x != "number") console.error(`arg1: ${tx} isn't a valid argument`);
		if (typeof this.y != "number") console.error(`arg2: ${ty} isn't a valid argument`);
		return this;
	}

	toString() {
		return `v: [x: ${this.x}, y:${this.y}, ||v||: ${this.mag()}, θrad: ${this.angle()}, θ°: ${(180 / Math.PI) * this.angle()}]`;
	}

	// Arithmetics Operations
	add(v) {
		// Aliases: a
		this.x += v.x;
		this.y += v.y;
		return this;
	}
	addS(s) {
		// Aliases: as
		return this.add(new Vector2(s, s));
	}

	sub(v) {
		// Aliases: sb
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}
	subS(s) {
		//Aliases: sbs
		return this.sub(new Vector2(s, s));
	}

	mult(v) {
		// Aliases: m
		this.x *= v.x;
		this.y *= v.y;
		return this;
	}
	multS(s) {
		// Aliases: ms
		return this.mult(new Vector2(s, s));
	}

	div(v) {
		// Aliases: d
		this.x /= v.x;
		this.y /= v.y;
		return this;
	}
	divS(s) {
		// Aliases: ds
		return this.div(new Vector2(s, s));
	}

	// Vector Operations
	dot(v) {
		return this.x * v.x + this.y * v.y;
	}

	magSq() {
		return this.x ** 2 + this.y ** 2;
	}

	mag() {
		return Math.sqrt(this.magSq());
	}

	setMag(m) {
		// Aliases: smag
		if (typeof m != "number") console.error(`arg: isn't a valid argument`);

		return this.div(this.mag()).m(m);
	}

	// Angle Operations
	angle() {
		// Aliases: ang
		return Math.atan2(this.y, this.x);
	}

	setAngle(a) {
		// Aliases: sang
		if (typeof a != "number") console.error(`arg: ${a} isn't a valid argument`);
		const m = this.mag();

		this.x = Math.cos(a) * m;
		this.y = Math.sin(a) * m;

		return this;
	}

	// Cool Functions O:<
	copy() {
		// Simply Copies, Aliases: c
		return new Vector2(this.x, this.y);
	}

	log() {
		// just console.log's the vector
		console.log("%c" + this.toString(), `color:yellow;`);
		return this;
	}
}

// ---ALIASES---
// Operations
Vector2.prototype.s = Vector2.prototype.set;

// Arithmetic Operations
Vector2.prototype.a = Vector2.prototype.add;
Vector2.prototype.as = Vector2.prototype.addS;
Vector2.prototype.sb = Vector2.prototype.sub;
Vector2.prototype.sbs = Vector2.prototype.subS;
Vector2.prototype.m = Vector2.prototype.mult;
Vector2.prototype.ms = Vector2.prototype.multS;
Vector2.prototype.d = Vector2.prototype.div;
Vector2.prototype.ds = Vector2.prototype.divS;

// Mag Operations
Vector2.prototype.smag = Vector2.prototype.setMag;

// Angle Operations
Vector2.prototype.ang = Vector2.prototype.angle;
Vector2.prototype.sang = Vector2.prototype.setAngle;

// Cool Functions O:<
Vector2.prototype.c = Vector2.prototype.copy;
