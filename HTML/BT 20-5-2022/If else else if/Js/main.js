// JavaScript Document

function agesend(){
	var arr = document.getElementsByTagName("input")
	var love = arr[0].value;
	
	if(love == "có" || love == "Có"){
		alert("hehe!");
	}else if(love == "không" || love == "Không"){
		alert("so sad :(");
	}else{
		alert("Please Fill the Gaps!")
	}
}