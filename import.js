var bnet= require('./bnet-interface');

var heroID;

var heroData;

// Sample
bnet.requestProfile("BlueOcarina#1474", function callback(data){
	// Temporary log to show the request is working
	console.log(data.battleTag);
	//for (var i = 0; i < data.heroes.length; i++) {
	//	console.log(data.heroes[i].name);
	//}
	
	
	heroID = data.heroes[0].id;
	
	console.log(heroID);
	
	bnet.requestHero("BlueOcarina#1474", heroID, function callback(data) {
		//Grab hero data
		heroData = data;
		console.log(heroData);
	});
});


