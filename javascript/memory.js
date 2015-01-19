var clicks=0;
var tclicks=0;
var image1,image2;
var unHideImage= function(divId)
{
	document.getElementById(divId).style.visibility="visible";
	tclicks++;
	clicks++;
	if(clicks==1)
	{
		image1=divId;
	}
	else if(clicks==2)
	{
		image2==divId;
		if(!(image1==image2))
		{
			clicks=0;
			document.getElementById(image1).style.visibility="hidden";
			document.getElementById(image2).style.visibility="hidden";
		}
	}

};