$(document).ready(function(){

	$("#accordion").accordion(
		{active:false, collapsible:true});
	$("#nestedAccordion").accordion(
		{active:false, collapsible:true});
	$("#accordion").accordion("option", "heightStyle", "content");
	$("#nestedAccordion").accordion("option", "heightStyle", "content");

	if(sessionStorage.getItem("itemName")){
		$('#'+sessionStorage.getItem("itemName")).parent().css("background-color", "yellow");
		sessionStorage.removeItem("itemName");
	}

	if($.isNumeric(sessionStorage.getItem("accordianSection"))){
		$("#accordion").accordion("option", "active", parseInt(sessionStorage.getItem("accordianSection")));
		sessionStorage.removeItem("accordianSection");
	}
	else if(sessionStorage.getItem("accordianSection") == "x"){
		$("#accordion").accordion("option", "active", 0);
		$("#nestedAccordion").accordion("option", "active", 0);
		sessionStorage.removeItem("accordianSection");
	}
	

	$('a').click(function(){
		sessionStorage.setItem("itemName",$(this).attr('id'));
		sessionStorage.setItem("accordianSection",$(this).parent().parent().parent().attr('id'));
	});


});