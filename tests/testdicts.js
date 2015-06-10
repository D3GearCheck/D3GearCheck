// These aren't proper tests, more just code snippets used to verify that stuff was working

function itemFilterTest() {
	var itemFilter = require('./item-filter');
	var calc = require('./bnet-calc-interface');
	var buildInfo = calc('http://us.battle.net/d3/en/calculator/barbarian#chkdjP!bhjd!bYZZcZ');
	//var filtered = itemFilter.allItemsForSkillList('barbarian', skills.active);
	console.log(skills);
	var classItems = itemFilter.allItemsForClass('Barbarian');
	var skillItems = itemFilter.skillItemsForClass(classItems, buildInfo.skills.active);
	var setItems = itemFilter.setItemsForClass(classItems, buildInfo.skills.active);
	//console.log(classItems);
	console.log(skillItems);
	//console.log(setItems);
}

itemFilterTest();
