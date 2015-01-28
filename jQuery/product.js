	var brands = new Array();
	var colors = new Array();
	function displayProducts(){

		var availableChecked = $("#available").prop("checked");
		$("#productTable tr td div").hide();

		//for selecting only brands
		if(!availableChecked){
			if(brands.length != 0 && colors.length ==0){
			
				for(var i = 0;i < brands.length; i++){
					$("#productTable tr td div p#" + brands[i]).parent().show();
				}
			}

			// for selecting only colors
			else if(brands.length ==0 && colors.length !=0){

				for(var i = 0;i < colors.length;i++){
					$("#productTable tr td div." + colors[i]).show();
				}
			}

			// if both lists are selected.
			else if(brands.length !=0 && colors.length !=0){

				for(var i=0; i <colors.length; i++){

					for(var j=0; j< brands.length; j++){
						$("#productTable tr td div." + colors[i] + " p#" + brands[j]).parent().show();
					}
				}
			}
			else if(brands.length ==0 && colors.length ==0){

				$("#productTable tr td div").show();
			}
		}// end of if.
		else{

			if(brands.length != 0 && colors.length ==0){
			
				for(var i = 0;i < brands.length; i++){
						$("#productTable tr td div p#" + brands[i] + ".available").parent().show();
					
				}
			}

			// for selecting only colors
			else if(brands.length ==0 && colors.length !=0){

				for(var i = 0;i < colors.length;i++){
						$("#productTable tr td div." + colors[i] + " p.available").parent().show();
	
				}
			}

			// if both lists are selected.
			else if(brands.length !=0 && colors.length !=0){

				for(var i=0; i <colors.length; i++){

					for(var j=0; j< brands.length; j++){
							$("#productTable tr td div." + colors[i] + " p#" + brands[j] +".available").parent().show();
					}
				}
			}

			else if(brands.length ==0 && colors.length ==0){

				$("#productTable tr td div p.available").parent().show();
			}
		}//end of else
	}// end of displayDiv()

$(document).ready(function(){

	$("#available").click(function(){
		if($(this).prop("checked") == true){
			$("#productTable tr td div p.available").parent().hide();
		}
		else{
			$("#productTable tr td div p.available").parent().show();
		}
		displayProducts();
	});

	$("#all").click(function(){
		$("#productTable tr td div").show();
		$(".products ul li input").prop("checked", false);
		$(".brandsList li input").prop("checked", false);
		$(".colorsDiv ul li input").prop("checked", false);
		$("#available").prop("checked", false);
		$("#all").prop("checked", false);
		colors = [];
		brands = [];
	});
	
	$("#itemA").click(function(){

		if($(this).prop("checked") == true){
			if(brands.indexOf("A")<0){
				brands.push("A");
			}
		}
		else{
			if(brands.indexOf("A")>=0){
				brands = jQuery.grep(brands, function(value){
  				return value != "A";
				});
			}	
		}
		displayProducts();
	});
	
	$("#itemB").click(function(){

		if($(this).prop("checked") == true){
			if(brands.indexOf("B")<0){
				brands.push("B");
			}
		}
		else{
			if(brands.indexOf("B")>=0){
				brands = jQuery.grep(brands, function(value) {
  				return value != "B";
				});
			}	
		}
		displayProducts();
	});

	$("#itemC").click(function(){

		if($(this).prop("checked") == true){
			if(brands.indexOf("C")<0){
				brands.push("C");
			}
		}
		else{
			if(brands.indexOf("C")>=0){
				brands = jQuery.grep(brands, function(value) {
  				return value != "C";
				});
			}	
		}
		displayProducts();
	});

	$("#itemD").click(function(){

		if($(this).prop("checked") == true){
			if(brands.indexOf("D")<0){
				brands.push("D");
			}
		}
		else{
			if(brands.indexOf("D")>=0){
				brands = jQuery.grep(brands, function(value) {
  				return value != "D";
				});
			}	
		}
		displayProducts();
	});

	$("#itemYellow").click(function(){

		if($(this).prop("checked") == true){
			if(colors.indexOf("yellow")<0){
				colors.push("yellow");
			}
		}
		else{
			if(colors.indexOf("yellow")>=0){
				colors = jQuery.grep(colors, function(value) {
  				return value != "yellow";
				});
			}	
		}
		displayProducts();
	});

	$("#itemRed").click(function(){

		if($(this).prop("checked") == true){
			if(colors.indexOf("red")<0){
				colors.push("red");
			}
		}
		else{
			if(colors.indexOf("red")>=0){
				colors = jQuery.grep(colors, function(value) {
  				return value != "red";
				});
			}	
		}
		displayProducts();
	});

	$("#itemGreen").click(function(){

		if($(this).prop("checked") == true){
			if(colors.indexOf("green")<0){
				colors.push("green");
			}
		}
		else{
			if(colors.indexOf("green")>=0){
				colors = jQuery.grep(colors, function(value) {
  				return value != "green";
				});
			}	
		}
		displayProducts();
	});

	$("#itemBlue").click(function(){

		if($(this).prop("checked") == true){
			if(colors.indexOf("blue")<0){
				colors.push("blue");
			}
		}
		else{
			if(colors.indexOf("blue")>=0){
				colors = jQuery.grep(colors, function(value) {
  				return value != "blue";
				});
			}	
		}
		displayProducts();
	});

});