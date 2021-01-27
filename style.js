	//add plus
	var count = 1;
	var getSpinnerText = document.getElementById("getSpinnerText");
	document.getElementById("addPlus").addEventListener("click",function(){
		count++;
		getSpinnerText.value = count;

	});


