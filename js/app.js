'use strict'
const btn = document.querySelector('button.btn');

btn.addEventListener('click',changeBgColor);
let index = 0
function changeBgColor(){
	const arr = ['orangered','red','blue','purple','green','yellow']

	document.querySelector('body').style.background = arr[index]
	index++
	if(index > arr.length-1){
		index = 0;
	}
}
