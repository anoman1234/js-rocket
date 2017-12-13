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
		}, 1000);

	}else if(state == 3){
	
	}
}
