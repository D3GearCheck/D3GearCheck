var itemFilter = require('./item-filter');

var Loadout = {
	classItems:{},
	skillItems:{},
	setItems:{},
	updateForSkills: function(className, skillList) {
		this.classItems = itemFilter.allItemsForClass(className);
		this.skillItems = itemFilter.allItemsForSkillList(className, skillList);
		this.setItems = itemFilter.setItemsForClass(this.classItems, skillList);
		console.log(this);
	}
};

module.exports = Loadout;
