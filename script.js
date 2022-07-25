let inputElm = document.querySelector("#input")
let resultElm = document.querySelector("#result")
let buttonElm = document.querySelector("#button")

buttonElm.addEventListener('click', palindrome)


function palindrome() {
	let str = inputElm.value
	let re = /[^A-Za-z0-9]/g
	let lowercaseStr = str.toLowerCase().replace(re, '')
	let reverseStr = lowercaseStr.split('').reverse().join('')


	if(reverseStr===lowercaseStr) {
		resultElm.innerText = `"${str}" Is a palindrome`
	} else {
		resultElm.innerText = `"${str}" is not a palindrome.`
	}
	
}

