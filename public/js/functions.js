




// function alertHello(id) {
// 	alert("hello world! I am " + id);
// }


// function fillID(id) {
// 	document.getElementById("id").value = id;
// }


// Bug with chrome where pressing on too many edits will not actually check the box
function fillInfo(targetId) {

	var parent = $('#' + targetId);

	var id = parent.children('.id').text();
	var name = parent.children('.name').text();
	var color = parent.children('.color').text();
	var phone = parent.children('.phone').text();
	var gender = parent.children('.gender').text();
	var vehicle = parent.children('.vehicle').text();
	var number = parent.children('.number').text();

	console.log(name);

	document.getElementById("updateId").value = id;
	document.getElementById("updateName").value = name;
	document.getElementById("updateColor").value = color;
	document.getElementById("updatePhone").value = phone;
	document.getElementById("updateNumber").value = number;

	if (gender == "Male") {
		document.getElementById("updateMale").setAttribute("checked", "true");
	} 
	else if (gender == "Female") {
		document.getElementById("updateFemale").setAttribute("checked", "true");	
	} 
	
	if (vehicle == "Car") {
		$( "#updateCar" ).attr( "checked", true );
		$( "#updateBike" ).attr( "checked", false );
		console.log("Car check");
	} 
	if (vehicle == "Bike") {
		$( "#updateCar" ).attr( "checked", false );
		$( "#updateBike" ).attr( "checked", true );
		console.log("Bike Check");
	} 
	if (vehicle == "Bike,Car") {
		$( "#updateCar" ).attr( "checked", true );
		$( "#updateBike" ).attr( "checked", true );
		console.log("Bike Car check");
	} 
	if (vehicle == "") {
		$( "#updateCar" ).attr( "checked", false );
		$( "#updateBike" ).attr( "checked", false );
		console.log("car bike uncheck");
	}

	

}

