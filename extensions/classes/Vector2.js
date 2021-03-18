class Vector2 {
	constructor(tx, ty) {
		this.set(tx, ty);
	}

	/**
	 * Sets the vector to x, y | Aliases: s
	 * @param {number} x - x component
	 * @param {number} y - y component
	 * @returns
	 */
	set(x, y) {
		this.x = x ?? 0;
		this.y = y ?? 0;

		if (typeof this.x != "number") console.error(`arg1: ${x} isn't a valid argument`);
		if (typeof this.y != "number") console.error(`arg2: ${y} isn't a valid argument`);
		return this;
	}

	/**
	 * Converts vector to String |
	 * @returns
	 */
	toString() {
		return `v: [x: ${this.x}, y:${this.y}, ||v||: ${this.mag()}, θrad: ${this.angle()}, θ°: ${(180 / Math.PI) * this.angle()}]`;
	}

	/**
	 * Adds v to the vector | Aliases: a
	 * @param {Vector2} v - other vector
	 * @returns
	 */
	add(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	}
	/**
	 * Adds x, y to the vector | Aliases: as
	 * @param {number} x - x component
	 * @param {number} y - y component
	 * @returns
	 */
	addS(x, y) {
		return this.add(new Vector2(x, y));
	}

	/**
	 * Subtracts v from the vector | Aliases: sb
	 * @param {Vector2} v - other vector
	 * @returns
	 */
	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}
	/**
	 * Adds x, y to the vector | Aliases: sbs
	 * @param {number} x
	 * @param {number} y
	 * @returns
	 */
	subS(x, y) {
		return this.sub(new Vector2(x, y));
	}

	/**
	 * Multiplies by v | Aliases: m
	 * @param {Vector2} v - other vector
	 * @returns
	 */
	mult(v) {
		this.x *= v.x;
		this.y *= v.y;
		return this;
	}
	/**
	 * Multiplies by x, y | Aliases: ms
	 * @param {number} x - x component
	 * @param {number} y - y component
	 * @returns
	 */
	multS(x, y) {
		return this.mult(new Vector2(x, y));
	}

	/**
	 * Divides by v | Aliases: d
	 * @param {Vector2} v
	 * @returns
	 */
	div(v) {
		this.x /= v.x;
		this.y /= v.y;
		return this;
	}
	/**
	 * Divides by x, y | Aliases: ds
	 * @param {number} x - x component
	 * @param {number} y - y component
	 * @returns
	 */
	divS(x, y) {
		return this.div(new Vector2(x, y));
	}

	/**
	 * Dot products with v
	 * @param {*} v - other vector
	 * @returns
	 */
	dot(v) {
		return this.x * v.x + this.y * v.y;
	}

	/**
	 * Gets the Magnitude Squared of the vector
	 * @returns
	 */
	magSq() {
		return this.x ** 2 + this.y ** 2;
	}

	/**
	 * Gets the Magnitude of the vector
	 * @returns
	 */
	mag() {
		return Math.sqrt(this.magSq());
	}

	/**
	 * Sets the Magnitude of the vector | Aliases: smag
	 * @param {number} m
	 * @returns
	 */
	setMag(m) {
		if (typeof m != "number") console.error(`arg: isn't a valid argument`);

		return this.div(this.mag()).m(m);
	}

	/**
	 * Gets the Angle in Radians of the vector | Aliases: ang
	 * @returns
	 */
	angle() {
		return Math.atan2(this.y, this.x);
	}

	/**
	 * Sets the Angle of the vector in Radians | Aliases: sang
	 * @param {number} a
	 * @returns
	 */
	setAngle(a) {
		if (typeof a != "number") console.error(`arg: ${a} isn't a valid argument`);
		const m = this.mag();

		this.x = Math.cos(a) * m;
		this.y = Math.sin(a) * m;

		return this;
	}

	// Cool Functions O:<

	/**
	 * Returns a Copy of the vector | Aliases: c
	 * @returns
	 */
	copy() {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Prints the vector with console.log
	 * @returns
	 */
	log() {
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
