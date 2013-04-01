define({
	name : "Toon",
	description : "",
	preview : "",

	passes : [{
		name : "Main",
		shader : "toon.essl",

		uniforms : {
			threshold : {
				name : "Threshold",
				type : "f",
				ui : "range",
				precision : 2,
				min : 0,
				max : 2,
				value : 0.2,
			}, 
			quantizationLevels : {
				name : "Quantization Levels",
				type : "f",
				ui : "spinner",
				precision : 0,
				min : 2,
				value : 10,
			}
		}
	}]
})