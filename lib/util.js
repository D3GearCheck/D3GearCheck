var classMap = {
	'barbarian':'Barbarian',
	'crusader':'Crusader',
	'demon-hunter':'Demon Hunter',
	'monk':'Monk',
	'witch-doctor':'Witch Doctor',
	'wizard':'Wizard',
	'Barbarian':'Barbarian',
	'Crusader':'Crusader',
	'Demon Hunter':'Demon Hunter',
	'Monk':'Monk',
	'Witch Doctor':'Witch Doctor',
	'Wizard':'Wizard'
};

var classDisplayName = function(classId) {
	return classMap[classId];
};

var util = {
	'classDisplayName':classDisplayName
};

module.exports = util;
