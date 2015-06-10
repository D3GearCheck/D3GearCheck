var itemFilter = require('./item-filter');

// This should probably be a class you can instantiate, but it's 9am and I couldn't be bothered
var Loadout = {
	classItems:{},
	skillItems:{},
	setItems:{},
	equipment:{},
	updateForSkills: function(className, skillList) {
		this.classItems = itemFilter.allItemsForClass(className);
		this.skillItems = itemFilter.allItemsForSkillList(className, skillList);
		this.setItems = itemFilter.setItemsForClass(this.classItems, skillList);
		// Build the equipment list
		this.assignSlots();
	},
	itemListForSlot: function(slot) {
		var itemList = [];
		// Quick and dirty, sort by tier
		itemList = itemList.concat(this.skillItems[slot]);
		itemList = itemList.concat(this.skillItems[slot]);
		itemList = itemList.concat(this.classItems[slot]);
		return itemList;
	},
	assignSlots: function() {
		this.equipment = {};
		var leastConstrained, slot, setSlot, skillSlot, classSlot, assignment;
		while (true) {
			leastConstrained = {slot:null, conflicts:10000};
			for (slot in this.setItems) {
				// Don't assign a slot that already has something
				if (slot in this.equipment) {
					continue;
				}
				setSlot = this.setItems[slot];
				skillSlot = this.skillItems[slot];
				if (setSlot && setSlot.length > 0) {
					if (skillSlot && skillSlot.length > 0) {
						if (skillSlot.length < leastConstrained.conflicts) {
							leastConstrained.slot = slot;
							leastConstrained.conflicts = skillSlot.length;
						}
					} else {
						leastConstrained.slot = slot;
						leastConstrained.conflicts = 0;
					}
				}
			}

			// Super hack, break out if it continued through everything (exhausted all set items)
			if (leastConstrained.conflicts === 10000) {
				break;
			} else {
				// Assign the slot
				slot = leastConstrained.slot;
				setSlot = this.setItems[slot];
				// Pick at random from any options
				assignment = setSlot[Math.floor(Math.random() * setSlot.length)];
				this.equipment[slot] = assignment;
			}
		}

		// Do the same thing for skill items
		while (true) {
			leastConstrained = {slot:null, conflicts:10000};
			for (slot in this.skillItems) {
				// Don't assign a slot that already has something
				if (slot in this.equipment) {
					continue;
				}
				skillSlot = this.skillItems[slot];
				classSlot = this.classItems[slot];
				if (skillSlot && skillSlot.length > 0) {
					if (classSlot && classSlot.length > 0) {
						if (classSlot.length < leastConstrained.conflicts) {
							leastConstrained.slot = slot;
							leastConstrained.conflicts = skillSlot.length;
						}
					} else {
						leastConstrained.slot = slot;
						leastConstrained.conflicts = 0;
					}
				}
			}

			// Super hack, break out if it continued through everything (exhausted all skill items)
			if (leastConstrained.conflicts === 10000) {
				break;
			} else {
				// Assign the slot
				slot = leastConstrained.slot;
				skillSlot = this.skillItems[slot];
				// Pick at random from any options
				assignment = skillSlot[Math.floor(Math.random() * skillSlot.length)];
				this.equipment[slot] = assignment;
			}
		}

		// One last loop, filling out the rest of the slots with random non-specific class items
		for (slot in this.classItems) {
			if (slot in this.equipment) {
				continue;
			}
			// Assign the slot
			classSlot = this.classItems[slot];
			// Pick at random from any options
			assignment = classSlot[Math.floor(Math.random() * classSlot.length)];
			this.equipment[slot] = assignment;
		}
	}
};

module.exports = Loadout;
