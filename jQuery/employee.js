var sqlArray = new Array();
var rubyArray = new Array();
var jQueryArray = new Array();

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

	$("#employeeList li").draggable({
		helper: "clone",
		connectToSortable: "#sqlList, #rubyList, #jQueryList"

	});


	/*$("#sql").droppable({
		accept: ".employeeItem",
		drop: function(event, ui){
			var droppable = $(this);
   			var draggable = ui.draggable;
			$("#sql ul").append('<li>' + draggable.html() + '</li>');


		}

	});*/
	$("#sqlList").sortable({
		connectWith: "#sqlList",
		containment: "parent",
		beforeStop: function(event, ui){
			itemCreated = ui.item;
			$(itemCreated).removeClass('employeeItem ui-draggable ui-draggable-handle').addClass("listItem");
			
			$(itemCreated).attr('id',ui.item.closest('li').html());
		
			var item = ui.item.closest('li').html();
			if(!(sqlArray.indexOf(item)>=0)){

				$("#sqlTable").append("<span id =" + item + "><li><label>"+ item +"</label><textarea cols = '20' rows = '4'></textarea></li></span>");
				$('#'+ itemCreated.attr('id')).append("<a href = '#' id='link'>x</a>");
				sqlArray.push(item);
			}
			else{
				$(itemCreated).remove();
			}

			$("#sqlList li #link").click(function(){
				
				var elementId = $(this).parent().attr('id');
				$(this).parent().remove();
				$("#sqlTable #" + elementId).remove();
				sqlArray = jQuery.grep(sqlArray, function(value){
					return value != elementId;

				});

			});

			$(".listItem").mouseenter(function(){
				
				$(this).find("#link").show();
			});
			$(".listItem").mouseleave(function(){
			
				$(this).find("#link").hide();
			});	

		}
	});
	$("#rubyList").sortable({
		connectWith: "#rubyList",
		containment: "parent",
		beforeStop: function(event, ui){
			itemCreated = ui.item;
			$(itemCreated).removeClass('employeeItem ui-draggable ui-draggable-handle').addClass("listItem");
			$(itemCreated).attr('id',ui.item.closest('li').html());
			var item = ui.item.closest('li').html();
			if(!(rubyArray.indexOf(item)>=0)){
				$("#rubyTable").append("<span id=" + item + "><li><label>"+ item +"</label><textarea cols = '20' rows = '4'></textarea></li></span>");
				$('#'+ itemCreated.attr('id')).append("<a href = '#' id='link'>x</a>");
				rubyArray.push(item);
			}
			else{
				$(itemCreated).remove();
			}

			$("#rubyList li #link").click(function(){
				
				var elementId = $(this).parent().attr('id');
				$(this).parent().remove();
				$("#rubyTable #" + elementId).remove();
				rubyArray = jQuery.grep(rubyArray, function(value){
					return value != elementId;

				});

			});

			$(".listItem").mouseenter(function(){
		
				$(this).find("#link").show();
			});
			$(".listItem").mouseleave(function(){
				$(this).find("#link").hide();
			});	

		}
	});

	$("#jQueryList").sortable({
		connectWith: "#jQueryList",
		containment: "parent",
		beforeStop: function(event, ui){
			itemCreated = ui.item;
			$(itemCreated).removeClass('employeeItem ui-draggable ui-draggable-handle').addClass("listItem");
			$(itemCreated).attr('id',ui.item.closest('li').html());
			
			var item = ui.item.closest('li').html();
			if(!(jQueryArray.indexOf(item)>=0)){
				$("#jQueryTable").append("<span id = " + item + "><li><label>"+ item +"</label><textarea cols = '20' rows = '4'></textarea></li></span>");
				$('#'+ itemCreated.attr('id')).append("<a href = '#' id='link'>x</a>");
				jQueryArray.push(item);
			}
			else{
				$(itemCreated).remove();
			}

			$("#jQueryList li #link").click(function(){
				
				var elementId = $(this).parent().attr('id');
				$(this).parent().remove();
				$("#jQueryTable #" + elementId).remove();
				jQueryArray = jQuery.grep(jQueryArray, function(value){
					return value != elementId;

				});

			});

			$(".listItem").mouseenter(function(){
	
				$(this).find("#link").show();
			});
			$(".listItem").mouseleave(function(){
		
				$(this).find("#link").hide();
			});	

		}

	});
	
	
});