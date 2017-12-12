var timer = null;
var changeNumber = 10;

var changeState = function(state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);

	if(state == 2){
		timer = setInterval(function(){
			document.getElementById('countDown').innerHTML = '' + 8;
			changeNumber--;
			if (changeNumber == 0) {
				changeState(3);
			}
		}, 1000);

	}
}