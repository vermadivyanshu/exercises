var clicks = 0;
var tclicks = 0;
var image1, image2;
var totalSeconds = 0;
var timmer;
var open_div = [];
var open_index = 0;

var loadImages= function(){

	var num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
	
	num = shuffleArray(num);
	var source;

	for(var i = 0;i < 18;i++){
		document.getElementById('cell' + i).src = "images\\image_"+num[i] + ".jpg";
	}

	num=shuffleArray(num);

	for(var i = 0;i < 18;i++){
		document.getElementById('cell' + (i + 18)).src = "images\\image_"+num[i] + ".jpg";
	}
  
  timmer=setInterval(setTime, 1000);
     	
};

var createfunc = function(i){
	document.getElementById("div" + i).onclick = function(){
  					unHideImage(i);
  };
}; 

var createRemovefunc = function(i){
	document.getElementById("div" + i).onclick = null;
};

var startGame = function(){
	loadImages();
	open_div = [];
	open_index = 0;
	document.getElementById("stop").style.visibility = "visible";
  document.getElementById("pause").style.visibility = "visible";
  document.getElementById("start").style.display = "none";
 
 	for(var j = 0;j < 36;j++){
		createfunc(j);
  }
};

var stopGame = function(){
	clearInterval(timmer);
	document.getElementById("minutes").innerHTML = pad(0);
	document.getElementById("seconds").innerHTML = pad(0);
	document.getElementById("tclicks").innerHTML = 0;
	document.getElementById("start").style.display = "inline";
	document.getElementById("stop").style.visibility = "hidden";
	document.getElementById("pause").style.visibility = "hidden";
	document.getElementById("resume").style.visibility = "hidden";
	

	for(var i = 0;i < 36;i++){
		document.getElementById("cell" + i).style.display = "hidden";
		createRemovefunc(i);
	}
	if(open_div.length == 36)
	{
		alert("Total Clicks" + tclicks);
		
	}
	else{
		alert("Game not Complete! You have to Start Again.");
	}

};

var resumeGame = function(){
  	timmer = setInterval(setTime, 1000);
  	console.log(open_div);
  	for(var i = 0;i < 36;i++){
  		if(open_div.indexOf(i) < 0){
  			createfunc(i);
  		}	
  	}
};

var setTime = function(){
          ++totalSeconds;
          document.getElementById("minutes").innerHTML = pad(totalSeconds%60);
          document.getElementById("seconds").innerHTML = pad(parseInt(totalSeconds/60));
};

var pad = function(val){
  var valString = val + "";
  if(valString.length < 2){
    	return "0" + valString;
  }
  else{
        return valString;
  }
};

var unHideImage= function(divId){

	document.getElementById("cell"+divId).style.visibility="visible";
	tclicks++;
	clicks++;
	if(clicks == 1){
		image1 = divId;
		for(var i = 0;open_div.length;i++){
			if(image1 == open_div[i]){
				clicks--;
				tclicks--;
			}
		}
		
	}
	else if(clicks == 2){
		image2 = divId;

		for(var i = 0;i<open_div.length;i++){
			if (image2 == open_div[i]) {
				clicks--;
				tclicks--;
			}
		}
	}

	if(clicks == 2 && !(document.getElementById("cell" + image1).src == document.getElementById("cell" + image2).src && image1 != image2)){
			clicks = 0;
			setTimeout(function(){
				document.getElementById("cell" + image1).style.visibility = "hidden";
				document.getElementById("cell" + image2).style.visibility = "hidden";
			},200);
			
		}
	else if(clicks == 2){
				clicks = 0;
				open_div[open_index] = image2;
				open_index++;
				open_div[open_index] = image1;
				open_index++;

				document.getElementById("div" + image1).setAttribute("onclick"," ");
				document.getElementById("div" + image2).setAttribute("onclick"," ");
	}

	document.getElementById('tclicks').innerHTML = tclicks;
	if(open_div.length == 36){
		clearInterval(timmer);
		alert("Game Over! Total clicks"+ tclicks);
	}

};

var shuffleArray = function(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
};

var pauseGame = function(){
	document.getElementById("resume").style.visibility = "visible";
	clearInterval(timmer);

	for(var j = 0;j < 36;j++){
     		createRemovefunc(j);
  	}
};