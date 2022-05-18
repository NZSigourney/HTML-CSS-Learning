// JavaScript Document

function agesend(){
	var arr = document.getElementsByTagName("input")
	var ages = arr[0].value;
	
	if(ages >= 18){
		alert("Well You're 18+!")
	}else{
		alert("Well You are not 18+, Closed!")
		close()
	}
}