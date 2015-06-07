var classSkills = require('./skills');

var trimRight = function(a, b) {
	b = !b ? " \\s\u00A0" : (b + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "\\$1");
	return (a + "").replace(new RegExp("[" + b + "]+$", "g"), "");
};

var Hash = {
	base: "aZbYcXdWeVfUgThSiRjQkPlOmNnMoLpKqJrIsHtGuFvEwDxCyBzA0123456789+/",
	delimiter: "!",
	empty: ".",
	batch: function(d) {
		var b = [];
		for (var c = 0, a = d.length; c < a; c++) {
			b.push(Hash.encode(d[c]));
		}
		return trimRight(b.join(Hash.delimiter), Hash.delimiter);
	},
	encode: function(f, e) {
		var g = "", d = Hash.base, c = Hash.empty;
		for (var b = 0, a = f.length; b < a; b++) {
			if (f[b] !== null) {
				g += d.charAt(f[b]);
			} else {
				if (e) {
					g += c;
				}
			}
		}
		return trimRight(g, c);
	},
	decode: function(f) {
		var g = [], e = Hash.base, d = Hash.empty;
		for (var c = 0, a = f.length, b; c < a; c++) {
			b = f.charAt(c);
			b = (b === d) ? null : e.indexOf(b);
			g.push(b);
		}
		return g;
	}
};

var importBuild = function(className, hash) {
	var build = {
		"active": [],
		"passive": []
	};

	if (!hash || hash == '.') {
		return;
	}

	var hashes = hash.split(Hash.delimiter),
		skill, rune, combined,
		skills = classSkills[className].skills,
		traits = classSkills[className].traits,
		skillHashes = Hash.decode(hashes[0]),
		traitHashes = Hash.decode(hashes[1] || []),
		runeHashes = Hash.decode(hashes[2] || []),
		i = 0,
		l = 0;

	for (i = 0, l = skillHashes.length; i < l; i++) {
		// Create a skill in similar format to the character lookup
		skill = skills[skillHashes[i]];
		if (skill) {
			rune = skill.runes[runeHashes[i]];
		} else {
			rune = undefined;
		}
		combined = {
			"skill":skill,
			"rune":rune
		};
		build.active[i] = combined;
	}

	for (i = 0, l = traitHashes.length; i < l; i++) {
		build.passive[i] = {"skill":traits[traitHashes[i]]};
	}

	return build;
};

module.exports = {
	"importBuild": importBuild
};
