var multi = document.getElementsByClassName('multi');
var single = document.getElementsByClassName('single');

var shooters = document.getElementsByClassName('shooter');
var kids = document.getElementsByClassName('kids');
var experiences = document.getElementsByClassName('experience');
var puzzles = document.getElementsByClassName('puzzle');
var rhythm = document.getElementsByClassName('rhythm');
var action = document.getElementsByClassName('action');
var sports = document.getElementsByClassName('sports');
var horror = document.getElementsByClassName('horror');
var fiveplus = document.getElementsByClassName('fiveplus');
var two = document.getElementsByClassName('two');
var rooms = document.getElementsByClassName('rooms');

var modules = document.getElementsByClassName('module');

var module_toggle = false;

var buttonClicks = 1;
var toggle = 0;

function sortGenre(reset) {
	var button = document.getElementById('dropbutton');
	
	if(reset == 0 || reset == "" || reset == null) {
		switch(buttonClicks) {
			case 0: // default
				button.innerHTML = "Sort By Genre Instead";
				buttonClicks++;
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "inline-block";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "inline-block";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "inline-block";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "inline-block";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "inline-block";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "inline-block";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "inline-block";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "inline-block";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "inline-block";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "inline-block";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				break;
			case 1: // shooters
				button.innerHTML = "Shooters";
				buttonClicks++;
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "inline-block";
				break;
			case 2: // kids
				button.innerHTML = "For Kids";
				buttonClicks++;
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "inline-block";
				break;
			case 3: // experiences
				button.innerHTML = "Experiences";
				buttonClicks++;
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "inline-block";
				break;
			case 4: // puzzles
				button.innerHTML = "Puzzle Games";
				buttonClicks++;
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "inline-block";
				break;
			case 5: // rhythm
				button.innerHTML = "Musical Games";
				buttonClicks++;
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "inline-block";
				break;
			case 6: // action
				button.innerHTML = "Action Games";
				buttonClicks++;
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "inline-block";
				break;
			case 7: // sports
				button.innerHTML = "Sports";
				buttonClicks++;
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "inline-block";
				break;
			case 8: // horror
				button.innerHTML = "Horror";
				buttonClicks++;
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "inline-block";
				break;
			case 9: // fiveplus
				button.innerHTML = "5+ Players";
				buttonClicks++;
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "inline-block";
				break;
			case 10:
				case 9: // two
				button.innerHTML = "2 Players";
				buttonClicks = 0;
				for(i = 0; i < shooters.length; i++)
					shooters[i].style.display = "none";
				for(i = 0; i < kids.length; i++)
					kids[i].style.display = "none";
				for(i = 0; i < experiences.length; i++)
					experiences[i].style.display = "none";
				for(i = 0; i < puzzles.length; i++)
					puzzles[i].style.display = "none";
				for(i = 0; i < rhythm.length; i++)
					rhythm[i].style.display = "none";
				for(i = 0; i < action.length; i++)
					action[i].style.display = "none";
				for(i = 0; i < sports.length; i++)
					sports[i].style.display = "none";
				for(i = 0; i < rooms.length; i++)
					rooms[i].style.display = "none";
				for(i = 0; i < horror.length; i++)
					horror[i].style.display = "none";
				for(i = 0; i < fiveplus.length; i++)
					fiveplus[i].style.display = "none";
				for(i = 0; i < two.length; i++)
					two[i].style.display = "inline-block";
				break;
		}
	}
	else {
		button.innerHTML = "Sort By Genre Instead";
		buttonClicks = 1;
		for(i = 0; i < shooters.length; i++)
			shooters[i].style.display = "inline-block";
		for(i = 0; i < kids.length; i++)
			kids[i].style.display = "inline-block";
		for(i = 0; i < experiences.length; i++)
			experiences[i].style.display = "inline-block";
		for(i = 0; i < puzzles.length; i++)
			puzzles[i].style.display = "inline-block";
		for(i = 0; i < rhythm.length; i++)
			rhythm[i].style.display = "inline-block";
		for(i = 0; i < action.length; i++)
			action[i].style.display = "inline-block";
		for(i = 0; i < sports.length; i++)
			sports[i].style.display = "inline-block";
		for(i = 0; i < horror.length; i++)
			horror[i].style.display = "inline-block";
		for(i = 0; i < fiveplus.length; i++)
			fiveplus[i].style.display = "inline-block";
		for(i = 0; i < two.length; i++)
			two[i].style.display = "inline-block";
		for(i = 0; i < rooms.length; i++)
			rooms[i].style.display = "none";
	}
}

function showPlayers(players) {
	sortGenre(1);
	sortEscape();
	
	if(players == 0) {
		for(var i = 0; i < single.length; i++) {
			single[i].style.display = "none";
		}
		for(var i = 0; i < rooms.length; i++) {
			rooms[i].style.display = "none";
		}
		for(var i = 0; i < multi.length; i++) {
			multi[i].style.display = "inline-block";
		}
	}
	else if(players == 1) {
		for(var i = 0; i < multi.length; i++) {
			multi[i].style.display = "none";
		}
		for(var i = 0; i < rooms.length; i++) {
			rooms[i].style.display = "none";
		}
		for(var i = 0; i < single.length; i++) {
			single[i].style.display = "inline-block";
		}
	}
	else if(players == 2) {
		for(var i = 0; i < single.length; i++) {
			single[i].style.display = "inline-block";
		}
		for(var i = 0; i < rooms.length; i++) {
			rooms[i].style.display = "none";
		}
		for(var i = 0; i < multi.length; i++) {
			multi[i].style.display = "inline-block";
		}
	}
}

function sortEscape() {
	sortGenre(1);
	var button = document.getElementById('roombutton');
	
	switch(toggle) {
		case 0:
			toggle = 1;
			for(i = 0; i < shooters.length; i++)
				shooters[i].style.display = "none";
			for(i = 0; i < kids.length; i++)
				kids[i].style.display = "none";
			for(i = 0; i < experiences.length; i++)
				experiences[i].style.display = "none";
			for(i = 0; i < puzzles.length; i++)
				puzzles[i].style.display = "none";
			for(i = 0; i < rhythm.length; i++)
				rhythm[i].style.display = "none";
			for(i = 0; i < action.length; i++)
				action[i].style.display = "none";
			for(i = 0; i < sports.length; i++)
				sports[i].style.display = "none";
			for(i = 0; i < horror.length; i++)
				horror[i].style.display = "none";
			for(i = 0; i < rooms.length; i++)
				rooms[i].style.display = "inline-block";
			break;
		case 1:
			toggle = 0;
			for(i = 0; i < shooters.length; i++)
				shooters[i].style.display = "inline-block";
			for(i = 0; i < kids.length; i++)
				kids[i].style.display = "inline-block";
			for(i = 0; i < experiences.length; i++)
				experiences[i].style.display = "inline-block";
			for(i = 0; i < puzzles.length; i++)
				puzzles[i].style.display = "inline-block";
			for(i = 0; i < rhythm.length; i++)
				rhythm[i].style.display = "inline-block";
			for(i = 0; i < action.length; i++)
				action[i].style.display = "inline-block";
			for(i = 0; i < sports.length; i++)
				sports[i].style.display = "inline-block";
			for(i = 0; i < horror.length; i++)
				horror[i].style.display = "inline-block";
			for(i = 0; i < rooms.length; i++)
				rooms[i].style.display = "none";
			break;
	}
}



function toggleModule(tag) {
	var game = "";
	switch(tag) {
		case 'arizona':
			game = document.getElementById('arizona');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'jobsim':
			game = document.getElementById('jobsim');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'elfass':
			game = document.getElementById('elfass');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'fisherman':
			game = document.getElementById('fisherman');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'property':
			game = document.getElementById('property');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'superhot':
			game = document.getElementById('superhot');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'saber':
			game = document.getElementById('saber');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'fruit1':
			game = document.getElementById('fruit1');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'amongus':
			game = document.getElementById('amongus');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'earth':
			game = document.getElementById('earth');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'mirage':
			game = document.getElementById('mirage');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'blue':
			game = document.getElementById('blue');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'spider':
			game = document.getElementById('spider');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'plank':
			game = document.getElementById('plank');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'gorilla':
			game = document.getElementById('gorilla');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'starwar':
			game = document.getElementById('starwar');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'medic':
			game = document.getElementById('medic');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'pirate':
			game = document.getElementById('pirate');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'blade':
			game = document.getElementById('blade');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'prop':
			game = document.getElementById('prop');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'mine':
			game = document.getElementById('mine');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'soul':
			game = document.getElementById('soul');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'synth':
			game = document.getElementById('synth');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'kooring':
			game = document.getElementById('kooring');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case '90s':
			game = document.getElementById('90s');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'birds':
			game = document.getElementById('birds');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'horizon':
			game = document.getElementById('horizon');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'loco':
			game = document.getElementById('loco');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'rangers':
			game = document.getElementById('rangers');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'epic':
			game = document.getElementById('epic');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'cookout':
			game = document.getElementById('cookout');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'ark':
			game = document.getElementById('ark');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'racer':
			game = document.getElementById('racer');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'manor':
			game = document.getElementById('manor');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'pistol':
			game = document.getElementById('pistol');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'vaca':
			game = document.getElementById('vaca');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'evasion':
			game = document.getElementById('evasion');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'rock':
			game = document.getElementById('rock');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'top':
			game = document.getElementById('top');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'hoops':
			game = document.getElementById('hoops');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'dick':
			game = document.getElementById('dick');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'hotel':
			game = document.getElementById('hotel');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'nef':
			game = document.getElementById('nef');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'paintings':
			game = document.getElementById('paintings');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'baam':
			game = document.getElementById('baam');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'fear':
			game = document.getElementById('fear');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'zero':
			game = document.getElementById('zero');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'moto':
			game = document.getElementById('moto');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'cyber':
			game = document.getElementById('cyber');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'abc':
			game = document.getElementById('abc');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'battlewake':
			game = document.getElementById('battlewake');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'clash':
			game = document.getElementById('clash');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'car':
			game = document.getElementById('car');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'kitten':
			game = document.getElementById('kitten');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'bot':
			game = document.getElementById('bot');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'break':
			game = document.getElementById('break');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'brush':
			game = document.getElementById('brush');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'trek':
			game = document.getElementById('trek');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'die':
			game = document.getElementById('die');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'gns':
			game = document.getElementById('gns');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'time':
			game = document.getElementById('time');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'warcade':
			game = document.getElementById('warcade');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'solar':
			game = document.getElementById('solar');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'pingpong':
			game = document.getElementById('pingpong');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'sam':
			game = document.getElementById('sam');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'shooty':
			game = document.getElementById('shooty');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'basement':
			game = document.getElementById('basement');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'lab':
			game = document.getElementById('lab');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'training':
			game = document.getElementById('training');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'wizard':
			game = document.getElementById('wizard');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'temple':
			game = document.getElementById('temple');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'rift':
			game = document.getElementById('rift');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'rotten':
			game = document.getElementById('rotten');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'rec':
			game = document.getElementById('rec');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'allinone':
			game = document.getElementById('allinone');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'climb':
			game = document.getElementById('climb');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'alice':
			game = document.getElementById('alice');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'fear1':
			game = document.getElementById('fear1');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'fear2':
			game = document.getElementById('fear2');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'prison':
			game = document.getElementById('prison');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'cherno':
			game = document.getElementById('cherno');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'jungle':
			game = document.getElementById('jungle');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'surv':
			game = document.getElementById('surv');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'sig':
			game = document.getElementById('sig');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'sanctum':
			game = document.getElementById('sanctum');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'punk':
			game = document.getElementById('punk');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'christmas':
			game = document.getElementById('christmas');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'sigma':
			game = document.getElementById('sigma');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'callblood':
			game = document.getElementById('callblood');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'minigolf':
			game = document.getElementById('minigolf');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'lightblade':
			game = document.getElementById('lightblade');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'plush':
			game = document.getElementById('plush');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'starwar2':
			game = document.getElementById('starwar2');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'bblocks':
			game = document.getElementById('bblocks');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'bows':
			game = document.getElementById('bows');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case 'headgun':
			game = document.getElementById('headgun');
			if(module_toggle == false) {
				module_toggle = true;
				game.style.display = 'flex';
				break;
			}
			else if(module_toggle == true) {
				module_toggle = false;
				game.style.display = 'none';
				break;
			}
			break;
		case '':
			alert("uh oh bestie something went wrong");
			break;
	}
}