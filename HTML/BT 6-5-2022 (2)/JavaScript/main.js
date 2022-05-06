function send(){
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var age = arr[1].value;
    var address = arr[2].value;
    var check1 = arr[5].checked;
    var check2 = arr[6].checked;
    var check3 = arr[7].checked;
    var gender = "";
    var favorite = "";
    if(arr[3].checked){
        gender = "Male";
    }else{
        gender = "Female";
    }
    for(var i=5; i<=7; i++){ // Vòng lập chọn arr bằng 5 và nhỏ hơn hoặc bằng 7
        if(arr[i].checked){
            favorite = favorite + arr[i].value + " ";
        }
    }
    if(name == "" || age == "" || address == ""){
        alert("please fill all fields");
        return;
    }
    if(isNaN(age)){//nếu không phải là số
        alert("age must be a number");
        return;
    }
	
	if(age >= 18){
		// để trống
	}else{
		alert("Must be on 18!")
		return;
	}
	
    if(check1||check2||check3){
		// nếu 2 ô không chọn sẽ bị trả về Else (False)
    }else{
        alert("least one favorite must be checked");
        return;
    }
   var choice =  confirm('confirm your information\nName:'+name+"\nAge: "+age+"\nAddress: "+address+"\nGender "+gender+"\nFavorite: "+favorite);
    if(choice == 1){
        alert('information sent');
		closed()
    }
}
function resetForm(){
    document.getElementsByTagName('form')[0].reset();
}