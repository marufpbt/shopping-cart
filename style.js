	//add plus


function addPlusMinus(id, countPlusMinus){
	var count = 1;
	var getSpinnerText = document.getElementById("getSpinnerText");
	document.getElementById(id).addEventListener("click",function(){
		countPlusMinus;
		getSpinnerText.value = count;
	});

	//add minus
