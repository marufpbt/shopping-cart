//case increase
document.getElementById("caseIncrease").addEventListener("click", function () {
	const caseInput = document.getElementById("caseInput");
	const caseCount = parseInt(caseInput.value);
	const caseNewCount = caseCount + 1;
	caseInput.value = caseNewCount;
	const caseTotal = document.getElementById("caseTotal");
	caseTotal.innerHTML = caseNewCount * 59;
})


//case decrease
document.getElementById("caseDecrease").addEventListener("click",function(){
	const caseInput = document.getElementById("caseInput");
	const caseCount = parseInt(caseInput.value);
	const caseNewCount = caseCount - 1;
	caseInput.value = caseNewCount;
	const caseTotal = document.getElementById("caseTotal");
	caseTotal.innerHTML = caseNewCount * 59;
})
