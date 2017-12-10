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
		}
	};
	var lady ={
		genere: "busty",
		age: "24",
		hair: "black",
		status: "virgin",
		letsFuckHer: function(doIt){
			console.log("Should we do her? - " + doIt);
			if(doIt == "yes"){
				this.status= "not virgin";
			}else{
				this.status "she is still virgin";
			}
		}
	}