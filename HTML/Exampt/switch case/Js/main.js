// JavaScript Document

function send(){
	var arr = document.getElementsByTagName("input");
	var love = arr[0].value;
	
	switch(love){
		case "yes":
			alert("hehe!");
			return;
		case "no":
			alert("so sad :(");
			return;
		case "":
			alert("Please Fill the Gaps!");
			return;
		default:
			alert("Must to yes or no!");
			return;
	}
}