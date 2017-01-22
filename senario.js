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
			2),
		new Senario("You see a group of Family eating dinner.",
			["They are so happy to see you!"],
			["Why not wave at your family...",
			"your parents give you a weird look..."
			"You are clearly a terrible child"],
			2),
		new Senario("Your at the bar and see bartender at the bar and need your check.",
			["BOOM! Now you have your card and paid your bill"],
			["Are you afraid of the guy/girl?",
			"What are you gonna just leave you card here?"
			"Well I guess your waiting....."],
			2),
		new Senario("Your dog waves at you.",
			["That was fun..."],
			["This is a once in a lifetime oppurtunity",
			"What do you mean your dogs waving... wave dude"
			"can't beleive you missed that..."],
			2),
		new Senario("You come across an old mans bean stand in the woods",
			["You are feeling much more full of magic now..."],
			["seems pretty interesting",
			"They could be magic beans"
			"what if they made you magic...."],
			2),
		new Senario("You see your exes dad at the strip club.",
			["The conversation thats about to unroll should be stellar"],
			["oh this could be good you sure?",
			"imagine how great this converstion could be."
			"what ever your decisions..."],
			2),
		new Senario("You see a dark ominous creature in the distance.",
			["ALL THE ANSWERS ARE YOURS NOW"],
			["He could have the answers...",
			"He does have the answers..."
			"Do you not want the answers?",
			"You will never know the answer"],
			3),
		new Senario("You see your freind crack house.",
			["You guys are bout to have either the worst or best day ever."],
			["Probably see what hes doin right...",
			"You should probably go in there...",
			"It seems like a good time",
		 	"still think you shoulda went in..."],
			3)
		];
