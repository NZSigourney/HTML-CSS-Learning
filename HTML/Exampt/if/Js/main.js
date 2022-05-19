// JavaScript Document

function agesend(){
	var arr = document.getElementsByTagName("input")
	var ages = arr[0].value;
	
	if(ages >= 1){ /* Nếu tuổi >= 1 sẽ in ra "Well You're 18*!"*/
		alert("Well You're 18+!")
	}
}