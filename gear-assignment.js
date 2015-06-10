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
	},
	itemListForSlot: function(slot) {
		var itemList = [];
		// Quick and dirty, sort by tier
		itemList = itemList.concat(this.skillItems[slot]);
		itemList = itemList.concat(this.skillItems[slot]);
		itemList = itemList.concat(this.classItems[slot]);
		return itemList;
	}
};

module.exports = Loadout;
