
var coolColorId = function(){
	var storeClassName = document.getElementById("cool").className;

	if (storeClassName == "cool") {
		document.getElementById("cool").className = 'cool red';
	}else{
		document.getElementById("cool").className = 'cool';
	}
}

var sayMyName = function(name){
	alert ("My name is " + name);
}

var car = {
		make: "Honda",
		origin: "Japan",
		build: "1949",
		isTurnOn: "False",
		seat: [
			'seat 1',
			'seat 2',
			'seat 3',
			'seat 4'
		],
		turnOn: function(){
			this.isTurnOn = "True";
		},
		fly : function(){
			alert("car cant not fly dude");
		}
	};
	var lady = {
		genere: "busty",
		age: "24",
		hair: "black",
		status: "virgin",
		letsFuckHer: function(doIt){
			console.log("Should we do her? - " + doIt);
			if(doIt == "yes"){
				this.status = "not virgin";
			}else{
				this.status = "she is still virgin";
			}
		}
	}