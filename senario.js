class Senario {
	constructor (ask, answers, retorts, recoverable) {
		this.waved = false;
		this.asked = false;
		this.failed = false;
		this.cur = 0;
		this.ask = ask;
		this.answers = answers;
		this.retorts = retorts;
		this.recoverable = recoverable;
	}

	renew () {
		this.asked = false;
		this.waved = false;
		this.failed = false;
		this.cur = 0;
	}
}

senario = [
		new Senario("You think you see your friend, do you wave?",
			["They see you and wave.", "You both enjoy a wave."],
			["You should wave to them!","It's them for sure, you should wave.",
			"They come up to you and ask why you didn't wave.",
			 "\"It's important to wave to your friends.\", they explain.",
			"Let's try this again."],
			2),
		new Senario("You see your family eating dinner, do you wave?",
			["Your wave reaches them",
			 "They are so happy to see you!"],
			["Why are you not waving to your family...",
			"your parents give you a weird look...",
			"You are clearly a terrible child"],
			2),
		new Senario("Your at the bar and see bartender at the bar and need your check, do you wave?",
			["BOOM! Now you have your card and paid your bill"],
			["Are you afraid of them?",
			"What are you gonna just leave you card here?",
			"Well I guess your waiting....."],
			2),
		new Senario("Catch your reflection in the mirror, do you wave?",
			["I dig your style"],
			["Just wave....",
			"Not very nice of you.."],
			1),
		new Senario("Catch your reflection in the mirror, do you wave?",
			["Feels alot better now right??"],
			["Man they are really eating you up",
			"how much longer can you put up with this",
			"Terrible decision my friend"],
			2),
		new Senario("You see someone waving at you in the distance, do you wave?",
			["Wait they weren't waving at you.. You are just too nice!"],
			["Who knows maybe they are just super friendly",
			"What if they need help?",
			"Wow you better get your waving chops up that one was easy"],
			2),
		new Senario("Your dog waves at you, do you wave?",
			["That was fun..."],
			["This is a once in a lifetime oppurtunity",
			"What do you mean your dogs waving... wave dude",
			"can't beleive you missed that..."],
			2),
		new Senario("You come across an old mans bean stand in the woods, do you wave?",
			["You are feeling much more full of magic now..."],
			["seems pretty interesting",
			"They could be magic beans",
			"what if they made you magic...."],
			2),
		new Senario("You see John cena waving, do you wave?",
			["He looks confused but waves back impressed with you"],
			["You sure.... he is just sitting there waving",
			"it does seem like he's looking through you... ",
			"I guess you don't have to wave"],
			2),
		new Senario("You see your exes dad at the strip club, do you wave?",
			["The conversation thats about to unroll should be stellar"],
			["oh this could be good you sure?",
			"imagine how great this converstion could be.",
			"what ever your decisions..."],
			2),
		new Senario("You see a dark ominous creature in the distance, do you wave?",
			["The creature is kind and wants to give you answers.",
			 "ALL THE ANSWERS ARE YOURS NOW"],
			["He could have the answers...",
			"He does have the answers...",
			"Do you not want the answers?",
			"You will never know the answer"],
			3),
		new Senario("You see your freind crack house.",
			["You guys are bout to have either the worst or best day ever, do you wave?"],
			["Probably see what hes doin right...",
			"You should probably go in there...",
			"It seems like a good time",
		 	"still think you shoulda went in..."],
			3)
		];
