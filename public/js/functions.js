




// function alertHello(id) {
// 	alert("hello world! I am " + id);
// }


// function fillID(id) {
// 	document.getElementById("id").value = id;
// }


function fillInfo(targetId) {

	var parent = $('#' + targetId);

	var id = parent.children('.id').text();
	var name = parent.children('.name').text();
	var color = parent.children('.color').text();
	var phone = parent.children('.phone').text();
	var male = parent.children('.male').text();
	var birthday = parent.children('.birthday').text();


	// Unsure of how to transfer value over to Update table
	document.getElementById("updateId").value = id;
	document.getElementById("updateName").value = name;
	// document.getElementById("updateColor").value = color;
	document.getElementById("updatePhone").value = phone;
	// document.getElementById("updateGender").value = 1;
	// document.getElementById("updateBirthday").value = birthday;

}

