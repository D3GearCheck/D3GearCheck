
var Screens = {
    ENTER_CALC_URL : 0,
    SKILLS : 1
};

var slotMap = {
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
    this.character = {

    };

    this.currScreen = Screens.ENTER_CALC_URL;
};


client.start = function() {

}

client.displaySlotItems = function(slotId) {
    this.showLoadingScreen();
    this.clearItemList();

    var slotNames = [];
    switch (slotId) {
        case Slots.HEAD:
            slotNames = slotMap["head"];
            break;

        case Slots.HANDS:
            slotNames = slotMap["hands"];
            break;
        
        case Slots.WRISTS:
            slotNames = slotMap["wrists"];
            break;

        case Slots.NECK:
            slotNames = slotMap["neck"];
            break;

        case Slots.SHOULDERS:
            slotNames = slotMap["shoulders"];
            break;

        case Slots.FEET:
            slotNames = slotMap["feet"];
            break;

        case Slots.RING:
            slotNames = slotMap["ring"];
            break;
    }

    // If slotNames is 0, we have an invalid slotId and shouldn't do
    // anything else, except complain.
    if (slotNames.length > 0) {

    }
    else
    {
        console.warn("Invalid slot id given: " + slotId);
    }
};

client.strToSlug = function(str) {
    return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

client.displayItemList = function() {
    var items = this.itemFilter.allItemsForClass("Wizard");
    console.log(items);

    for (var slot in items) {
        for (var id in items[slot]) {
            var item = items[slot][id];
            var html = "<div class=\"item\"><a href=\"http://us.battle.net/d3/en/item/" + this.strToSlug(item.name) + "\">";
            html += "<img src=\"" + item["image"] + "\" style=\"max-height:64px;\"/> ";
            html += "<span href=\"/d3/en/item/" + item.name + "\" class=\"item_legendary\">" + item.name + "</span";
            html += "</a></div>";

            $("#item_list").append(html);    
        }
    }
}


client.addItemToDoll = function(item) {

}
/* Helper function called during each screen transition. */
client.hideAllScreens = function() {
    $(".client_screen").fadeOut();
};

client.loadSkillScreen = function() {
    this.hideAllScreens();
    $("#skill_screen").fadeIn();
    this.screen = Screens.SKILLS;

    // Loop through our active skills and add them to the skill bar.
    for (var slot in this.skills["active"]) {
        var s = this.skills["active"][slot];
        console.log(s);

        var html = "<div class=\"skill\"";
        var res = s.skill.tooltipParams.split("/");
        var tooltipUrl = "http://us.battle.net/d3/en/class/" + res[1] + "/active/" + s.skill.slug;
        html += "><a href=\"" + tooltipUrl + "\">";
        html += "<img src=\"" + baseIconUrl + "/" + s.skill.icon + ".png\"/>";
        html += "</a></div>";

        $("#skill_bar_active").append(html);

    }

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

    this.displayItemList();
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
        this.loadLoadingScreen();
        var calc = require("./bnet-calc-interface");
        
        this.skills = calc(calcUrl);
        console.log(this.skills);
        this.loadSkillScreen();
    }
}
