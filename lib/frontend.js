
var Screens = {
    ENTER_CALC_URL : 0,
    SKILLS : 1
};

var baseIconUrl = "//media.blizzard.com/d3/icons/skills/42/";
var basePaperdollUrl = "//us.battle.net/d3/static/images/profile/hero/paperdoll/";


var client = new function() {
    this.skills = null;
    this.character = {

    };

    this.currScreen = Screens.ENTER_CALC_URL;

    this.start = function() {

    }




};

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
        var html = "<div class=\"skill\">";
        html += "<img src=\"" + baseIconUrl + "/" + s.skill.icon + ".png\"/>";
        html += "</div>";

        $("#skill_bar_active").append(html);

    }

    for (var slot in this.skills["passive"]) {
        var s = this.skills["passive"][slot];
        var html = "<div class=\"skill\">";
        html += "<img src=\"" + baseIconUrl + "/" + s.skill.icon + ".png\"/>";
        html += "</div>";

        $("#skill_bar_passive").append(html);
    }
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
