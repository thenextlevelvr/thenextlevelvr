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

var buttonClicks = 0;

function btnChrome_onclick() {
  document.documentElement.webkitRequestFullScreen();
}

// combine these two so that they get do like, kids + multiplayer

function showPlayers(players) {
	if(players == 0) {
		for(var i = 0; i < single.length; i++) {
			single[i].style.display = "none";
		}
		for(var i = 0; i < multi.length; i++) {
			multi[i].style.display = "inline-block";
		}
	}
	else if(players == 1) {
		for(var i = 0; i < multi.length; i++) {
			multi[i].style.display = "none";
		}
		for(var i = 0; i < single.length; i++) {
			single[i].style.display = "inline-block";
		}
	}
	else if(players == 2) {
		for(var i = 0; i < single.length; i++) {
			single[i].style.display = "inline-block";
		}
		for(var i = 0; i < multi.length; i++) {
			multi[i].style.display = "inline-block";
		}
	}
}

function sortGenre() {
	var button = document.getElementById('dropbutton');

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
			break;
		case 1: // shooters
			button.innerHTML = "Shooters";
			buttonClicks++;
			for(i = 0; i < shooters.length; i++)
				shooters[i].style.display = "inline-block";
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
			break;
		case 2: // kids
			button.innerHTML = "For Kids";
			buttonClicks++;
			for(i = 0; i < shooters.length; i++)
				shooters[i].style.display = "none";
			for(i = 0; i < kids.length; i++)
				kids[i].style.display = "inline-block";
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
			break;
		case 3: // experiences
			button.innerHTML = "Experiences";
			buttonClicks++;
			for(i = 0; i < shooters.length; i++)
				shooters[i].style.display = "none";
			for(i = 0; i < kids.length; i++)
				kids[i].style.display = "none";
			for(i = 0; i < experiences.length; i++)
				experiences[i].style.display = "inline-block";
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
			break;
		case 4: // puzzles
			button.innerHTML = "Puzzle Games";
			buttonClicks++;
			for(i = 0; i < shooters.length; i++)
				shooters[i].style.display = "none";
			for(i = 0; i < kids.length; i++)
				kids[i].style.display = "none";
			for(i = 0; i < experiences.length; i++)
				experiences[i].style.display = "none";
			for(i = 0; i < puzzles.length; i++)
				puzzles[i].style.display = "inline-block";
			for(i = 0; i < rhythm.length; i++)
				rhythm[i].style.display = "none";
			for(i = 0; i < action.length; i++)
				action[i].style.display = "none";
			for(i = 0; i < sports.length; i++)
				sports[i].style.display = "none";
			for(i = 0; i < horror.length; i++)
				horror[i].style.display = "none";
			break;
		case 5: // rhythm
			button.innerHTML = "Musical Games";
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
				rhythm[i].style.display = "inline-block";
			for(i = 0; i < action.length; i++)
				action[i].style.display = "none";
			for(i = 0; i < sports.length; i++)
				sports[i].style.display = "none";
			for(i = 0; i < horror.length; i++)
				horror[i].style.display = "none";
			break;
		case 6: // action
			button.innerHTML = "Action Games";
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
				action[i].style.display = "inline-block";
			for(i = 0; i < sports.length; i++)
				sports[i].style.display = "none";
			for(i = 0; i < horror.length; i++)
				horror[i].style.display = "none";
			break;
		case 7: // sports
			button.innerHTML = "Sports";
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
				sports[i].style.display = "inline-block";
			for(i = 0; i < horror.length; i++)
				horror[i].style.display = "none";
			break;
		case 8: // horror
			button.innerHTML = "Horror";
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
			for(i = 0; i < horror.length; i++)
				horror[i].style.display = "inline-block";
			break;
	}
}