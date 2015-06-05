var bnet= require('./bnet-interface');

// Sample
bnet.requestProfile("BlueOcarina#1474", function callback(data){
	// Temporary log to show the request is working
	console.log(data.battleTag);
});
