class dumbutils {
  getInfo() {
    return {
      id: 'dumbutils',
      name: 'DumbUtils',
		color1: '#570098',
		color2: '#290057',
		color3: '#1e0040',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello!'
        },
		  {
		    opcode: 'rpbtof',
		  	 blockType: Scratch.BlockType.BOOLEAN,
		  	 text: 'randomly pick between true or false'
		  },
		  {
		    opcode: 'yearequals',
		  	 blockType: Scratch.BlockType.BOOLEAN,
		  	 text: 'is it [YEAR]?',
			 arguments: {
			 YEAR: {
			 		type: Scratch.ArgumentType.NUMBER,
					defaultValue: 2024
				},
		  {
		    opcode: 'divideself',
		  	 blockType: Scratch.BlockType.REPORTER,
		  	 text: 'divide [NUM] by itself',
			 arguments: {
			 NUM: {
			 		type: Scratch.ArgumentType.NUMBER,
					defaultValue: 1
				}
			 }
		  }
      ]
    };
  }

  hello() {
    return 'hello world';
  }
  rpbtof() {
	 const trueorfalse = [true, false];
	 var random = Math.floor(Math.random() * trueorfalse.length);
	 return trueorfalse[random]
	 ;
  }
  yearequals(year) {
  return year.YEAR == new Date().getFullYear()
  }
  divideself(num) {
  if (num.NUM == 0) {
  	return "aint no way you gonna break the universe 💀"
	} else {
	return 1
	}
  }
}

Scratch.extensions.register(new dumbutils());