
var Screens = {
    ENTER_CALC_URL : 0,
    SKILLS : 1
};



var Slots = {
    HEAD : 0,
    SHOULDERS : 1,
    NECK : 2,
    CHEST : 3,
    HANDS : 4,
    WRIST : 5,
    WAIST : 6,
    RING : 7,
    LEGS : 8,
    PRIMARY : 9,
    SECONDARY : 10,
    FEET : 11
};

var baseIconUrl = "//media.blizzard.com/d3/icons/skills/42/";
var basePaperdollUrl = "//us.battle.net/d3/static/images/profile/hero/paperdoll/";


var client = new function() {
    this.itemFilter = require("./item-filter");
    this.skills = null;
    this.character = {};
    this.loadout = require("./gear-assignment");
    this.currScreen = Screens.ENTER_CALC_URL;
    this.slotToDollMap = {
        "helm" : "head",
        "shoulders" : "shoulders",
        "pants" : "legs",
        "onehand" : "primary",
        "twohand" : "primary",
        "ring" : "ring",
        "amulet" : "neck",
        "belt" : "waist",
        "chest" : "chest",
        "gloves" : "hands",
        "bracers" : "wrist",
        "boots" : "feet"
    };

    this.slotMap = {
    "head" : ["helm"],
    "shoulders" : ["shoulders"],
    "secondary" : ["shield","quiver","mojo"],
    "legs" : ["pants"],
    "primary" : ["onehand","twohand"],
    "ring" : ["ring"],
    "neck" : ["amulet"],
    "waist" : ["belt"],
    "chest" : ["chest"],
    "hands" : ["gloves"],
    "wrist" : ["bracers"],
    "feet" : ["boots"]
    };
};


client.start = function() {}

client.displaySlotItems = function(slotId) {
    this.showLoadingScreen();
    this.clearItemList();

    console.log("DISPLAY SLOT: " + slotId);
    var slotNames = [];
    switch (slotId) {
        case Slots.HEAD:
            slotNames = this.slotMap["head"];
            break;

        case Slots.HANDS:
            slotNames = this.slotMap["hands"];
            break;
        
        case Slots.WRIST:
            slotNames = this.slotMap["wrist"];
            break;

        case Slots.CHEST:
            console.log("DISPLAY CHEST");
            slotNames = this.slotMap["chest"];
            break;

        case Slots.NECK:
            slotNames = this.slotMap["neck"];
            break;

        case Slots.SHOULDERS:
            slotNames = this.slotMap["shoulders"];
            break;

        case Slots.WAIST:
            slotNames = this.slotMap["waist"];
            break;

        case Slots.LEGS:
            slotNames = this.slotMap["legs"];
            break;

        case Slots.FEET:
            slotNames = this.slotMap["feet"];
            break;

        case Slots.PRIMARY:
            slotNames = this.slotMap["primary"];
            break;

        case Slots.SECONDARY:
            slotNames = this.slotMap["secondary"];
            break;

        case Slots.RING:
            slotNames = this.slotMap["ring"];
            break;
    }

    // If slotNames is 0, we have an invalid slotId and shouldn't do
    // anything else, except complain.
    if (slotNames.length > 0) {
        var itemList = [];

        for (var name in slotNames) {
            var slotItems = this.loadout.itemListForSlot(slotNames[name]);
            itemList = itemList.concat(slotItems);
        }
        this.displayItemList(itemList);
        this.hideLoadingScreen();
    }
    else
    {
        console.warn("Invalid slot id given: " + slotId);
    }
};

client.strToSlug = function(str) {
    if (str !== undefined) {
        return str
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
    }
    else
    {
        return "";
    }
}

client.itemToHtml = function(item) {
    var html = "<img src=\"" + item["image"] + "\"/>";
    return html;
}

client.displayItemList = function(items) {

    for (var item in items) {
        var item = items[item];
        var html = "<div class=\"item\"><a href=\"http://us.battle.net/d3/en/item/" + this.strToSlug(item.name) + "\">";
        html += "<img src=\"" + item["image"] + "\" style=\"max-height:64px;\"/> ";
        html += "<span href=\"/d3/en/item/" + item.name + "\" class=\"item_legendary\">" + item.name + "</span";
        html += "</a></div>";

        $("#item_list").append(html);    
    }
}

client.insertItem = function(elementName, item) {
    var itemHtml = this.itemToHtml(item);
    $("#" + elementName).html(itemHtml);
}

client.addItemToDoll = function(slot, item) {
    switch (slot) {
        case "helm":
            this.insertItem("slot_head", item);
            break;

        case "gloves":
            this.insertItem("slot_hands", item);
            break;
        
        case "bracers":
            this.insertItem("slot_wrist", item);
            break;

        case "chest":
            this.insertItem("slot_chest", item);
            break;

        case "amulet":
            this.insertItem("slot_neck", item);
            break;

        case "shoulders":
            this.insertItem("slot_shoulders", item);
            break;

        case "belt":
            this.insertItem("slot_waist", item);
            break;

        case "legs":
            this.insertItem("slot_legs", item);
            break;

        case "feet":
            this.insertItem("slot_feet", item);
            break;

        case "onehand":
            this.insertItem("slot_primary", item);
            break;

        case "twohand":
            this.insertItem("slot_primary", item);
            break;

        case "ring":
            this.insertItem("slot_ring_left", item);
            break;

        case "boots":
            this.insertItem("slot_feet", item);
            break;

    }

}
/* Helper function called during each screen transition. */
client.hideAllScreens = function() {
    $(".client_screen").fadeOut();
};

client.loadSkillScreen = function() {
    //this.hideAllScreens();
    $("#skill_screen").fadeIn();
    this.screen = Screens.SKILLS;

    // Loop through our active skills and add them to the skill bar.
    $("#skill_bar_active").html("");
    for (var slot in this.skills["active"]) {
        var s = this.skills["active"][slot];
        //console.log(s);

        var html = "<div class=\"skill\"";
        var res = s.skill.tooltipParams.split("/");
        var tooltipUrl = "http://us.battle.net/d3/en/class/" + res[1] + "/active/" + s.skill.slug;
        html += "><a href=\"" + tooltipUrl + "\">";
        html += "<img src=\"" + baseIconUrl + "/" + s.skill.icon + ".png\"/>";
        html += "</a></div>";

        $("#skill_bar_active").append(html);

    }

    $("#skill_bar_passive").html("");
    for (var slot in this.skills["passive"]) {
        var s = this.skills["passive"][slot];
        var html = "<div class=\"skill\"";
                var res = s.skill.tooltipParams.split("/");
        var tooltipUrl = "http://us.battle.net/d3/en/class/" + res[1] + "/active/" + s.skill.slug;
        html += " data-html=\"true\" data-placement=\"top\" ";
        html += " title=\"" + s.skill.name + "\" ";
        html += "><a href=\"" + tooltipUrl + "\">";
        html += "<img src=\"" + baseIconUrl + "/" + s.skill.icon + ".png\"/>";
        html += "</a></div>";

        $("#skill_bar_passive").append(html);
    }

    this.loadout.updateForSkills("Barbarian", this.skills.active);

    for (var slot in this.loadout.equipment) {
        console.log("AAAAAAAAAA:");
        console.log(this.loadout.equipment[slot]);
        this.addItemToDoll(slot, this.loadout.equipment[slot]);
    }

};

client.clearItemList = function() {
    $("#item_list").html("");
}

client.loadCalcUrlScreen = function() {
    this.hideAllScreens();
    $("#calc_url_screen").fadeIn();

};

client.showLoadingScreen = function() {
    $("#loader").fadeIn();
}

client.hideLoadingScreen = function() {
    $("#loader").fadeOut();
}
client.loadLoadingScreen = function() {
    this.hideAllScreens();
    this.showLoadingScreen();
};

client.fetchSkills = function() {
    console.log("Fetch skills");
    var calcUrl = $("#calc_url").val();
    if (calcUrl.length == 0) {
        alert("No URL entered.");
    }
    else
    {
        this.showLoadingScreen();
        var calc = require("./bnet-calc-interface");
        
        var buildInfo = calc(calcUrl);
        this.skills = buildInfo.skills;
        this.className = buildInfo.className;
        console.log(this.skills);

        this.loadSkillScreen();
        this.hideLoadingScreen();
    }
}
