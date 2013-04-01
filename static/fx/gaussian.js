define({

	//meta
	name : "Gaussian Blur",
	description : "高斯模糊",
	preview : "",

	//passes
	passes : [{

		name : "Horizontal",
		shader : "gaussian_h.essl",

		uniforms : {
			blurSize : {
				name : "Horizontal Blur Size",
				ui : "range",
				type : 'f',
				precision : 1,
				max : 10,
				min : 0,
				value : 3
			}
		}
	}, {
		name : "Vertical",
		shader : "gaussian_v.essl",

		uniforms : {
			blurSize : {
				name : "Vertical Blur Size",
				ui : "range",
				type : 'f',
				precision :1,
				max : 10,
				min : 0,
				value : 3
			}
		}
	}]
})