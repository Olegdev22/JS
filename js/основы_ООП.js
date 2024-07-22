"use strict";

const solder = {
	health: 400,
	armor: 100,
	seyHello: function () {
		console.log("Hello")
	}
}

const jonh = Object.create(solder)
jonh.seyHello()