var game_started = false;
var tutorial_played = false;
var wave_noise = new Audio('foo.wav');
var wait_noise = new Audio('bar.wav');
var interval_delay = 1000;
var waves = 0;
var waits = 0;
var time_not_waving = 0;
var senario_count = senario.length;
var cur_senario = 0;
var debug = 0;

setInterval(function() {
		if (debug)
		{
		console.log("not_waving: " + time_not_waving);
		console.log("waves: " + waves);
		console.log("waits: " + waits);
		}
		time_not_waving++;
		if (time_not_waving > 4)
		{
		$("div").hide();
		console.log("Waited, no_wave");
		waits++;
		no_wave();
		}
		}, interval_delay);

function wave() {
	$("div").show();
	if (waves == 0)
	{
		console.log("starting game");
		$("h1").text(senario[0].ask);
		senario[0].asked = true;
	}
	else if(cur_senario < senario_count)
	{
		console.log("Game Phase");
		if(senario[cur_senario].asked)
		{
			console.log("Waved at ask in cur_senario: " + cur_senario);
			console.log("act " + senario[cur_senario].cur);
			if (senario[cur_senario].waved == false)
			{
				console.log("cur_s cur: " + senario[cur_senario].cur);
				console.log("recoverable till: " + senario[cur_senario].recoverable);
				if (senario[cur_senario].cur < senario[cur_senario].recoverable)
				{
					console.log("resetting the cur, we hadn't waved.");
					senario[cur_senario].cur = 0;
				}
				else
				{
					console.log("Nope, you didn't wave in time");
				}
			}
			senario[cur_senario].waved = true;	
			if (senario[cur_senario].cur < senario[cur_senario].answers.length)
			{
				console.log("answering");
				$("h1").text(senario[cur_senario].answers[senario[cur_senario].cur]);
				senario[cur_senario].cur++;
			}
			else
			{
				console.log("Asking a new senario at end of answers");
				senario[cur_senario].renew();	
				cur_senario++;
				if (cur_senario < senario_count)
				{
					$("h1").text(senario[cur_senario].ask);
					senario[cur_senario].asked = true;
				}
				else
				{
					console.log("nothing to do?");
				}
			}
		}
		else if (senario[cur_senario].failed)
		{
			console.log("Senario already failed. doing nothing");	
			$("h1").text("Now it's too late to wave...");
		}
		else
		{	
			console.log("Asking a new senario");
			$("h1").text(senario[cur_senario].ask);
			senario[cur_senario].asked = true;	
		}
	}
	else
	{
		$("h1").text("The end, you waved " + waves + " times.");	
	}
	waves++;	
	time_not_waving = 0;
}

function no_wave() {
	if (waves == 0)
	{
		if (waits % 2)
			$("h1").text("Do you wave?");
		else
			$("h1").text("Press Spacebar to start!");

		console.log("no waves, game has not started.");
	}
	else if(cur_senario < senario_count)
	{
		console.log("didn't wave, in cur_senario " + cur_senario);
		console.log("act " + senario[cur_senario].cur);
		console.log(senario[cur_senario].waved + " already waved? ");
		if (senario[cur_senario].waved == true)
		{
			if (senario[cur_senario].cur < senario[cur_senario].answers.length)
			{
				console.log("moving forward the answer, already waved");
				$("h1").text(senario[cur_senario].answers[senario[cur_senario].cur]);
				senario[cur_senario].cur++;
			}
			else
			{
				console.log("We hit the end of the answers, new senario");
				cur_senario++;
				if (cur_senario < senario_count)
				{
					$("h1").text(senario[cur_senario].ask);
					senario[cur_senario].asked = true;
				}
				else
				{
					console.log("nothing to do? no wave?");
				}
			}
		}
		else
		{
			console.log("We didn't wave at an ask, retort!");
			if (senario[cur_senario].cur < senario[cur_senario].retorts.length)
			{
				senario[cur_senario].failed = true;
				$("h1").text(senario[cur_senario].retorts[senario[cur_senario].cur]);
				senario[cur_senario].cur++;
			}
			else
			{	
				console.log("We hit the end of the retorts, reset the game");
				if (waves > cur_senario + 1)
				{
					$("h1").text("Thanks for at least waving " + waves + " times");
					waves = 0;
				}
				else
				{
					$("h1").text("The key to waving, is spacebar.");	
				}
				senario[cur_senario].renew();	
				cur_senario = 0;
				$("h1").text(senario[cur_senario].ask);
				senario[cur_senario].asked = true;
			}
		}
	}
	else
	{
		console.log("Out of senario_count's range?");	
		console.log("restart the game");
		cur_senario = 0;
		waves = 0;
	}
	time_not_waving = 0;
}

$(document).ready(function(){
		$("body").keypress(function(e){
				if (e.keyCode == 32)
				wave();	
				else	
				console.log(e.keyCode);
				});
		});
