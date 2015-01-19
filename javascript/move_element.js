var dHighlight= function(fieldId1,fieldId2){
		document.getElementById(fieldId1).style.backgroundColor="blue";
		document.getElementById(fieldId1).style.display="none";
		document.getElementById(fieldId2).style.display="block";
		document.getElementById(fieldId1).style.backgroundColor="white";
		document.getElementById(fieldId2).style.backgroundColor="white";
	};
	var highlight= function(fieldId){
		document.getElementById(fieldId).style.backgroundColor="blue";
	};
	var addElement = function(){
		if(document.getElementById("ind1").style.backgroundColor=="blue")
		{
			document.getElementById("ind1").style.display="none";
			document.getElementById("ind2").style.display="block"
			document.getElementById("ind1").style.backgroundColor="white";
			document.getElementById("ind2").style.backgroundColor="white";
		}
		else if(document.getElementById("fra1").style.backgroundColor=="blue")
		{
			document.getElementById("fra1").style.display="none";
			document.getElementById("fra2").style.display="block";
			document.getElementById("fra1").style.backgroundColor="white";
			document.getElementById("fra2").style.backgroundColor="white";
		}
		else if(document.getElementById("ger1").style.backgroundColor=="blue")
		{
			document.getElementById("ger1").style.display="none";
			document.getElementById("ger2").style.display="block";
			document.getElementById("ger1").style.backgroundColor="white";
			document.getElementById("ger2").style.backgroundColor="white";
		}
		else if(document.getElementById("hun1").style.backgroundColor=="blue")
		{
			document.getElementById("hun1").style.display="none";
			document.getElementById("hun2").style.display="block";
			document.getElementById("hun1").style.backgroundColor="white";
			document.getElementById("hun2").style.backgroundColor="white";
		}
		else if(document.getElementById("aus1").style.backgroundColor=="blue")
		{
			document.getElementById("aus1").style.display="none";
			document.getElementById("aus2").style.display="block";
			document.getElementById("aus1").style.backgroundColor="white";
			document.getElementById("aus2").style.backgroundColor="white";
		}
		else if(document.getElementById("por1").style.backgroundColor=="blue")
		{
			document.getElementById("por1").style.display="none";
			document.getElementById("por2").style.display="block";
			document.getElementById("por1").style.backgroundColor="white";
			document.getElementById("por2").style.backgroundColor="white";
		}
		else if(document.getElementById("egy1").style.backgroundColor=="blue")
		{
			document.getElementById("egy1").style.display="none";
			document.getElementById("egy2").style.display="block";
			document.getElementById("egy1").style.backgroundColor="white";
			document.getElementById("egy2").style.backgroundColor="white";
		}
	};

	var removeElement = function(){
		if(document.getElementById("ind2").style.backgroundColor=="blue")
		{
			document.getElementById("ind2").style.display="none";
			document.getElementById("ind1").style.display="block"
			document.getElementById("ind1").style.backgroundColor="white";
			document.getElementById("ind2").style.backgroundColor="white";
		}
		else if(document.getElementById("fra2").style.backgroundColor=="blue")
		{
			document.getElementById("fra2").style.display="none";
			document.getElementById("fra1").style.display="block";
			document.getElementById("fra1").style.backgroundColor="white";
			document.getElementById("fra2").style.backgroundColor="white";
		}
		else if(document.getElementById("ger2").style.backgroundColor=="blue")
		{
			document.getElementById("ger2").style.display="none";
			document.getElementById("ger1").style.display="block";
			document.getElementById("ger1").style.backgroundColor="white";
			document.getElementById("ger2").style.backgroundColor="white";
		}
		else if(document.getElementById("hun2").style.backgroundColor=="blue")
		{
			document.getElementById("hun2").style.display="none";
			document.getElementById("hun1").style.display="block";
			document.getElementById("hun1").style.backgroundColor="white";
			document.getElementById("hun2").style.backgroundColor="white";
		}
		else if(document.getElementById("aus2").style.backgroundColor=="blue")
		{
			document.getElementById("aus2").style.display="none";
			document.getElementById("aus1").style.display="block";
			document.getElementById("aus1").style.backgroundColor="white";
			document.getElementById("aus2").style.backgroundColor="white";
		}
		else if(document.getElementById("por2").style.backgroundColor=="blue")
		{
			document.getElementById("por2").style.display="none";
			document.getElementById("por1").style.display="block";
			document.getElementById("por1").style.backgroundColor="white";
			document.getElementById("por2").style.backgroundColor="white";
		}
		else if(document.getElementById("egy2").style.backgroundColor=="blue")
		{
			document.getElementById("egy2").style.display="none";
			document.getElementById("egy1").style.display="block";
			document.getElementById("egy1").style.backgroundColor="white";
			document.getElementById("egy2").style.backgroundColor="white";
		}
	};
