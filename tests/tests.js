// These aren't proper tests, more just code snippets used to verify that stuff was working

function itemFilterTest() {
	var itemFilter = require('../item-filter');
	var calc = require('../bnet-calc-interface');
	var buildInfo = calc('http://us.battle.net/d3/en/calculator/barbarian#chkdjP!bhjd!bYZZcZ');
	var filtered = itemFilter.allItemsForSkillList('barbarian', buildInfo.skills.active);
	console.log(filtered);
}

itemFilterTest();
