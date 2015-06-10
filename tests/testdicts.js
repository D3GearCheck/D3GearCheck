// These aren't proper tests, more just code snippets used to verify that stuff was working

function itemFilterTest() {
	var itemFilter = require('./item-filter');
	var calc = require('./bnet-calc-interface');
	console.log("reached first point");
	var skills = calc('http://us.battle.net/d3/en/calculator/barbarian#chkdjP!bhjd!bYZZcZ');
	//var filtered = itemFilter.allItemsForSkillList('barbarian', skills.active);
	console.log("reached this point");
	console.log(skills);
	var classItems = itemFilter.allItemsForClass('Barbarian');
	//var setItems = itemFilter.setItemsForClass(classItems, skills.active);
	console.log(classItems);
}

itemFilterTest();
