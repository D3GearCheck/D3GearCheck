var items = require('./data/legendary/');
var affixMap = require('./data/affixes/affix-map');
var util = require('./lib/util');

var itemSlotForClass = function(slot, className) {
	// Make sure we're using the class display name for checking against smart loot
	className = util.classDisplayName(className);

	var classItems = [];
	if (slot in items) {
		var itemList = items[slot];
		for (var i = itemList.length - 1; i >= 0; i--) {
			var item = itemList[i];
			if (item.smartLoot.indexOf(className) >= 0) {
				classItems.push(item);
			}
		}
	} else {
		console.warn(slot + ' not found in item list');
	}
	return classItems;
};

var affixesForSkill = function(skillName) {
	var skillAffixes = {};
	for (var affix in affixMap) {
		if (affixMap.hasOwnProperty(affix)) {
			affixData = affixMap[affix];
			// We could filter out the non/legendary affixes here
			// This would remove items with guaranteed affixes that are relevant
			// (Sometimes these are affixes that are normally not available in that slot)
			// if ('type' in affixData && affixData.type === 'legendary' && affixData)
			
			// Filter out items that don't apply to the skill
			if (affixData.text_en && affixData.text_en.indexOf(skillName) >= 0) {
				skillAffixes[affix] = affixData;
			}
		}
	}
	return skillAffixes;
};

var itemSlotForSkill = function(slot, className, skillName) {
	var classItems = itemSlotForClass(slot, className);
	var skillAffixes = affixesForSkill(skillName);
	var skillItems = [];
	for (var i = classItems.length - 1; i >= 0; i--) {
		var item = classItems[i];
		var itemCopy = null;
		for (var affix in skillAffixes) {
			if (skillAffixes.hasOwnProperty(affix)) {
				if (affix in item.primary) {
					// Deep copy if not already done
					itemCopy = itemCopy || JSON.parse(JSON.stringify(item));
					// TODO: something with tagging why the item is relevant
				} else if (affix in item.secondary) {
					itemCopy = itemCopy || JSON.parse(JSON.stringify(item));
				}
			}
		}
		if (itemCopy) {
			skillItems.push(itemCopy);
		}
	}
	return skillItems;
};

var itemFilter = {
	'itemSlotForClass':itemSlotForClass,
	'affixesForSkill':affixesForSkill,
	'itemSlotForSkill':itemSlotForSkill
};

module.exports = itemFilter;
