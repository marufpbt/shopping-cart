//case increase + case decrease with merging
document.getElementById("caseIncrease").addEventListener("click", function () {
	handleProductChange('case', true);
})


document.getElementById("caseDecrease").addEventListener("click", function () {
	handleProductChange('case', false);
})

//phone increase + phone decrease with merging
document.getElementById("phoneIncrease").addEventListener("click", function () {
	handleProductChange('phone', true);
})


document.getElementById("phoneDecrease").addEventListener("click", function () {
	handleProductChange('phone', false);
})

function handleProductChange(product, isIncrease) {
	const productInput = document.getElementById(product + 'Input');
	const productCount = parseInt(productInput.value);
	let productNewCount = productCount;
	if (isIncrease == true) {
		productNewCount = productCount + 1;
	}
	if (isIncrease == false && productCount > 0) {
		productNewCount = productCount - 1;
	}
	productInput.value = productNewCount;
	productTotal = 0;
	if (product == 'phone') {
		productTotal = productNewCount * 1229;
	}
	if (product == 'case') {
		productTotal = productNewCount * 59;
	}
	document.getElementById(product + 'Total').innerText = productTotal;

	calculateTotal();

}


function calculateTotal(){
	const caseInput = document.getElementById("caseInput");
	const caseCount = parseInt(caseInput.value);

	const phoneInput = document.getElementById("phoneInput");
	const phoneCount = parseInt(phoneInput.value);

	const subTotal = caseCount * 59 + phoneCount * 1229;
	document.getElementById("subTotal").innerText = subTotal;

	const tax = Math.round(subTotal * .1);
	const taxInput = document.getElementById("taxInput");
	taxInput.innerText = tax;

	const grandTotal = subTotal + tax;
	const grandTotalInput = document.getElementById("grandTotal");
	grandTotalInput.innerText = grandTotal;

}
