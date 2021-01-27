
//phone section
	//addPlusBtn
	var count = 1;
	const addPlusBtn = document.getElementById("addPlusBtn");
	addPlusBtn.addEventListener("click", function () {
		count++;
		const spinnerText = document.getElementById("spinnerText");
		spinnerText.value = count;
		const qtyPrice = document.getElementById("qtyPrice").innerText;
		parseFloat(qtyPrice);
		const qtyPriceNumber = document.getElementById("qtyPrice").innerText = count * 1219;

	})
	//addMinusBtn
	const addMinusBtn = document.getElementById("addMinusBtn");
	addMinusBtn.addEventListener("click", function () {
		count--;
		const spinnerText = document.getElementById("spinnerText");
		spinnerText.value = count;
		const qtyPrice = document.getElementById("qtyPrice").innerText;
		parseFloat(qtyPrice);
		const qtyPriceNumber = document.getElementById("qtyPrice").innerText = count * 1219;

	})

