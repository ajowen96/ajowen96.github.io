var garage = [];

var lastCar;

var carClass = {
	id : 0,
	manufacturer : "",
	model : "",
	year : 0,
	faults : 0
}

var idTag = 1;
var idNum = 1;

function incrementId() {
	return idNum++;
}

function createCar() {
	car = Object.create(carClass);
	car.id = incrementId();
	car.manufacturer = document.getElementById("manufacturer").value;
	car.model = document.getElementById("model").value;
	car.year = document.getElementById("year").value;
	car.faults = document.getElementById("faults").value;
	console.log(car);
	var myH2 = document.createElement('h2');
	myH2.innerHTML = "Id: " + car.id + "<br>" + "Manufacturer: " + car.manufacturer + "<br>" + "Model: " + car.model + "<br>" + "Year: " + car.year + "<br>" + "Faults: " + car.faults;
	myH2.setAttribute("id", "c" + idTag++);
	container.appendChild(myH2);
	lastCar = car;
}

function checkIn() {
	if (lastCar != garage[garage.length-1]) {
		garage.push(lastCar);
		console.log(garage);
	}
}

function viewGarage() {
	for(var key in garage){
		for(var item in garage[key]){
			console.log(garage[key][item]);
			var myH2 = document.createElement('h2');
			myH2.innerHTML = item + ": " + garage[key][item];
			container.appendChild(myH2);
		}
	}
}

function searchCar() {
	search = document.getElementById("search").value;
	for (var key in garage) {
		// for (var item in garage[key]) {
			if (garage[key].id == search){
				console.log(garage[key]);
			}
		// }
	}
}

// function checkOut() {
	// idSearch = document.getElementById("idSearch").value;
	// console.log(car.id);
	// if (car.id == idSearch) {
		// var parent = document.getElementById("container");
		// var child = document.getElementById("c" + idSearch);
		// parent.removeChild(child);
	// }
// }