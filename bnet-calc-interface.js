var calc = require('./lib/blizzard/skill-calculator');

var skillsFromCalculator = function(calcURL) {
	var re = /.*calculator\/(.*)#(.*)/
	var matches = re.exec(calcURL);
	if (matches) {
		className = matches[1];
		hash = matches[2];
		skills = calc.importBuild(className, hash);
		return {"skills":skills, "className":className};
	} else {
		console.warn("Malformed Calculator URL: " + calcURL);
	}
}

module.exports = skillsFromCalculator;
