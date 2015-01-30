var brands = new Array();
var colors = new Array();
function displayProducts(){

		var availableChecked = $("#available").prop("checked");
		$("#productTable div").hide();

		//for selecting only brands
		if(!availableChecked){
			if(brands.length != 0 && colors.length == 0){
			
				for(var i = 0;i < brands.length; i++){
					$("#productTable div p#" + brands[i]).parent().show();
				}
			}

			// for selecting only colors
			else if(brands.length == 0 && colors.length != 0){

				for(var i = 0;i < colors.length;i++){
					$("#productTable div." + colors[i]).show();
				}
			}

			// if both lists are selected.
			else if(brands.length != 0 && colors.length != 0){

				for(var i=0; i <colors.length; i++){

					for(var j=0; j< brands.length; j++){
						$("#productTable div." + colors[i] + " p#" + brands[j]).parent().show();
					}
				}
			}
			else if(brands.length == 0 && colors.length == 0){

				$("#productTable div").show();
			}
		}// end of if.
		else{

			if(brands.length != 0 && colors.length ==0){
			
				for(var i = 0;i < brands.length; i++){
						$("#productTable div p#" + brands[i] + ".available").parent().show();
					
				}
			}

			// for selecting only colors
			else if(brands.length == 0 && colors.length != 0){

				for(var i = 0;i < colors.length;i++){
						$("#productTable td div." + colors[i] + " p.available").parent().show();
	
				}
			}

			// if both lists are selected.
			else if(brands.length != 0 && colors.length != 0){

				for(var i=0; i <colors.length; i++){

					for(var j=0; j< brands.length; j++){
							$("#productTable div." + colors[i] + " p#" + brands[j] +".available").parent().show();
					}
				}
			}

			else if(brands.length == 0 && colors.length == 0){

				$("#productTable div p.available").parent().show();
			}
		}//end of else
	}// end of displayDiv()

$(document).ready(function(){

	$("#all").prop("checked", "true");
	$("#available").click(function(){
		if($(this).prop("checked") == true){
			$("#all").prop("checked", false);
			$("#productTable div p.available").parent().hide();
		
		}
		else{
			$("#productTable div p.available").parent().show();
			$("#all").prop("checked", "true");
		}
		displayProducts();
	});

	$("#all").click(function(){
		$("#productTable div").show();
		$(".products ul li input").prop("checked", false);
		$(".brandsList li input").prop("checked", false);
		$(".colorsDiv ul li input").prop("checked", false);
		$("#available").prop("checked", false);
		$("#all").prop("checked", true);

		colors = [];
		brands = [];
	});
	
	$(".brandsList li input").click(function(){
		$("#all").prop("checked", false);
		var elementId = $(this).attr("id");
		if($(this).prop("checked") == true){
			if(brands.indexOf($(this).attr("id")) < 0){
				brands.push($(this).attr("id"));
			}
		}
		else{
			if(brands.indexOf($(this).attr("id")) >= 0){
				brands = jQuery.grep(brands, function(value) {
  				return value != elementId;
				});
			}	
		} 
		displayProducts();
	});

	$(".colors li input").click(function(){
		$("#all").prop("checked", false);
		var elementId = $(this).attr("id");
		if($(this).prop("checked") == true){
			if(colors.indexOf($(this).attr("id")) < 0){
				colors.push($(this).attr("id"));
			}
		}
		else{
			if(colors.indexOf($(this).attr("id")) >= 0){
				colors = jQuery.grep(colors, function(value) {
  				return value != elementId;
				});
			}	
		}
		displayProducts();
	});

});