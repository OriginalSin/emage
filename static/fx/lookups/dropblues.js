define({
	name : "Drop Blues",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/dropblues.png)"
			}
		}
	}]
})