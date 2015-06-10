
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
    this.character = {

    };

    this.currScreen = Screens.ENTER_CALC_URL;
};


client.start = function() {

}

client.displaySlotItems = function(slotId) {
    this.displayItemList();

    switch (slotId) {
        case Slots.HEAD:

            break;
        case Slots.HANDS:
        
            break;
        
        case Slots.WRISTS:
            break;

        case Slots.NECK:
            break;

        case Slots.SHOULDERS:
            break;

        case Slots.FEET:
            break;

        case Slots.RING:
            break;


    }
};

client.strToSlug = function(str) {
    return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

client.displayItemList = function() {
    console.log("AAAA");
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
        var desc = s.skill.description;
        //desc = desc.replace("'", "\'");
        desc = desc.replace("\"", "'");
        var html = "<div class=\"skill\"";
        html += " data-html=\"true\" data-placement=\"top\" ";
        html += " title=\"" + s.skill.name + "\" ";
        //html += " data-content=\"" + desc + "\"";
        html += ">";
        html += "<img src=\"" + baseIconUrl + "/" + s.skill.icon + ".png\"/>";
        html += "</div>";

        $("#skill_bar_active").append(html);

    }

    for (var slot in this.skills["passive"]) {
        var s = this.skills["passive"][slot];
        var html = "<div class=\"skill\"";
        html += " data-html=\"true\" data-placement=\"top\" ";
        html += " title=\"" + s.skill.name + "\" ";
        //html += " data-content=\"" + desc + "\"";
        html += ">";
        html += "<img src=\"" + baseIconUrl + "/" + s.skill.icon + ".png\"/>";
        html += "</div>";

        $("#skill_bar_passive").append(html);
    }

    $(".skill").popover({html : true, trigger : "hover"});
    this.displayItemList();
};

client.loadCalcUrlScreen = function() {
    this.hideAllScreens();
    $("#calc_url_screen").fadeIn();

};

client.loadLoadingScreen = function() {
    this.hideAllScreens();
    $("#loader").fadeIn();
};

client.fetchSkills = function() {
    console.log("Fetch skills");
    var calcUrl = $("#calc_url").val();
    if (calcUrl.length == 0) {
        alert("No URL entered.");
    }
    else
    {
        var calc = require("./bnet-calc-interface");
        this.loadLoadingScreen();
        this.skills = calc(calcUrl);
        console.log(this.skills);
        this.loadSkillScreen();
    }
}
