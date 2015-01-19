var clicks=0;
	var tclicks=0;
	var image1,image2;
    var totalSeconds = 0;
    var timmer;
    var helloworld = function()
    {
    	console.log("helloworld");
    };
    var stopGame = function()
    {
    	clearInterval(timmer);
    	document.getElementById("minutes").innerHTML=pad(0);
    	document.getElementById("seconds").innerHTML=pad(0);
    	document.getElementById("tclicks").innerHTML=0;
    	document.getElementById("start").style.visibility="visible";
    	document.getElementById("stop").style.visibility="hidden";
    	document.getElementById("pause").style.visibility="hidden";
    	document.getElementById("resume").style.visibility="hidden";

    };
    var resumeGame = function()
    {
    	timmer=setInterval(setTime, 1000);

    	for(var j=0;j<36;j++){
       		document.getElementById("div"+j).setAttribute("onclick","unHideImage("+j+")");
       	}
    };
        function setTime()
        {
            ++totalSeconds;
            document.getElementById("minutes").innerHTML = pad(totalSeconds%60);
            document.getElementById("seconds").innerHTML = pad(parseInt(totalSeconds/60));
        }

        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
    

	var unHideImage= function(divId)
	{
		document.getElementById("cell"+divId).style.visibility="visible";
		tclicks++;
		clicks++;
		document.getElementById('tclicks').innerHTML=tclicks;
		if(clicks==1)
		{
			image1=divId;
			
		}
		else if(clicks==2)
		{
			image2=divId;
			if(!(document.getElementById("cell"+image1).src==document.getElementById("cell"+image2).src))
			{
				clicks=0;
				setTimeout(function(){
				document.getElementById("cell"+image1).style.visibility="hidden";
				document.getElementById("cell"+image2).style.visibility="hidden";
				},200);
				
			}
		}

	};
	var shuffleArray=function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
	};

	var loadImages= function()
	{
		var num=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
		num= shuffleArray(num);

		var source;
		for(var i=0;i<18;i++)
		{
			document.getElementById('cell'+i).src="images\\image_"+num[i]+".jpg";
		}
		num=shuffleArray(num);
		for(var i=0;i<18;i++)
		{
			document.getElementById('cell'+(i+18)).src="images\\image_"+num[i]+".jpg";
		}
       	timmer=setInterval(setTime, 1000);
       	document.getElementById("stop").style.visibility="visible";
       	document.getElementById("pause").style.visibility="visible";
       	document.getElementById("start").style.display="none";
       	console.log('called loadImages()');

       	for(var j=0;j<36;j++){
       		console.log("addinf fn to div "+j);
       		document.getElementById('div'+j).setAttribute("onclick", "unHideImage("+ j +")");

       	}
	};
	var pauseGame= function()
	{
		document.getElementById("resume").style.visibility="visible";
		clearInterval(timmer);
		for(var j=0;j<36;j++){
       		document.getElementById('div'+j).onclick = function(){
       			
       		};
       	}

	};