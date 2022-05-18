// JavaScript Document

function agesend(){
	var arr = document.getElementsByTagName("input")
	var love = arr[0].value;
	
	switch(love){
		case "có":
			alert("hehe!");
			return;
		case "không":
			alert("so sad :(");
			return;
		case "":
			alert("Please Fill the Gaps!")
			return;
	}
}