/* var footballClub = {
	name: "Manchester United",
	manager: "Ole Gunnar Solskjaer",
	pltitles: 20
};
var myPerson = {
	name: "Alex",
	age: 23,
	mylocation: "Manchester"
};
alert(footballClub.name);
console.log(footballClub.manager); */

var x = squareNumber(5);
function squareNumber(n1) {
	return n1 ** 2;
}
// document.writeln(x);
// console.log(x);

var y = sumThree(1,2,3);
function sumThree(n1,n2,n3) {
	return n1 + n2 + n3;
}
// document.writeln(y);
var person = {
	name: "Alex",
	age: 23,
	occupation: "Top Lad"
};
function printPerson() {
	console.log(person.name + " " + person.age + " " + person.occupation);
}
printPerson();

function incrementUp() {
  person.age++
}

function incrementDown() {
  person.age--
}

function createPerson() {
  person.name = document.getElementById("personName").value;
  person.age = document.getElementById("personAge").value;
  person.occupation = document.getElementById("personOccupation").value;
  console.log(person.name + " " + person.age + " " + person.occupation);
}

function ageCheck() {
	if (person.age >= 20 && person.age <= 40) {
		return console.log('true');
	}
	else {
		return console.log('false');
	}
}

function iterateten() {
	for(var i = 1; i <= 10; i++) {
		if (i%2 == 0) {
			console.log(i);
		}
	}
}

// iterateten();

var iterationthree = {
	maxNum: 0,
	wordOne: "",
	wordTwo: ""
};

function fizzBuzz() {
	maxNum = document.getElementById("maxIter").value;
	wordOne = document.getElementById("firstWord").value;
	wordTwo = document.getElementById("secondWord").value;
	for (var i = 1; i <= maxNum; i++) {
		if (i%3 == 0 && i%5 == 0) {
			console.log(wordOne + wordTwo);
		}
		else if (i%3 == 0) {
			console.log(wordOne);
		}
		else if (i%5 == 0) {
			console.log(wordTwo);
		}
		else {
			console.log(i);
		}
	}
}

// fizzBuzz();

// var myString = " He said \"My name is Elliott\" ";
// console.log(myString);

// var upper = myString.toUpperCase();
// console.log(upper);

// var myNum = 55;
// console.log(upper + myNum);

// var myArray = ['banana','apple','orange'];
// myArray.push('pear');
// console.log(myArray);
// myArray.splice(3);
// console.log(myArray);

var myNum = 0;

function iterFour() {
	myNum = Number(document.getElementById("myNumber").value);
	while (myNum != 1) {
		if (myNum%3 == 0) {
			newNum = myNum / 3;
			console.log(myNum + '/3 = ' + newNum);
			myNum = newNum;
		}
		else if (myNum%3 != 0) {
			newNum = myNum + 1;
			console.log(myNum + ' + 1 = ' + newNum);
			myNum = newNum;
		}
	}
}

var myString = "";

function triple() {
	var tripleCounter = 0;
	myString = document.getElementById("myString").value;
	for (var i = 0; i <= myString.length - 3; i++) {
		if (myString.charAt(i) == myString.charAt(i+1) && myString.charAt(i) == myString.charAt(i+2)) {
			tripleCounter += 1;
		}
		else {
			continue;
		}
	}
	console.log(tripleCounter);
}

var idNum = 1;

function createPara() {
	var para = document.createElement("p");
	para.setAttribute("id", "p" + idNum++);
	document.getElementById("createParagraph").appendChild(para);
}

function addText() {
	var para = document.createElement("p");
	para.setAttribute("id", "p" + idNum++);
	var node = document.createTextNode(document.getElementById("myText").value);
	para.appendChild(node);
	var element = document.getElementById("createParagraph");
	element.appendChild(para);
}

function deletePara() {
	var parent = document.getElementById("createParagraph");
	var child = document.getElementById("p" + --idNum);
	parent.removeChild(child);
}

var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'
request.send();

request.onload = function() {
	var requestData = request.response;
	console.log(requestData);
	for (var key in requestData) {
		if (key == 'members') {
			continue;
		}
		else {
			var myH2 = document.createElement('h2');
			myH2.innerHTML = key + ": " + requestData[key];
			containerone.appendChild(myH2);
		}
	}
	for (var key in requestData.members) {
		for (var item in requestData.members[key]) {
			var myH3 = document.createElement('h3');
			myH3.innerHTML = item + ": " + requestData.members[key][item];
			containerone.appendChild(myH3);
		}
	}
}
































