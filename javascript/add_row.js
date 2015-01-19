
	var rows = 1;
	var rowCount=0;
	var deleteRowfromTable = function(rowId)
	{
		var row = document.getElementById(rowId);
    	row.parentNode.removeChild(row);
		rows--;
	}
	var addRow = function()
	{
		rowCount++;
		rows++;
		var table = document.getElementById('myTable');
		var row = table.insertRow(rows);
		row.id=rowCount;
		var cell1 = row.insertCell(0);
		cell1.id = 'cell1' + rowCount;
		var cell2 = row.insertCell(1);
		cell2.id = 'cell2' + rowCount;
		var cell3 = row.insertCell(2);
		cell3.id = 'cell3' + rowCount;

		var element1 = document.createElement('input');
		element1.type = 'text';
		element1.id = 'name'+rowCount;
		cell1.appendChild(element1);

		var element2 = document.createElement('input');
		element2.type = 'text';
		element2.id = 'email'+rowCount;
		cell2.appendChild(element2);

		var element3 = document.createElement('input');
		element3.type = "button";
		element3.class = "save";
		element3.id = "save"+rowCount;
		element3.value = "Save";
		element3.setAttribute("onclick","saveRow("+rowCount+")");
		cell3.appendChild(element3);

		var link1 = document.createElement('a');
		link1.href = "#";
		link1.id = "link1"+rowCount;
		link1.style.display = "none";
		link1.innerHTML = "Edit";
		link1.onclick = function(){
			editRow(rowCount);
		};
		cell3.appendChild(link1);

		var link2 = document.createElement('a');
		link2.href = "#";
		link2.id = "link2" + rowCount;
		link2.style.display = "none";
		link2.innerHTML = "/Delete";
		link2.onclick = function(){
			deleteRowfromTable(rowCount);
		};
		cell3.appendChild(link2);

		var element4 = document.createElement('input');
		element4.type = "button";
		element4.id = "update"+rowCount;
		element4.value = "Update";
		element4.style.display= "none";
		element4.onclick = function(){
			updateRow(rowCount);
		};
		element4.class = "update";
		cell3.appendChild(element4);

		document.getElementById('addButton').style.top = "20px";
		console.log("row created "+rowCount);

	};
	
	var saveRow = function(rowId)
	{
		rowId = String(rowId);
		console.log(rowId);
		var cell1 = document.getElementById('cell1'+rowId);
		var name = document.getElementById('name'+rowId);
		var nameText = name.value;
		console.log(cell1);
		console.log(nameText);
		console.log(name.id);
		cell1.removeChild(name);
		cell1.innerHTML = nameText;

		var cell2 = document.getElementById('cell2'+rowId);
		var email = document.getElementById('email'+rowId);
		var emailText = email.value;
		cell2.removeChild(email);
		cell2.innerHTML = emailText;

		document.getElementById('save'+rowId).style.display = "none";
		document.getElementById('link1'+rowId).style.display = "inline";
		document.getElementById('link2'+rowId).style.display = "inline";

	};
	var editRow = function(rowId)
	{
		var name = document.getElementById('cell1'+ rowId).innerHTML;
		var email = document.getElementById('cell2'+ rowId).innerHTML;

		var element1 = document.createElement("input");
		element1.type = "text";
		element1.id = "name"+ rowId;
		element1.value = name;

		var element2 = document.createElement("input");
		element2.type = "text";
		element2.id = "email" + rowId;
		element2.value = email;

		document.getElementById('cell1' + rowId).innerHTML='';
		document.getElementById('cell1' + rowId).appendChild(element1);

		document.getElementById('cell2' + rowId).innerHTML = '';
		document.getElementById('cell2' + rowId).appendChild(element2);

		document.getElementById('link1'+rowId).style.display = "none";
		document.getElementById('link2'+rowId).style.display = "none";
		document.getElementById('update' + rowId).style.display = "block"

	};
	var updateRow = function(rowId){
		
		var name = document.getElementById('name' + rowId);
		var email = document.getElementById('email' + rowId);
		var nameText = name.value;
		var emailText = email.value;

		document.getElementById('cell1'+rowId).removeChild(name);
		document.getElementById('cell2'+rowId).removeChild(email);

		document.getElementById('cell1' + rowId).innerHTML = nameText;
		document.getElementById('cell2' + rowId).innerHTML = emailText;

		document.getElementById('update'+rowId).style.display = "none";
		document.getElementById('link1'+ rowId).style.display = "inline";
		document.getElementById('link2'+ rowId).style.display = "inline";

	};