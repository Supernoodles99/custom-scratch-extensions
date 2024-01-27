class censorblock {
  getInfo() {
    return {
      id: 'block',
      name: 'block that helps you censor things',
		color1: '#570098',
      blocks: [
        {
          opcode: 'bthyct',
          blockType: Scratch.BlockType.REPORTER,
          text: 'block that helps you censor things'
        }
      ]
    };
  }

  bthyct() {
    return 'hello world';
  }
}

Scratch.extensions.register(new censorblock());
