//case increase + case decrease with merging
document.getElementById("caseIncrease").addEventListener("click", function () {
	handleProductChange(true);
})


document.getElementById("caseDecrease").addEventListener("click",function(){
	handleProductChange(false);
})


function handleProductChange(isIncrease){
	const caseInput = document.getElementById("caseInput");
	const caseCount = parseInt(caseInput.value);
	let caseNewCount = caseCount;
	if (isIncrease == true){
		caseNewCount = caseCount + 1;
	}
	if (isIncrease == false && caseCount > 0) {
		caseNewCount = caseCount - 1;
	}
	caseInput.value = caseNewCount;
	const caseTotal = document.getElementById("caseTotal");
	caseTotal.innerText = caseNewCount * 59;
}
