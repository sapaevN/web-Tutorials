'use strict'
const btn = document.querySelector('button.btn');
btn.addEventListener('click',changeBgColor);
function changeBgColor(){
	document.querySelector('body').style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
	console.log(`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`)
}
