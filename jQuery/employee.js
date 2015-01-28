$(document).ready(function(){
	$('#accordion1').accordion({
		collapsible: true,
		active: false
	});
	$("#accordion2").accordion({
		active: false, collapsible: true
	});

	$("#accordion1").accordion("option", "heightStyle", "fill");
	$("#accordion2").accordion("option", "heightStyle", "fill");

});