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

//phone increase + phone decrease with merging
document.getElementById("phoneIncrease").addEventListener("click", function () {
	handlePhoneChange(true);
})


document.getElementById("phoneDecrease").addEventListener("click",function(){
	handlePhoneChange(false);
})


function handlePhoneChange(isIncrease){
	const phoneInput = document.getElementById("phoneInput");
	const phoneCount = parseInt(phoneInput.value);
	let phoneNewCount = phoneCount;
	if (isIncrease == true){
		phoneNewCount = phoneCount + 1;
	}
	if (isIncrease == false && phoneCount > 0) {
		phoneNewCount = phoneCount - 1;
	}
	phoneInput.value = phoneNewCount;
	const phoneTotal = document.getElementById("phoneTotal");
	phoneTotal.innerText = phoneNewCount * 1229;
}

