var theLink = document.getElementById("the");
var roadLink = document.getElementById("road");
var notLink = document.getElementById("not");
var takenLink = document.getElementById("taken");

var theDropdown = document.getElementById("the-dropdown");
var roadDropdown = document.getElementById("road-dropdown");
var notDropdown = document.getElementById("not-dropdown");
var takenDropdown = document.getElementById("taken-dropdown");

theLink.addEventListener("click", function(){
	theDropdown.classList.remove("hidden");
});

roadLink.addEventListener("click", function(){
	roadDropdown.classList.remove("hidden");
});

notLink.addEventListener("click", function(){
	notDropdown.classList.remove("hidden");
});

takenLink.addEventListener("click", function(){
	takenDropdown.classList.remove("hidden");
});