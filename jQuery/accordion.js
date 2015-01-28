$(document).ready(function(){

	if(sessionStorage.getItem("itemName")){
		$('#'+sessionStorage.getItem("itemName")).parent().css("background-color", "yellow");
		sessionStorage.removeItem("itemName");
	}
	$("#accordion").accordion(
		{active:false, collapsible:true});
	$("#accordion").accordion("option", "heightStyle", "fill");
	
	$('a').click(function(){
		sessionStorage.setItem("itemName",$(this).attr('id'));
	});

});