var timer = null;
var changeNumber = 3;

var changeState = function(state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);

	if(state == 2){
		timer = setInterval(function(){
			document.getElementById('countDown').innerHTML = changeNumber;
			changeNumber--;
			if (changeNumber < 0) {
				changeState(3);
			}
		}, 500);
	}else if(state == 3){
		var randomNumber = setInterval(function(){
			var randomNumberHolder = Math.round(Math.random()*10);
			console.log(randomNumberHolder);
			if(randomNumberHolder > 5){
				changeState(4);
			}else{
				changeState(5);
			}
		}, 2000);
	}
}
