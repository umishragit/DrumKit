function addAni(key){
	document.querySelector("." + key).classList.add("pressed");
	// console.log(document.querySelector("." + key).classList);

	setTimeout(function(){
		document.querySelector("." + key).classList.remove("pressed");
	},1000);
}


var li_len = document.querySelectorAll("button.drum").length

for (var i = 0; i < li_len; i++){
		document.querySelectorAll("button.drum")[i].addEventListener("click",soundClip);
}

document.addEventListener("keydown",function(event){
	switch(event.key.toLowerCase()){
		case 'w': var s = new Audio("sounds/tom-1.mp3");
				  s.play();
				  break;
		case 'a': var s = new Audio("sounds/tom-2.mp3");
				  s.play();
				  break;
		case 's': var s = new Audio("sounds/tom-3.mp3");
				  s.play();
				  break;
		case 'd': var s = new Audio("sounds/tom-4.mp3");
				  s.play();
				  break;
		case 'j': var s = new Audio("sounds/crash.mp3");
				  s.play();
				  break;
		case 'k': var s = new Audio("sounds/kick-bass.mp3");
				  s.play();
				  break;
		case 'l': var s = new Audio("sounds/snare.mp3");
				  s.play();
				  break;
		}
		addAni(event.key.toLowerCase());
});


function soundClip(){
	// this.style.color = "white"];
	// /console.log(this.textContent);
	switch(this.textContent){
		case 'w': var s = new Audio("sounds/tom-1.mp3");
				  s.play();
				  break;
		case 'a': var s = new Audio("sounds/tom-2.mp3");
				  s.play();
				  break;
		case 's': var s = new Audio("sounds/tom-3.mp3");
				  s.play();
				  break;
		case 'd': var s = new Audio("sounds/tom-4.mp3");
				  s.play();
				  break;
		case 'j': var s = new Audio("sounds/crash.mp3");
				  s.play();
				  break;
		case 'k': var s = new Audio("sounds/kick-bass.mp3");
				  s.play();
				  break;
		case 'l': var s = new Audio("sounds/snare.mp3");
				  s.play();
				  break;
	}
	addAni(this.textContent);
}




