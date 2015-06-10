
var Screens = {
    ENTER_CALC_URL : 0,
    SKILLS : 1
};



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
        $("#skill_bar").append("<div class=\"skill\">AA</div>");

    }

    for (var slot in this.skills["passive"]) {
        var s = this.skills["passive"][slot];
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
