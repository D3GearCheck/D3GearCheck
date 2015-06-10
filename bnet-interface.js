// Relevant URLs
// http://us.battle.net/api/d3/profile/[BNet-Tag]/
// http://us.battle.net/api/d3/profile/[BNet-Tag]/hero/[Hero-ID]

// Wrap JQuery ajax module for node.js, we shouldn't need any other parts of JQuery
var $, dataFormat;
if (typeof window === 'undefined') {
	$ = {ajax: require('najax')};
	dataFormat = 'json';
} else {
	// Assume JQuery has already been imported in a browser and bring it down to module scope
	$ = window.$;
	dataFormat = 'jsonp';
}

// Make an asychronous call and pass the javascript object to the success callback upon completion
var requestJSON = function(requestURL, successCallback) {
	$.ajax({
		url: requestURL,
		contentType:"application/json", 
		dataType: dataFormat, 
		success: function(result) {
			if (typeof successCallback === 'function') {
				successCallback(result);
			}
		}
	});
};

// Request profile data from a battleTag
var requestProfile = function(battleTag, successCallback, region) {
	region = typeof region !== 'undefined' ? region : "us";
	battleTag = battleTag.replace('#', '-');
	var url = "http://" + region + ".battle.net/api/d3/profile/" + battleTag + "/";
	requestJSON(url, successCallback);
};

var requestHero = function(battleTag, heroID, successCallback, region) {
	region = typeof region !== 'undefined' ? region : "us";
	battleTag = battleTag.replace('#', '-');
	console.log(heroID);
	var url = "http://" + region + ".battle.net/api/d3/profile/" + battleTag + "/hero/" + heroID;
	console.log(url);
	requestJSON(url, successCallback);
};

var bnetInterface = {
	'requestProfile': requestProfile,
	'requestHero': requestHero
};

module.exports = bnetInterface;
