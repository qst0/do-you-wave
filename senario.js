class Senario {
	constructor (ask, answers, retorts, recoverable) {
		this.waved = false;	
		this.asked = false;
		this.cur = 0;
		this.ask = ask;
		this.answers = answers;
		this.retorts = retorts;
		this.recoverable = recoverable;
	}

	renew () {
		this.asked = false;
		this.waved = false;
		this.cur = 0;
	}
}

senario = [new Senario("Ask",["A 1", "A 2", "A 3"],
		["R 1", "R 2", "R 3"],0),
	new Senario("You think you see your friend, do you wave?",
			["They see you and you both enjoy a wave."],
			["You should wave to them!","It's them for sure.",
			"They come up to you and ask why you didn't wave."],
			2)];
