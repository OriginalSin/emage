define({

	name : "Brightness",
	description : "亮度",
	preview : "",

	passes : [{
		name : "Main",
		shader : "brightness.essl",

		uniforms : {
			brightness : {
				name : "Brightness",
				type : "f",
				ui : "range",
				min : -1,
				max : 1,
				precision : 2,
				value : 0
			}
		}
	}]
})