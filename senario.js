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
			"Your parents give you a weird look...",
			"You are clearly a terrible child."],
			2),
		new Senario("You're at the bar and need your check, do you wave?",
			["You get your card, and pay the bill.",
			"You leave a tip of course."],
			["Don't be afraid of them. Wave.",
			"Are you gonna just leave you card here then?",
			"They get to you after a long while waiting.
			"Wave next time."],
			2),
		new Senario("Catch your reflection in the mirror, do you wave?",
			["I dig your style"],
			["You look like you could use a wave.",
			"You should work on your self esteem.",
			"Start with waving"],
			1),
		new Senario("You see someone waving at you in the distance, do you wave?",
			["Wait they weren't waving at you.",
			 "You are just too nice!"],
			["Who knows maybe they are just super friendly",
			"Wait, what if they need help?",
			"Wow you better get your waving chops up that one was easy"],
			2),
		new Senario("Your dog waves at you, do you wave?",
			["That was fun..."],
			["This is a once in a lifetime oppurtunity",
			"Once in a life time. Waving Dog.",
			"Wave dude.",
			"Can't beleive you missed that..."],
			3),
		new Senario("You come across an old mans bean stand in the woods, do you wave?",
			["You are feeling much more full of magic now..."],
			["seems pretty interesting",
			"They could be magic beans",
			"what if they made you magic...."],
			2),
		new Senario("You see John cena waving in front of his face, do you wave?",
			["He looks confused, but waves back, impressed with you."],
			["Are you sure? He is just sitting there waving.",
			"It does seem like he's looking through you... ",
			"I guess you don't have to wave if you don't want."],
			2),
		new Senario("You see your ex's father at the strip club, do you wave?",
			["The conversation thats about to unroll should be stellar"],
			["Oh.", "This could be good, you sure?",
			"Imagine how great this converstion could be...",
			"Whatever, it's your decision."],
			3),
		new Senario("You see a dark ominous creature in the distance, do you wave?",
			["The creature is kind and wants to give you answers.",
			 "ALL THE ANSWERS ARE YOURS NOW"],
			["He could have the answers...",
			"He does have the answers...",
			"Do you not want the answers?",
			"You will never know the answer",
			"Waving is the answer"],
			3),
		];
