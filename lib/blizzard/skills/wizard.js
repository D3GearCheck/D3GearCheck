module.exports = {
  "skills" : [ {
    "requiredLevel" : 1,
    "orderIndex" : 0,
    "tooltipParams" : "skill/wizard/magic-missile",
    "categoryName" : "Primary",
    "categorySlug" : "primary",
    "icon" : "wizard_magicmissile",
    "name" : "Magic Missile",
    "slug" : "magic-missile",
    "runes" : [ {
      "requiredLevel" : 6,
      "name" : "Charged Blast",
      "tooltipParams" : "rune/magic-missile/a",
      "type" : "a",
      "description" : "<p>Increase the damage of Magic Missile to <span class=\"d3-color-green\">325%</span> weapon damage as Arcane.</p>",
      "simpleDescription" : "<p>Increase the damage of Magic Missile.</p>"
    }, {
      "requiredLevel" : 13,
      "name" : "Glacial Spike",
      "tooltipParams" : "rune/magic-missile/d",
      "type" : "d",
      "description" : "<p>Cast out a shard of ice that explodes on impact, causing enemies within <span class=\"d3-color-green\">4.5</span> yards to take <span class=\"d3-color-green\">175%</span> weapon damage as Cold and be Frozen for <span class=\"d3-color-green\">1</span> second.</p><p>Enemies cannot be Frozen by Glacial Spike more than once every <span class=\"d3-color-green\">5</span> seconds.</p>",
      "simpleDescription" : "<p>Cast out a shard of ice that explodes on impact, dealing Cold damage and freezing enemies.</p>"
    }, {
      "requiredLevel" : 31,
      "name" : "Split",
      "tooltipParams" : "rune/magic-missile/b",
      "type" : "b",
      "description" : "<p>Fire <span class=\"d3-color-green\">3</span> missiles that each deal <span class=\"d3-color-green\">80%</span> weapon damage as Arcane.</p>",
      "simpleDescription" : "<p>Fire multiple missiles with each attack.</p>"
    }, {
      "requiredLevel" : 42,
      "name" : "Seeker",
      "tooltipParams" : "rune/magic-missile/e",
      "type" : "e",
      "description" : "<p>Missiles track the nearest enemy. Missile damage is increased to <span class=\"d3-color-green\">285%</span> weapon damage as Arcane.</p>",
      "simpleDescription" : "<p>Missiles track the nearest enemy and deal additional damage.</p>"
    }, {
      "requiredLevel" : 52,
      "name" : "Conflagrate",
      "tooltipParams" : "rune/magic-missile/c",
      "type" : "c",
      "description" : "<p>The missile pierces through enemies and causes them to burn for <span class=\"d3-color-green\">130%</span> weapon damage as Fire over <span class=\"d3-color-green\">3</span> seconds.</p><p>Burn damage stacks up to <span class=\"d3-color-green\">3</span> times and any Fire damage taken from your other spells refresh all stacks to their maximum duration.</p>",
      "simpleDescription" : "<p>The missile pierces through enemies and causes them to burn.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">This is a Signature spell. Signature spells are free to cast.</span></p><p>Launch a missile of magic energy, dealing <span class=\"d3-color-green\">230%</span> weapon damage as Arcane.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Signature Spell</span></p><p>Cast a bolt of arcane energy towards an enemy.</p>"
  }, {
    "requiredLevel" : 2,
    "orderIndex" : 1,
    "tooltipParams" : "skill/wizard/ray-of-frost",
    "categoryName" : "Secondary",
    "categorySlug" : "secondary",
    "icon" : "wizard_rayoffrost",
    "name" : "Ray of Frost",
    "slug" : "ray-of-frost",
    "runes" : [ {
      "requiredLevel" : 7,
      "name" : "Cold Blood",
      "tooltipParams" : "rune/ray-of-frost/d",
      "type" : "d",
      "description" : "<p>Reduce channeling cost to <span class=\"d3-color-green\">11</span> Arcane Power.</p>",
      "simpleDescription" : "<p>Reduce the channeling cost of Ray of Frost.</p>"
    }, {
      "requiredLevel" : 15,
      "name" : "Numb",
      "tooltipParams" : "rune/ray-of-frost/c",
      "type" : "c",
      "description" : "<p>Ray of Frost has a <span class=\"d3-color-green\">10%</span> chance to Freeze enemies for <span class=\"d3-color-green\">1</span> second and increases the Slow amount to <span class=\"d3-color-green\">80%</span> for <span class=\"d3-color-green\">3</span> seconds.</p>",
      "simpleDescription" : "<p>Increases the Slow amount and causes Ray of Frost to sometimes Freeze enemies.</p>"
    }, {
      "requiredLevel" : 28,
      "name" : "Black Ice",
      "tooltipParams" : "rune/ray-of-frost/e",
      "type" : "e",
      "description" : "<p>Enemies killed by Ray of Frost leave behind a patch of ice that deals <span class=\"d3-color-green\">1625%</span> weapon damage as Cold to enemies moving through it over <span class=\"d3-color-green\">3</span> seconds.</p>",
      "simpleDescription" : "<p>Slain enemies leave a patch of ice that damages enemies.</p>"
    }, {
      "requiredLevel" : 38,
      "name" : "Sleet Storm",
      "tooltipParams" : "rune/ray-of-frost/b",
      "type" : "b",
      "description" : "<p>Create a swirling storm around you that grows up to a <span class=\"d3-color-green\">22</span> yard radius, dealing <span class=\"d3-color-green\">300%</span> weapon damage as Cold to all enemies caught within it.</p><p>Ray of Frost damage is increased by <span class=\"d3-color-green\">220%</span> weapon damage every second, up to a maximum total of <span class=\"d3-color-green\">740%</span> weapon damage as Cold.</p>",
      "simpleDescription" : "<p>Create a swirling storm around you, dealing Cold damage to all enemies caught within it.</p>"
    }, {
      "requiredLevel" : 53,
      "name" : "Snow Blast",
      "tooltipParams" : "rune/ray-of-frost/a",
      "type" : "a",
      "description" : "<p>Enemies hit by Ray of Frost take <span class=\"d3-color-green\">15%</span> increased damage from Cold for <span class=\"d3-color-green\">4</span> seconds.</p>",
      "simpleDescription" : "<p>Enemies hit by Ray of Frost take increased damage from Cold.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">16</span> Arcane Power</p><p>Project a beam of frozen ice that blasts enemies within <span class=\"d3-color-green\">5</span> yards of the first enemy hit for <span class=\"d3-color-green\">430%</span> weapon damage as Cold and Slows their movement by <span class=\"d3-color-green\">60%</span> for <span class=\"d3-color-green\">3</span> seconds.</p><p>Ray of Frost damage is increased by <span class=\"d3-color-green\">405%</span> weapon damage every second, up to a maximum total of <span class=\"d3-color-green\">1240%</span> weapon damage as Cold.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">16</span> Arcane Power</p><p>Channel a beam of pure cold, chilling your enemies.</p>"
  }, {
    "requiredLevel" : 3,
    "orderIndex" : 2,
    "tooltipParams" : "skill/wizard/shock-pulse",
    "categoryName" : "Primary",
    "categorySlug" : "primary",
    "icon" : "wizard_shockpulse",
    "name" : "Shock Pulse",
    "slug" : "shock-pulse",
    "runes" : [ {
      "requiredLevel" : 9,
      "name" : "Explosive Bolts",
      "tooltipParams" : "rune/shock-pulse/e",
      "type" : "e",
      "description" : "<p>Slain enemies explode, dealing <span class=\"d3-color-green\">184%</span> weapon damage as Cold to every enemy within <span class=\"d3-color-green\">10</span> yards.</p><p>Shock Pulse&#39;s damage turns into Cold.</p>",
      "simpleDescription" : "<p>Slain enemies explode and chill nearby enemies.</p><p>Shock Pulse&#39;s damage turns into Cold.</p>"
    }, {
      "requiredLevel" : 18,
      "name" : "Fire Bolts",
      "tooltipParams" : "rune/shock-pulse/a",
      "type" : "a",
      "description" : "<p>Cast <span class=\"d3-color-green\">3</span> bolts of fire that each deal <span class=\"d3-color-green\">274%</span> weapon damage as Fire.</p>",
      "simpleDescription" : "<p>Cast bolts of fire that burn enemies.</p>"
    }, {
      "requiredLevel" : 33,
      "name" : "Piercing Orb",
      "tooltipParams" : "rune/shock-pulse/c",
      "type" : "c",
      "description" : "<p>Merge the bolts in a a single giant orb that oscillates forward dealing <span class=\"d3-color-green\">214%</span> weapon damage as Lightning to everything it hits.</p>",
      "simpleDescription" : "<p>Electrocute multiple enemies with a single orb of electricity.</p>"
    }, {
      "requiredLevel" : 47,
      "name" : "Power Affinity",
      "tooltipParams" : "rune/shock-pulse/d",
      "type" : "d",
      "description" : "<p>Gain <span class=\"d3-color-green\">2</span> Arcane Power for each enemy hit.</p><p>Shock Pulse&#39;s damage turns into Arcane.</p>",
      "simpleDescription" : "<p>Gain Arcane Power for each enemy hit.</p><p>Shock Pulse&#39;s damage turns into Arcane.</p>"
    }, {
      "requiredLevel" : 54,
      "name" : "Living Lightning",
      "tooltipParams" : "rune/shock-pulse/b",
      "type" : "b",
      "description" : "<p>Conjure a being of lightning that drifts forward, electrocuting nearby enemies for <span class=\"d3-color-green\">165%</span> weapon damage as Lightning.</p>",
      "simpleDescription" : "<p>Conjure a being of lightning that drifts forward, electrocuting nearby enemies.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">This is a Signature spell. Signature spells are free to cast.</span></p><p>Release a medium range pulse of <span class=\"d3-color-green\">3</span> unpredictable charges of electricity that deal <span class=\"d3-color-green\">194%</span> weapon damage as Lightning.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Signature Spell</span></p><p>Release bursts of uncontrollable electricity across the ground.</p>"
  }, {
    "requiredLevel" : 4,
    "orderIndex" : 3,
    "tooltipParams" : "skill/wizard/frost-nova",
    "categoryName" : "Defensive",
    "categorySlug" : "defensive",
    "icon" : "wizard_frostnova",
    "name" : "Frost Nova",
    "slug" : "frost-nova",
    "runes" : [ {
      "requiredLevel" : 12,
      "name" : "Shatter",
      "tooltipParams" : "rune/frost-nova/b",
      "type" : "b",
      "description" : "<p>A frozen enemy that is killed has a <span class=\"d3-color-green\">100%</span> chance of releasing another Frost Nova.</p>",
      "simpleDescription" : "<p>A frozen enemy has a chance of releasing an additional Frost Nova when killed.</p>"
    }, {
      "requiredLevel" : 18,
      "name" : "Cold Snap",
      "tooltipParams" : "rune/frost-nova/d",
      "type" : "d",
      "description" : "<p>Reduce the cooldown to <span class=\"d3-color-green\">7.5</span> seconds and increase the Freeze duration to <span class=\"d3-color-green\">3</span> seconds.</p>",
      "simpleDescription" : "<p>Reduce the cooldown and increase the Freeze duration of Frost Nova.</p>"
    }, {
      "requiredLevel" : 28,
      "name" : "Frozen Mist",
      "tooltipParams" : "rune/frost-nova/c",
      "type" : "c",
      "description" : "<p>Frost Nova no longer freezes enemies, but instead leaves behind a mist of frost that deals <span class=\"d3-color-green\">915%</span> weapon damage as Cold over <span class=\"d3-color-green\">8</span> seconds.</p>",
      "simpleDescription" : "<p>Frost Nova no longer freezes enemies, but leaves behind a mist that damages enemies.</p>"
    }, {
      "requiredLevel" : 41,
      "name" : "Deep Freeze",
      "tooltipParams" : "rune/frost-nova/e",
      "type" : "e",
      "description" : "<p>Gain a <span class=\"d3-color-green\">10%</span> bonus to Critical Hit Chance for <span class=\"d3-color-green\">11</span> seconds if Frost Nova hits <span class=\"d3-color-green\">5</span> or more enemies.</p>",
      "simpleDescription" : "<p>Gain a bonus to Critical Hit Chance if Frost Nova hits <span class=\"d3-color-green\">5</span> or more enemies.</p>"
    }, {
      "requiredLevel" : 51,
      "name" : "Bone Chill",
      "tooltipParams" : "rune/frost-nova/a",
      "type" : "a",
      "description" : "<p>Enemies take <span class=\"d3-color-green\">33%</span> more damage while frozen or chilled by Frost Nova.</p>",
      "simpleDescription" : "<p>Enemies take more damage while frozen or chilled by Frost Nova.</p>"
    } ],
    "primary" : false,
    "description" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">11</span> seconds</p><p>Blast nearby enemies with an explosion of ice and freeze them for <span class=\"d3-color-green\">2</span> seconds.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">11</span> seconds</p><p>Blast nearby enemies and freeze them in place.</p>"
  }, {
    "requiredLevel" : 5,
    "orderIndex" : 4,
    "tooltipParams" : "skill/wizard/arcane-orb",
    "categoryName" : "Secondary",
    "categorySlug" : "secondary",
    "icon" : "wizard_arcaneorb",
    "name" : "Arcane Orb",
    "slug" : "arcane-orb",
    "runes" : [ {
      "requiredLevel" : 11,
      "name" : "Obliteration",
      "tooltipParams" : "rune/arcane-orb/a",
      "type" : "a",
      "description" : "<p>Increase the speed of the orb and its damage to <span class=\"d3-color-green\">700%</span> weapon damage as Arcane, but reduce the area of effect to <span class=\"d3-color-green\">8</span> yards.</p>",
      "simpleDescription" : "<p>Increase the speed of the orb and its damage, but reduce the area of effect.</p>"
    }, {
      "requiredLevel" : 20,
      "name" : "Arcane Orbit",
      "tooltipParams" : "rune/arcane-orb/c",
      "type" : "c",
      "description" : "<p>Create <span class=\"d3-color-green\">4</span> Arcane Orbs that orbit you, exploding for <span class=\"d3-color-green\">265%</span> weapon damage as Arcane when enemies get close. </p>",
      "simpleDescription" : "<p>Create Arcane Orbs that orbit you, exploding when enemies get close.</p>"
    }, {
      "requiredLevel" : 32,
      "name" : "Spark",
      "tooltipParams" : "rune/arcane-orb/b",
      "type" : "b",
      "description" : "<p>Lob an electrified orb over enemies that zaps them for <span class=\"d3-color-green\">349%</span> weapon damage as Lightning and increases the damage of the next Lightning spell you cast by <span class=\"d3-color-green\">2%</span> for every enemy hit.</p>",
      "simpleDescription" : "<p>Lob an electrified orb over enemies that increases the damage of the next Lightning spell you cast for every enemy hit.</p>"
    }, {
      "requiredLevel" : 45,
      "name" : "Scorch",
      "tooltipParams" : "rune/arcane-orb/d",
      "type" : "d",
      "description" : "<p>Launch a burning orb that deals <span class=\"d3-color-green\">221%</span> weapon damage as Fire. The orb leaves behind a wall of Fire that deals <span class=\"d3-color-green\">734%</span> weapon damage as Fire over <span class=\"d3-color-green\">5</span> seconds.</p>",
      "simpleDescription" : "<p>Launch a burning orb that leaves behind a wall of Fire.</p>"
    }, {
      "requiredLevel" : 55,
      "name" : "Frozen Orb",
      "tooltipParams" : "rune/arcane-orb/e",
      "type" : "e",
      "description" : "<p>Create an orb of frozen death that shreds an area with ice bolts, dealing <span class=\"d3-color-green\">393%</span> weapon damage as Cold.</p>",
      "simpleDescription" : "<p>Create an orb of frozen death that shreds an area with ice bolts.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">30</span> Arcane Power</p><p>Hurl an orb of pure energy that explodes on contact, dealing <span class=\"d3-color-green\">435%</span> weapon damage as Arcane to all enemies within <span class=\"d3-color-green\">15</span> yards.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">30</span> Arcane Power</p><p>Cast an orb of pure arcane energy that explodes on contact.</p>"
  }, {
    "requiredLevel" : 8,
    "orderIndex" : 5,
    "tooltipParams" : "skill/wizard/diamond-skin",
    "categoryName" : "Defensive",
    "categorySlug" : "defensive",
    "icon" : "wizard_diamondskin",
    "name" : "Diamond Skin",
    "slug" : "diamond-skin",
    "runes" : [ {
      "requiredLevel" : 14,
      "name" : "Crystal Shell",
      "tooltipParams" : "rune/diamond-skin/c",
      "type" : "c",
      "description" : "<p>Increase the maximum amount of damage absorbed to <span class=\"d3-color-green\">186675</span> damage.</p>",
      "simpleDescription" : "<p>Increase the maximum amount of damage absorbed.</p>"
    }, {
      "requiredLevel" : 20,
      "name" : "Prism",
      "tooltipParams" : "rune/diamond-skin/d",
      "type" : "d",
      "description" : "<p>Reduce the Arcane Power cost of all skills by <span class=\"d3-color-green\">9</span> while Diamond Skin is active.</p>",
      "simpleDescription" : "<p>Reduce the Arcane Power cost of all skills while Diamond Skin is active.</p>"
    }, {
      "requiredLevel" : 32,
      "name" : "Sleek Shell",
      "tooltipParams" : "rune/diamond-skin/a",
      "type" : "a",
      "description" : "<p>Increases your movement speed by <span class=\"d3-color-green\">30%</span> while Diamond Skin is active.</p>",
      "simpleDescription" : "<p>Increases your movement speed while Diamond Skin is active.</p>"
    }, {
      "requiredLevel" : 44,
      "name" : "Enduring Skin",
      "tooltipParams" : "rune/diamond-skin/b",
      "type" : "b",
      "description" : "<p>Increase the duration of Diamond Skin to <span class=\"d3-color-green\">6</span> seconds.</p>",
      "simpleDescription" : "<p>Increase the duration of Diamond Skin.</p>"
    }, {
      "requiredLevel" : 56,
      "name" : "Diamond Shards",
      "tooltipParams" : "rune/diamond-skin/e",
      "type" : "e",
      "description" : "<p>When Diamond Skin fades, diamond shards explode in all directions dealing <span class=\"d3-color-green\">863%</span> weapon damage as Arcane to nearby enemies.</p>",
      "simpleDescription" : "<p>When Diamond Skin fades, diamond shards explode in all directions.</p>"
    } ],
    "primary" : false,
    "description" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">15</span> seconds</p><p>Transform your skin to diamond for <span class=\"d3-color-green\">3</span> seconds, absorbing up to <span class=\"d3-color-green\">93337</span> damage from incoming attacks.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">15</span> seconds</p><p>Transform your skin to diamond, temporarily absorbing damage for a short duration.</p>"
  }, {
    "requiredLevel" : 9,
    "orderIndex" : 6,
    "tooltipParams" : "skill/wizard/wave-of-force",
    "categoryName" : "Force",
    "categorySlug" : "force",
    "icon" : "wizard_waveofforce",
    "name" : "Wave of Force",
    "slug" : "wave-of-force",
    "runes" : [ {
      "requiredLevel" : 15,
      "name" : "Impactful Wave",
      "tooltipParams" : "rune/wave-of-force/a",
      "type" : "a",
      "description" : "<p>Wave of Force repels projectiles back toward their shooter, knocks back nearby enemies and Slows them by <span class=\"d3-color-green\">60%</span> for <span class=\"d3-color-green\">3</span> seconds.</p><p>Wave of Force gains <span class=\"d3-color-green\">5</span> second cooldown.</p>",
      "simpleDescription" : "<p>Wave of Force repels projectiles back toward their shooter, knocks back nearby enemies and Slows them.</p>"
    }, {
      "requiredLevel" : 22,
      "name" : "Debilitating Force",
      "tooltipParams" : "rune/wave-of-force/e",
      "type" : "e",
      "description" : "<p>Enemies hit deal <span class=\"d3-color-green\">20%</span> reduced damage for <span class=\"d3-color-green\">4</span> seconds.</p>",
      "simpleDescription" : "<p>Enemies hit deal reduced damage for a short duration.</p>"
    }, {
      "requiredLevel" : 32,
      "name" : "Arcane Attunement",
      "tooltipParams" : "rune/wave-of-force/d",
      "type" : "d",
      "description" : "<p>Each enemy hit increases the damage of your next Arcane spell by <span class=\"d3-color-green\">4%</span>.</p>",
      "simpleDescription" : "<p>Each enemy hit increases the damage of your next Arcane spell.</p>"
    }, {
      "requiredLevel" : 39,
      "name" : "Static Pulse",
      "tooltipParams" : "rune/wave-of-force/b",
      "type" : "b",
      "description" : "<p>Each enemy hit restores <span class=\"d3-color-green\">1</span> Arcane Power.</p><p>Wave of Force&#39;s damage turns into Lightning.</p>",
      "simpleDescription" : "<p>Each enemy hit restores Arcane Power.</p><p>Wave of Force&#39;s damage turns into Lightning.</p>"
    }, {
      "requiredLevel" : 49,
      "name" : "Heat Wave",
      "tooltipParams" : "rune/wave-of-force/c",
      "type" : "c",
      "description" : "<p>Increase the damage to <span class=\"d3-color-green\">475%</span> weapon damage as Fire.</p>",
      "simpleDescription" : "<p>Increase the damage and changes the damage type to Fire.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Discharge a wave of pure energy that deals <span class=\"d3-color-green\">390%</span> weapon damage as Arcane to nearby enemies.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Discharge a wave of pure energy that damages nearby enemies.</p>"
  }, {
    "requiredLevel" : 11,
    "orderIndex" : 7,
    "tooltipParams" : "skill/wizard/spectral-blade",
    "categoryName" : "Primary",
    "categorySlug" : "primary",
    "icon" : "wizard_spectralblade",
    "name" : "Spectral Blade",
    "slug" : "spectral-blade",
    "runes" : [ {
      "requiredLevel" : 19,
      "name" : "Flame Blades",
      "tooltipParams" : "rune/spectral-blade/a",
      "type" : "a",
      "description" : "<p>Each enemy hit increases the damage of your Fire spells by <span class=\"d3-color-green\">1%</span> for <span class=\"d3-color-green\">10</span> seconds.</p>",
      "simpleDescription" : "<p>Each enemy hit increases the damage of your Fire spells for a short duration.</p>"
    }, {
      "requiredLevel" : 24,
      "name" : "Siphoning Blade",
      "tooltipParams" : "rune/spectral-blade/d",
      "type" : "d",
      "description" : "<p>Gain <span class=\"d3-color-green\">2</span> Arcane Power for each enemy hit.</p>",
      "simpleDescription" : "<p>Gain Arcane Power for each enemy hit.</p>"
    }, {
      "requiredLevel" : 35,
      "name" : "Thrown Blade",
      "tooltipParams" : "rune/spectral-blade/b",
      "type" : "b",
      "description" : "<p>Extend the reach of Spectral Blade to <span class=\"d3-color-green\">20</span> yards and increase its damage to <span class=\"d3-color-green\">231%</span> weapon damage as Lightning.</p>",
      "simpleDescription" : "<p>Extend the reach and increase the damage of Spectral Blade.</p><p>Spectral Blade&#39;s damage turns into Lightning.</p>"
    }, {
      "requiredLevel" : 51,
      "name" : "Barrier Blades",
      "tooltipParams" : "rune/spectral-blade/e",
      "type" : "e",
      "description" : "<p>With each cast, gain a protective shield for <span class=\"d3-color-green\">3</span> seconds that absorbs <span class=\"d3-color-green\">10728</span> damage.</p>",
      "simpleDescription" : "<p>Gain a protective shield each cast.</p>"
    }, {
      "requiredLevel" : 57,
      "name" : "Ice Blades",
      "tooltipParams" : "rune/spectral-blade/c",
      "type" : "c",
      "description" : "<p>Chilled enemies have a <span class=\"d3-color-green\">5%</span> chance to be Frozen and Frozen enemies have a <span class=\"d3-color-green\">5%</span> increased chance to be critically hit by Spectral Blade.</p>",
      "simpleDescription" : "<p>Chilled enemies have a chance to be Frozen and Frozen enemies have an increased chance to be critically hit by Spectral Blade.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">This is a Signature spell. Signature spells are free to cast.</span></p><p>Summon a spectral blade that strikes all enemies up to <span class=\"d3-color-green\">15</span> yards in front of you for <span class=\"d3-color-green\">168%</span> weapon damage as Arcane.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Signature Spell</span></p><p>Summon mystic blades that slice through enemies.</p>"
  }, {
    "requiredLevel" : 12,
    "orderIndex" : 8,
    "tooltipParams" : "skill/wizard/arcane-torrent",
    "categoryName" : "Secondary",
    "categorySlug" : "secondary",
    "icon" : "wizard_arcanetorrent",
    "name" : "Arcane Torrent",
    "slug" : "arcane-torrent",
    "runes" : [ {
      "requiredLevel" : 18,
      "name" : "Flame Ward",
      "tooltipParams" : "rune/arcane-torrent/a",
      "type" : "a",
      "description" : "<p>You take <span class=\"d3-color-green\">15%</span> less damage from attacks while channeling. Every second you channel increases this amount by <span class=\"d3-color-green\">5%</span>, up to a maximum total of <span class=\"d3-color-green\">25%</span> damage reduction.</p><p>Arcane Torrent&#39;s damage turns into Fire.</p>",
      "simpleDescription" : "<p>You take less damage from attacks every second you channel.</p><p>Arcane Torrent&#39;s damage turns into Fire.</p>"
    }, {
      "requiredLevel" : 25,
      "name" : "Death Blossom",
      "tooltipParams" : "rune/arcane-torrent/e",
      "type" : "e",
      "description" : "<p>Unleash a torrent of power beyond your control. You no longer direct where the projectiles go, but their damage is greatly increased to <span class=\"d3-color-green\">1215%</span> weapon damage as Arcane.</p><p>Arcane Torrent damage is increased by <span class=\"d3-color-green\">640%</span> weapon damage every second, up to a maximum total of <span class=\"d3-color-green\">2495%</span> weapon damage as Arcane.</p>",
      "simpleDescription" : "<p>Unleash a torrent of power beyond your control. You no longer direct where the projectiles go, but their damage is greatly increased.</p>"
    }, {
      "requiredLevel" : 34,
      "name" : "Arcane Mines",
      "tooltipParams" : "rune/arcane-torrent/c",
      "type" : "c",
      "description" : "<p>Lay Arcane mines that arm after <span class=\"d3-color-green\">2</span> seconds. These mines explode when an enemy approaches, dealing <span class=\"d3-color-green\">825%</span> weapon damage as Arcane. Enemies caught in the explosion have their movement and attack speeds reduced by <span class=\"d3-color-green\">60%</span> for <span class=\"d3-color-green\">3</span> seconds.</p>",
      "simpleDescription" : "<p>Place Arcane mines that explode when enemies approach, dealing damage and reducing the movement and attack speed of enemies caught in the blast.</p>"
    }, {
      "requiredLevel" : 49,
      "name" : "Static Discharge",
      "tooltipParams" : "rune/arcane-torrent/d",
      "type" : "d",
      "description" : "<p>Each missile explodes into <span class=\"d3-color-green\">2</span> piercing bolts of electricity that each deal <span class=\"d3-color-green\">150%</span> weapon damage as Lightning.</p>",
      "simpleDescription" : "<p>Each missile explodes into piercing bolts of electricity.</p>"
    }, {
      "requiredLevel" : 57,
      "name" : "Cascade",
      "tooltipParams" : "rune/arcane-torrent/b",
      "type" : "b",
      "description" : "<p>Enemies hit by Arcane Torrent have a <span class=\"d3-color-green\">12.5%</span> chance to fire a new missile at a nearby enemy dealing <span class=\"d3-color-green\">582%</span> weapon damage as Arcane.</p>",
      "simpleDescription" : "<p>Enemies hit by Arcane Torrent have a chance to fire a new missile at a nearby enemy.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">16</span> Arcane Power</p><p>Hurl a barrage of arcane projectiles that deal <span class=\"d3-color-green\">400%</span> weapon damage as Arcane to all enemies near the impact location.</p><p>Arcane Torrent damage is increased by <span class=\"d3-color-green\">305%</span> weapon damage every second, up to a maximum total of <span class=\"d3-color-green\">1010%</span> weapon damage as Arcane.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">16</span> Arcane Power</p><p>Unleash a barrage of arcane projectiles.</p>"
  }, {
    "requiredLevel" : 13,
    "orderIndex" : 9,
    "tooltipParams" : "skill/wizard/energy-twister",
    "categoryName" : "Force",
    "categorySlug" : "force",
    "icon" : "wizard_energytwister",
    "name" : "Energy Twister",
    "slug" : "energy-twister",
    "runes" : [ {
      "requiredLevel" : 19,
      "name" : "Mistral Breeze",
      "tooltipParams" : "rune/energy-twister/d",
      "type" : "d",
      "description" : "<p>Reduce the casting cost of Energy Twister to <span class=\"d3-color-green\">25</span> Arcane Power.</p><p>Energy Twister&#39;s damage turns into Cold.</p>",
      "simpleDescription" : "<p>Reduce the casting cost of Energy Twister.</p><p>Energy Twister&#39;s damage turns into Cold.</p>"
    }, {
      "requiredLevel" : 24,
      "name" : "Gale Force",
      "tooltipParams" : "rune/energy-twister/a",
      "type" : "a",
      "description" : "<p>Enemies hit by Energy Twister take <span class=\"d3-color-green\">15%</span> increased damage from Fire for <span class=\"d3-color-green\">4</span> seconds.</p>",
      "simpleDescription" : "<p>Enemies hit by Energy Twister take increased damage from Fire.</p>"
    }, {
      "requiredLevel" : 36,
      "name" : "Raging Storm",
      "tooltipParams" : "rune/energy-twister/b",
      "type" : "b",
      "description" : "<p>When two Energy Twisters collide, they merge into a tornado with increased area of effect that causes <span class=\"d3-color-green\">3200%</span> weapon damage as Arcane over <span class=\"d3-color-green\">6</span> seconds.</p>",
      "simpleDescription" : "<p>When two twisters collide, they merge into a tornado with increased area of effect and damage.</p>"
    }, {
      "requiredLevel" : 41,
      "name" : "Wicked Wind",
      "tooltipParams" : "rune/energy-twister/e",
      "type" : "e",
      "description" : "<p>Energy Twister no longer travels but spins in place, dealing <span class=\"d3-color-green\">835%</span> weapon damage as Arcane over <span class=\"d3-color-green\">6</span> seconds to everything caught in it.</p>",
      "simpleDescription" : "<p>Energy Twister no longer travels but spins in place, dealing damage to everything caught in it.</p>"
    }, {
      "requiredLevel" : 52,
      "name" : "Storm Chaser",
      "tooltipParams" : "rune/energy-twister/c",
      "type" : "c",
      "description" : "<p>Each cast of Energy Twister grants you a Lightning Charge. You can store up to <span class=\"d3-color-green\">3</span> Lightning Charges at a time. Casting a Signature spell releases all Lightning Charges as a bolt of Lightning that deals <span class=\"d3-color-green\">196%</span> weapon damage as Lightning per Lightning Charge.</p><p>Energy Twister&#39;s damage turns into Lightning.</p><p>The following skills are Signature spells:<br/><span class=\"tooltip-icon-bullet\"></span> Magic Missile<br/><span class=\"tooltip-icon-bullet\"></span> Shock Pulse<br/><span class=\"tooltip-icon-bullet\"></span> Spectral Blade<br/><span class=\"tooltip-icon-bullet\"></span> Electrocute</p>",
      "simpleDescription" : "<p>Energy Twister generates Lightning Charges that can be released by Signature spells to discharge a bolt of Lightning.</p><p>Energy Twister&#39;s damage turns into Lightning.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">35</span> Arcane Power</p><p>Unleash a twister of pure energy that deals <span class=\"d3-color-green\">1525%</span> weapon damage as Arcane over <span class=\"d3-color-green\">6</span> seconds to everything in its path.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">35</span> Arcane Power</p><p>Release a raging tornado that wreaks havoc across the battlefield.</p>"
  }, {
    "requiredLevel" : 14,
    "orderIndex" : 10,
    "tooltipParams" : "skill/wizard/ice-armor",
    "categoryName" : "Conjuration",
    "categorySlug" : "conjuration",
    "icon" : "wizard_icearmor",
    "name" : "Ice Armor",
    "slug" : "ice-armor",
    "runes" : [ {
      "requiredLevel" : 21,
      "name" : "Chilling Aura",
      "tooltipParams" : "rune/ice-armor/b",
      "type" : "b",
      "description" : "<p>Lower the temperature of the air around you. Nearby enemies are chilled, slowing their movement speed by <span class=\"d3-color-green\">80%</span>.</p>",
      "simpleDescription" : "<p>Lower the temperature of the air around you. Nearby enemies are chilled, slowing their movement speed.</p>"
    }, {
      "requiredLevel" : 31,
      "name" : "Crystallize",
      "tooltipParams" : "rune/ice-armor/d",
      "type" : "d",
      "description" : "<p>When you are struck by a melee attack, your Armor is increased by <span class=\"d3-color-green\">20%</span> for <span class=\"d3-color-green\">30</span> seconds. This effect stacks up to <span class=\"d3-color-green\">3</span> times.</p>",
      "simpleDescription" : "<p>When you are struck by a melee attack, your Armor is increased.</p>"
    }, {
      "requiredLevel" : 42,
      "name" : "Jagged Ice",
      "tooltipParams" : "rune/ice-armor/a",
      "type" : "a",
      "description" : "<p>Melee attackers also take <span class=\"d3-color-green\">189%</span> weapon damage as Cold.</p>",
      "simpleDescription" : "<p>Melee attackers also take damage.</p>"
    }, {
      "requiredLevel" : 49,
      "name" : "Ice Reflect",
      "tooltipParams" : "rune/ice-armor/e",
      "type" : "e",
      "description" : "<p>Melee attacks have a <span class=\"d3-color-green\">40%</span> chance to create a Frost Nova centered on the attacker, dealing <span class=\"d3-color-green\">75%</span> weapon damage as Cold.</p>",
      "simpleDescription" : "<p>Melee attacks against you have a chance to create a Frost Nova centered on the attacker.</p>"
    }, {
      "requiredLevel" : 53,
      "name" : "Frozen Storm",
      "tooltipParams" : "rune/ice-armor/c",
      "type" : "c",
      "description" : "<p>A whirling storm of ice builds around you, dealing <span class=\"d3-color-green\">80%</span> weapon damage as Cold every second.</p>",
      "simpleDescription" : "<p>A whirling storm of ice builds around you and damages enemies.</p>"
    } ],
    "primary" : false,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Surround yourself in a barrier of ice that reduces damage from melee attacks by <span class=\"d3-color-green\">12%</span>. Melee attackers are either Chilled or Frozen for <span class=\"d3-color-green\">3</span> seconds. Lasts <span class=\"d3-color-green\">10</span> minutes.</p><p><span class=\"d3-color-yellow\">Only one Armor may be active at a time.</span></p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Protect yourself with a barrier of ice that Chills attackers.</p><p><span class=\"d3-color-yellow\">Only one Armor may be active at a time.</span></p>"
  }, {
    "requiredLevel" : 15,
    "orderIndex" : 11,
    "tooltipParams" : "skill/wizard/electrocute",
    "categoryName" : "Primary",
    "categorySlug" : "primary",
    "icon" : "wizard_electrocute",
    "name" : "Electrocute",
    "slug" : "electrocute",
    "runes" : [ {
      "requiredLevel" : 22,
      "name" : "Chain Lightning",
      "tooltipParams" : "rune/electrocute/b",
      "type" : "b",
      "description" : "<p>Increase the maximum number of enemies that can be electrocuted to <span class=\"d3-color-green\">10</span>.</p>",
      "simpleDescription" : "<p>Increase the maximum number of enemies that can be electrocuted.</p>"
    }, {
      "requiredLevel" : 29,
      "name" : "Forked Lightning",
      "tooltipParams" : "rune/electrocute/e",
      "type" : "e",
      "description" : "<p>Critical Hits release <span class=\"d3-color-green\">4</span> charged bolts in random directions, dealing <span class=\"d3-color-green\">44%</span> weapon damage as Fire to any enemies hit.</p>",
      "simpleDescription" : "<p>Critical Hits release charged bolts that travel in random directions.</p><p>Electrocute&#39;s damage turns into Fire.</p>"
    }, {
      "requiredLevel" : 36,
      "name" : "Lightning Blast",
      "tooltipParams" : "rune/electrocute/a",
      "type" : "a",
      "description" : "<p>Create streaks of lightning that pierce through enemies for <span class=\"d3-color-green\">140%</span> weapon damage as Lightning.</p>",
      "simpleDescription" : "<p>Create streaks of lightning that pierce through enemies.</p>"
    }, {
      "requiredLevel" : 44,
      "name" : "Surge of Power",
      "tooltipParams" : "rune/electrocute/d",
      "type" : "d",
      "description" : "<p>Gain <span class=\"d3-color-green\">1</span> Arcane Power for each enemy hit.</p>",
      "simpleDescription" : "<p>Gain Arcane Power for each enemy hit.</p>"
    }, {
      "requiredLevel" : 59,
      "name" : "Arc Lightning",
      "tooltipParams" : "rune/electrocute/c",
      "type" : "c",
      "description" : "<p>Blast a cone of lightning that deals <span class=\"d3-color-green\">310%</span> weapon damage as Lightning to all affected enemies.</p>",
      "simpleDescription" : "<p>Blast a cone of lightning.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">This is a Signature spell. Signature spells are free to cast.</span></p><p>Lightning arcs from your fingertips, dealing <span class=\"d3-color-green\">138%</span> weapon damage as Lightning. The lightning can jump, hitting up to <span class=\"d3-color-green\">2</span> additional enemies.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Signature Spell</span></p><p>Cast chain lightning that electrocutes up to <span class=\"d3-color-green\">3</span> enemies.</p>"
  }, {
    "requiredLevel" : 16,
    "orderIndex" : 12,
    "tooltipParams" : "skill/wizard/slow-time",
    "categoryName" : "Defensive",
    "categorySlug" : "defensive",
    "icon" : "wizard_slowtime",
    "name" : "Slow Time",
    "slug" : "slow-time",
    "runes" : [ {
      "requiredLevel" : 23,
      "name" : "Time Shell",
      "tooltipParams" : "rune/slow-time/c",
      "type" : "c",
      "description" : "<p>Increase the potency of the movement speed reduction to <span class=\"d3-color-green\">80%</span> and reduces the cooldown to <span class=\"d3-color-green\">12</span> seconds.</p>",
      "simpleDescription" : "<p>Increase the potency of the movement speed reduction and reduces the cooldown.</p>"
    }, {
      "requiredLevel" : 29,
      "name" : "Exhaustion",
      "tooltipParams" : "rune/slow-time/d",
      "type" : "d",
      "description" : "<p>Enemies caught by Slow Time deal <span class=\"d3-color-green\">25%</span> less damage.</p>",
      "simpleDescription" : "<p>Enemies caught by Slow Time deal less damage.</p>"
    }, {
      "requiredLevel" : 39,
      "name" : "Time Warp",
      "tooltipParams" : "rune/slow-time/a",
      "type" : "a",
      "description" : "<p>Enemies caught in the bubble of warped time take <span class=\"d3-color-green\">15%</span> more damage.</p>",
      "simpleDescription" : "<p>Enemies caught by Slow Time take more damage.</p>"
    }, {
      "requiredLevel" : 47,
      "name" : "Point of No Return",
      "tooltipParams" : "rune/slow-time/b",
      "type" : "b",
      "description" : "<p>Enemies that enter or leave the Slow Time area are stunned for <span class=\"d3-color-green\">3</span> seconds.</p>",
      "simpleDescription" : "<p>Enemies that enter or leave the Slow Time area are stunned.</p>"
    }, {
      "requiredLevel" : 53,
      "name" : "Stretch Time",
      "tooltipParams" : "rune/slow-time/e",
      "type" : "e",
      "description" : "<p>Time is sped up for any allies standing in the area, increasing their attack speed by <span class=\"d3-color-green\">10%</span>.</p>",
      "simpleDescription" : "<p>Time is sped up for all allies standing in the bubble, increasing their attack speed.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">15</span> seconds</p><p>Invoke a bubble of warped time and space at your target location up to <span class=\"d3-color-green\">60</span> yards away for <span class=\"d3-color-green\">15</span> seconds, reducing enemy attack speed by <span class=\"d3-color-green\">20%</span> and movement speed by <span class=\"d3-color-green\">60%</span>. This bubble also slows the speed of enemy projectiles by <span class=\"d3-color-green\">90%</span>.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">15</span> seconds</p><p>Fracture time and space at your target location, slowing enemies around you while you move unhindered.</p>"
  }, {
    "requiredLevel" : 17,
    "orderIndex" : 13,
    "tooltipParams" : "skill/wizard/storm-armor",
    "categoryName" : "Conjuration",
    "categorySlug" : "conjuration",
    "icon" : "wizard_stormarmor",
    "name" : "Storm Armor",
    "slug" : "storm-armor",
    "runes" : [ {
      "requiredLevel" : 23,
      "name" : "Reactive Armor",
      "tooltipParams" : "rune/storm-armor/c",
      "type" : "c",
      "description" : "<p>Ranged and melee attackers are shocked for <span class=\"d3-color-green\">189%</span> weapon damage as Lightning.</p>",
      "simpleDescription" : "<p>Ranged and melee attackers are shocked with Lightning damage.</p>"
    }, {
      "requiredLevel" : 33,
      "name" : "Power of the Storm",
      "tooltipParams" : "rune/storm-armor/d",
      "type" : "d",
      "description" : "<p>Reduce the Arcane Power cost of all skills by <span class=\"d3-color-green\">3</span> while Storm Armor is active.</p>",
      "simpleDescription" : "<p>Reduce the Arcane Power cost of all skills while Storm Armor is active.</p>"
    }, {
      "requiredLevel" : 37,
      "name" : "Thunder Storm",
      "tooltipParams" : "rune/storm-armor/a",
      "type" : "a",
      "description" : "<p>Increase the damage of the shock to <span class=\"d3-color-green\">315%</span> weapon damage as Lightning. </p>",
      "simpleDescription" : "<p>Increase the damage dealt by Storm Armor.</p>"
    }, {
      "requiredLevel" : 43,
      "name" : "Scramble",
      "tooltipParams" : "rune/storm-armor/b",
      "type" : "b",
      "description" : "<p>Increase your movement speed by <span class=\"d3-color-green\">25%</span> for <span class=\"d3-color-green\">3</span> seconds when you are hit by melee or ranged attacks.</p>",
      "simpleDescription" : "<p>Increase your movement speed whenever you are hit by melee or ranged attacks.</p>"
    }, {
      "requiredLevel" : 58,
      "name" : "Shocking Aspect",
      "tooltipParams" : "rune/storm-armor/e",
      "type" : "e",
      "description" : "<p>Critical Hits have a chance to electrocute a nearby enemy for <span class=\"d3-color-green\">425%</span> weapon damage as Lightning.</p>",
      "simpleDescription" : "<p>Critical Hits have a chance to further electrocute a nearby enemy.</p>"
    } ],
    "primary" : false,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Bathe yourself in electrical energy, periodically shocking a nearby enemy for <span class=\"d3-color-green\">175%</span> weapon damage as Lightning. Lasts <span class=\"d3-color-green\">10</span> minutes.</p><p><span class=\"d3-color-yellow\">Only one Armor may be active at a time.</span></p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Surround yourself with a magical storm that electrocutes enemies with lightning.</p><p><span class=\"d3-color-yellow\">Only one Armor may be active at a time.</span></p>"
  }, {
    "requiredLevel" : 19,
    "orderIndex" : 14,
    "tooltipParams" : "skill/wizard/explosive-blast",
    "categoryName" : "Mastery",
    "categorySlug" : "mastery",
    "icon" : "wizard_explosiveblast",
    "name" : "Explosive Blast",
    "slug" : "explosive-blast",
    "runes" : [ {
      "requiredLevel" : 24,
      "name" : "Unleashed",
      "tooltipParams" : "rune/explosive-blast/d",
      "type" : "d",
      "description" : "<p>Increases the damage of Explosive Blast to <span class=\"d3-color-green\">1485%</span>.</p>",
      "simpleDescription" : "<p>Increases the damage of Explosive Blast.</p>"
    }, {
      "requiredLevel" : 29,
      "name" : "Flash",
      "tooltipParams" : "rune/explosive-blast/c",
      "type" : "c",
      "description" : "<p>Reduce the cooldown of Explosive Blast to <span class=\"d3-color-green\">3</span> seconds.</p><p>Explosive Blast&#39;s damage turns into Lightning.</p>",
      "simpleDescription" : "<p>Reduce the cooldown of Explosive Blast.</p><p>Explosive Blast&#39;s damage turns into Lightning.</p>"
    }, {
      "requiredLevel" : 39,
      "name" : "Short Fuse",
      "tooltipParams" : "rune/explosive-blast/a",
      "type" : "a",
      "description" : "<p>Immediately release the energy of Explosive Blast for <span class=\"d3-color-green\">909%</span> weapon damage as Fire.</p>",
      "simpleDescription" : "<p>Immediately release a fiery Explosive Blast.</p>"
    }, {
      "requiredLevel" : 50,
      "name" : "Obliterate",
      "tooltipParams" : "rune/explosive-blast/b",
      "type" : "b",
      "description" : "<p>Release an enormous Explosive Blast that deals <span class=\"d3-color-green\">990%</span> weapon damage as Cold to all enemies within <span class=\"d3-color-green\">18</span> yards.</p>",
      "simpleDescription" : "<p>Release an enormous Explosive Blast.</p><p>Explosive Blast&#39;s damage turns into Cold.</p>"
    }, {
      "requiredLevel" : 56,
      "name" : "Chain Reaction",
      "tooltipParams" : "rune/explosive-blast/e",
      "type" : "e",
      "description" : "<p>Instead of a single explosion, release a chain of <span class=\"d3-color-green\">3</span> consecutive explosions, each dealing <span class=\"d3-color-green\">520%</span> weapon damage as Fire.</p>",
      "simpleDescription" : "<p>Instead of a single explosion, release a chain of consecutive explosions.</p>"
    } ],
    "primary" : false,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">20</span> Arcane Power<br/><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">6</span> seconds</p><p>Gather an infusion of energy around you that explodes after <span class=\"d3-color-green\">1.5</span> seconds for <span class=\"d3-color-green\">945%</span> weapon damage as Arcane to all enemies within <span class=\"d3-color-green\">12</span> yards.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">20</span> Arcane Power<br/><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">6</span> seconds</p><p>Gather energy and release it as a devastating blast.</p>"
  }, {
    "requiredLevel" : 20,
    "orderIndex" : 15,
    "tooltipParams" : "skill/wizard/magic-weapon",
    "categoryName" : "Conjuration",
    "categorySlug" : "conjuration",
    "icon" : "wizard_magicweapon",
    "name" : "Magic Weapon",
    "slug" : "magic-weapon",
    "runes" : [ {
      "requiredLevel" : 27,
      "name" : "Electrify",
      "tooltipParams" : "rune/magic-weapon/b",
      "type" : "b",
      "description" : "<p>Attacks have a chance to cause lightning to arc to <span class=\"d3-color-green\">3</span> nearby enemies, dealing <span class=\"d3-color-green\">61%</span> weapon damage as Lightning.</p>",
      "simpleDescription" : "<p>Attacks have a chance to cause lightning to arc to nearby enemies.</p>"
    }, {
      "requiredLevel" : 35,
      "name" : "Force Weapon",
      "tooltipParams" : "rune/magic-weapon/c",
      "type" : "c",
      "description" : "<p>Increase the damage bonus of Magic Weapon to <span class=\"d3-color-green\">20%</span> damage.</p>",
      "simpleDescription" : "<p>Increase the damage bonus of Magic Weapon.</p>"
    }, {
      "requiredLevel" : 38,
      "name" : "Conduit",
      "tooltipParams" : "rune/magic-weapon/d",
      "type" : "d",
      "description" : "<p>Enemies hit by your attacks restore up to <span class=\"d3-color-green\">3</span> Arcane Power.</p>",
      "simpleDescription" : "<p>Enemies hit by your attacks restore Arcane Power.</p>"
    }, {
      "requiredLevel" : 46,
      "name" : "Ignite",
      "tooltipParams" : "rune/magic-weapon/a",
      "type" : "a",
      "description" : "<p>Attacks have a chance to burn enemies, dealing <span class=\"d3-color-green\">300%</span> weapon damage as Fire over <span class=\"d3-color-green\">3</span> seconds.</p>",
      "simpleDescription" : "<p>Attacks have a chance to burn enemies.</p>"
    }, {
      "requiredLevel" : 55,
      "name" : "Deflection",
      "tooltipParams" : "rune/magic-weapon/e",
      "type" : "e",
      "description" : "<p>When you perform an attack, gain a protective shield for <span class=\"d3-color-green\">3</span> seconds that absorbs <span class=\"d3-color-green\">10728</span> damage.</p>",
      "simpleDescription" : "<p>Gain a protective shield when attacking.</p>"
    } ],
    "primary" : false,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Imbue your weapon with magical energy, granting it <span class=\"d3-color-green\">10%</span> increased damage. Lasts <span class=\"d3-color-green\">10</span> minutes.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Imbue your weapon with magical energy, increasing your weapon&#39;s effectiveness.</p>"
  }, {
    "requiredLevel" : 21,
    "orderIndex" : 16,
    "tooltipParams" : "skill/wizard/hydra",
    "categoryName" : "Force",
    "categorySlug" : "force",
    "icon" : "wizard_hydra",
    "name" : "Hydra",
    "slug" : "hydra",
    "runes" : [ {
      "requiredLevel" : 26,
      "name" : "Arcane Hydra",
      "tooltipParams" : "rune/hydra/e",
      "type" : "e",
      "description" : "<p>Summon an Arcane Hydra that spits Arcane Orbs that explode on impact, dealing <span class=\"d3-color-green\">205%</span> weapon damage as Arcane to enemies near the explosion.</p>",
      "simpleDescription" : "<p>Summon an Arcane Hydra that spits Arcane Orbs.</p>"
    }, {
      "requiredLevel" : 33,
      "name" : "Lightning Hydra",
      "tooltipParams" : "rune/hydra/b",
      "type" : "b",
      "description" : "<p>Summon a Lightning Hydra that electrocutes enemies for <span class=\"d3-color-green\">255%</span> weapon damage as Lightning.</p>",
      "simpleDescription" : "<p>Summon a Lightning Hydra that electrocutes enemies.</p>"
    }, {
      "requiredLevel" : 38,
      "name" : "Blazing Hydra",
      "tooltipParams" : "rune/hydra/c",
      "type" : "c",
      "description" : "<p>Summon a Blazing Hydra that spits bolts of Fire that burn enemies near the point of impact, dealing <span class=\"d3-color-green\">155%</span> weapon damage as Fire over <span class=\"d3-color-green\">3</span> seconds. Burn damage can stack multiple times on the same enemy.</p>",
      "simpleDescription" : "<p>Summon a Blazing Hydra that burns enemies.</p>"
    }, {
      "requiredLevel" : 46,
      "name" : "Frost Hydra",
      "tooltipParams" : "rune/hydra/a",
      "type" : "a",
      "description" : "<p>Summon a Frost Hydra that breathes a short range cone of frost, causing <span class=\"d3-color-green\">255%</span> weapon damage as Cold to all enemies in the cone.</p>",
      "simpleDescription" : "<p>Summon a Frost Hydra that breathes frost, chilling enemies it hits.</p>"
    }, {
      "requiredLevel" : 56,
      "name" : "Mammoth Hydra",
      "tooltipParams" : "rune/hydra/d",
      "type" : "d",
      "description" : "<p>Summon a Mammoth Hydra that breathes a river of flame at nearby enemies, dealing <span class=\"d3-color-green\">330%</span> weapon damage per second as Fire to enemies caught on the burning ground.</p>",
      "simpleDescription" : "<p>Summon a Mammoth Hydra that breathes a river of flame, burning enemies caught on the burning ground.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">15</span> Arcane Power</p><p>Summon a multi-headed Hydra for <span class=\"d3-color-green\">15</span> seconds that attacks enemies with bolts of fire dealing <span class=\"d3-color-green\">165%</span> weapon damage as Fire.</p><p><span class=\"d3-color-yellow\">Only one Hydra may be active at a time.</span></p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">15</span> Arcane Power</p><p>Summon a magical Hydra that attacks enemies with bursts of fire.</p>"
  }, {
    "requiredLevel" : 21,
    "orderIndex" : 17,
    "tooltipParams" : "skill/wizard/disintegrate",
    "categoryName" : "Secondary",
    "categorySlug" : "secondary",
    "icon" : "wizard_disintegrate",
    "name" : "Disintegrate",
    "slug" : "disintegrate",
    "runes" : [ {
      "requiredLevel" : 26,
      "name" : "Convergence",
      "tooltipParams" : "rune/disintegrate/b",
      "type" : "b",
      "description" : "<p>Increase the width of the beam allowing it to hit more enemies.</p><p>Disintegrate&#39;s damage turns into Fire.</p>",
      "simpleDescription" : "<p>Increase the width of the beam.</p><p>Disintegrate&#39;s damage turns into Fire.</p>"
    }, {
      "requiredLevel" : 30,
      "name" : "Volatility",
      "tooltipParams" : "rune/disintegrate/e",
      "type" : "e",
      "description" : "<p>Enemies killed by the beam have a <span class=\"d3-color-green\">35%</span> chance to explode causing <span class=\"d3-color-green\">750%</span> weapon damage as Arcane to all enemies within <span class=\"d3-color-green\">8</span> yards.</p>",
      "simpleDescription" : "<p>Enemies killed by the beam have a chance to explode.</p>"
    }, {
      "requiredLevel" : 39,
      "name" : "Entropy",
      "tooltipParams" : "rune/disintegrate/c",
      "type" : "c",
      "description" : "<p>The beam fractures into a short-ranged cone that deals <span class=\"d3-color-green\">435%</span> weapon damage as Arcane.</p><p>Disintegrate damage is increased by <span class=\"d3-color-green\">340%</span> weapon damage every second, up to a maximum total of <span class=\"d3-color-green\">1115%</span> weapon damage as Arcane.</p>",
      "simpleDescription" : "<p>The beam fractures into a short-ranged cone instead.</p>"
    }, {
      "requiredLevel" : 48,
      "name" : "Chaos Nexus",
      "tooltipParams" : "rune/disintegrate/d",
      "type" : "d",
      "description" : "<p>While channeling the beam you become charged with energy and discharge at nearby enemies dealing <span class=\"d3-color-green\">115%</span> weapon damage as Arcane.</p>",
      "simpleDescription" : "<p>While channeling the beam you become charged with energy and discharge at nearby enemies, damaging them.</p>"
    }, {
      "requiredLevel" : 59,
      "name" : "Intensify",
      "tooltipParams" : "rune/disintegrate/a",
      "type" : "a",
      "description" : "<p>Enemies hit by Disintegrate take <span class=\"d3-color-green\">15%</span> increased damage from Arcane for <span class=\"d3-color-green\">4</span> seconds.</p>",
      "simpleDescription" : "<p>Enemies hit by Disintegrate take increased damage from Arcane.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">18</span> Arcane Power</p><p>Channel a beam of pure energy, dealing <span class=\"d3-color-green\">390%</span> weapon damage as Arcane.</p><p>Disintegrate damage is increased by <span class=\"d3-color-green\">250%</span> weapon damage every second, up to a maximum total of <span class=\"d3-color-green\">890%</span> weapon damage as Arcane.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">18</span> Arcane Power</p><p>Channel a beam of pure energy that pierces through all enemies.</p>"
  }, {
    "requiredLevel" : 22,
    "orderIndex" : 18,
    "tooltipParams" : "skill/wizard/familiar",
    "categoryName" : "Conjuration",
    "categorySlug" : "conjuration",
    "icon" : "wizard_familiar",
    "name" : "Familiar",
    "slug" : "familiar",
    "runes" : [ {
      "requiredLevel" : 30,
      "name" : "Sparkflint",
      "tooltipParams" : "rune/familiar/a",
      "type" : "a",
      "description" : "<p>Summon a fiery Familiar that grants you <span class=\"d3-color-green\">10%</span> increased damage.</p>",
      "simpleDescription" : "<p>Summon a fiery Familiar that grants you increased damage.</p>"
    }, {
      "requiredLevel" : 40,
      "name" : "Icicle",
      "tooltipParams" : "rune/familiar/c",
      "type" : "c",
      "description" : "<p>The Familiar&#39;s projectiles have a <span class=\"d3-color-green\">35%</span> chance to Freeze the enemy for <span class=\"d3-color-green\">1</span> second.</p>",
      "simpleDescription" : "<p>The Familiar&#39;s projectile attacks have a chance to Freeze the enemy.</p>"
    }, {
      "requiredLevel" : 44,
      "name" : "Ancient Guardian",
      "tooltipParams" : "rune/familiar/e",
      "type" : "e",
      "description" : "<p>Summon a protective Familiar. When you are below <span class=\"d3-color-green\">50%</span> Life the Familiar will absorb damage from <span class=\"d3-color-green\">1</span> attack every <span class=\"d3-color-green\">6</span> seconds.</p>",
      "simpleDescription" : "<p>Summon a protective Familiar that can absorb attacks for you when your Life is low.</p>"
    }, {
      "requiredLevel" : 50,
      "name" : "Arcanot",
      "tooltipParams" : "rune/familiar/d",
      "type" : "d",
      "description" : "<p>While the Familiar is active, you regenerate <span class=\"d3-color-green\">4.5</span> Arcane Power every second.</p>",
      "simpleDescription" : "<p>While the Familiar is active, you regenerate Arcane Power.</p>"
    }, {
      "requiredLevel" : 57,
      "name" : "Cannoneer",
      "tooltipParams" : "rune/familiar/b",
      "type" : "b",
      "description" : "<p>The Familiar&#39;s projectiles explode on impact, dealing <span class=\"d3-color-green\">240%</span> weapon damage as Arcane to all enemies within <span class=\"d3-color-green\">6</span> yards.</p>",
      "simpleDescription" : "<p>The Familiar&#39;s projectile attacks explode on impact.</p>"
    } ],
    "primary" : false,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">20</span> Arcane Power</p><p>Summon a Familiar that attacks your enemies for <span class=\"d3-color-green\">240%</span> weapon damage as Arcane. This companion cannot be targeted or damaged by enemies. Lasts <span class=\"d3-color-green\">10</span> minutes.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">20</span> Arcane Power</p><p>Summon a mystical Familiar companion. Your Familiar is immune to damage and assists you in combat.</p>"
  }, {
    "requiredLevel" : 22,
    "orderIndex" : 19,
    "tooltipParams" : "skill/wizard/teleport",
    "categoryName" : "Defensive",
    "categorySlug" : "defensive",
    "icon" : "wizard_teleport",
    "name" : "Teleport",
    "slug" : "teleport",
    "runes" : [ {
      "requiredLevel" : 26,
      "name" : "Safe Passage",
      "tooltipParams" : "rune/teleport/c",
      "type" : "c",
      "description" : "<p>For <span class=\"d3-color-green\">5</span> seconds after you Teleport, you will take <span class=\"d3-color-green\">25%</span> less damage.</p>",
      "simpleDescription" : "<p>Take less damage after you Teleport.</p>"
    }, {
      "requiredLevel" : 31,
      "name" : "Wormhole",
      "tooltipParams" : "rune/teleport/e",
      "type" : "e",
      "description" : "<p>After casting Teleport, you have <span class=\"d3-color-green\">3</span> seconds to Teleport <span class=\"d3-color-green\">1</span> additional time.</p>",
      "simpleDescription" : "<p>After casting Teleport, for a short duration you may cast Teleport again.</p>"
    }, {
      "requiredLevel" : 37,
      "name" : "Reversal",
      "tooltipParams" : "rune/teleport/d",
      "type" : "d",
      "description" : "<p>Casting Teleport again within <span class=\"d3-color-green\">5</span> seconds will instantly return you to your original location and set the remaining cooldown to <span class=\"d3-color-green\">1</span> seconds.</p>",
      "simpleDescription" : "<p>Casting Teleport again within <span class=\"d3-color-green\">5</span> seconds instantly returns you to your original location and reduces the remaining cooldown.</p>"
    }, {
      "requiredLevel" : 43,
      "name" : "Fracture",
      "tooltipParams" : "rune/teleport/b",
      "type" : "b",
      "description" : "<p>Summon <span class=\"d3-color-green\">2</span> decoys for <span class=\"d3-color-green\">6</span> seconds after teleporting.</p>",
      "simpleDescription" : "<p>Summon decoys of yourself after teleporting.</p>"
    }, {
      "requiredLevel" : 59,
      "name" : "Calamity",
      "tooltipParams" : "rune/teleport/a",
      "type" : "a",
      "description" : "<p>Cast a short range Wave of Force upon arrival, dealing <span class=\"d3-color-green\">175%</span> weapon damage as Arcane to all nearby enemies and stunning them for <span class=\"d3-color-green\">1</span> second.</p>",
      "simpleDescription" : "<p>Cast a short range Wave of Force that Stuns after teleporting.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">11</span> seconds</p><p>Teleport through the ether to the selected location up to <span class=\"d3-color-green\">50</span> yards away.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">11</span> seconds</p><p>Teleport instantly to another location.</p>"
  }, {
    "requiredLevel" : 25,
    "orderIndex" : 20,
    "tooltipParams" : "skill/wizard/mirror-image",
    "categoryName" : "Mastery",
    "categorySlug" : "mastery",
    "icon" : "wizard_mirrorimage",
    "name" : "Mirror Image",
    "slug" : "mirror-image",
    "runes" : [ {
      "requiredLevel" : 31,
      "name" : "Simulacrum",
      "tooltipParams" : "rune/mirror-image/c",
      "type" : "c",
      "description" : "<p>Increase the Life of your Mirror Images to <span class=\"d3-color-green\">200%</span> of your own.</p>",
      "simpleDescription" : "<p>Increase the Life of your Mirror Images.</p>"
    }, {
      "requiredLevel" : 37,
      "name" : "Duplicates",
      "tooltipParams" : "rune/mirror-image/b",
      "type" : "b",
      "description" : "<p>Summon <span class=\"d3-color-green\">4</span> Mirror Images that taunt nearby enemies for <span class=\"d3-color-green\">1</span> second and each have <span class=\"d3-color-green\">50%</span> of your Life.</p>",
      "simpleDescription" : "<p>Summon more Mirror Images that taunt nearby enemies and have a percentage of your Life.</p>"
    }, {
      "requiredLevel" : 45,
      "name" : "Mocking Demise",
      "tooltipParams" : "rune/mirror-image/e",
      "type" : "e",
      "description" : "<p>When a Mirror Image is destroyed, it explodes, dealing <span class=\"d3-color-green\">309%</span> weapon damage as Arcane with a <span class=\"d3-color-green\">50%</span> chance to Stun for <span class=\"d3-color-green\">2</span> seconds.</p>",
      "simpleDescription" : "<p>When a Mirror Image is destroyed, it explodes, possibly stunning enemies.</p>"
    }, {
      "requiredLevel" : 51,
      "name" : "Extension of Will",
      "tooltipParams" : "rune/mirror-image/d",
      "type" : "d",
      "description" : "<p>Increase the duration of your Mirror Images to <span class=\"d3-color-green\">10</span> seconds and their Life to <span class=\"d3-color-green\">100%</span> of your Life.</p>",
      "simpleDescription" : "<p>Increase the duration and Life of your Mirror Images.</p>"
    }, {
      "requiredLevel" : 58,
      "name" : "Mirror Mimics",
      "tooltipParams" : "rune/mirror-image/a",
      "type" : "a",
      "description" : "<p>Spells cast by your Mirror Images will deal <span class=\"d3-color-green\">20%</span> of the damage of your own spells.</p>",
      "simpleDescription" : "<p>Spells cast by your Mirror Images deal more damage.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">15</span> seconds</p><p>Summon <span class=\"d3-color-green\">2</span> illusionary duplicates of yourself that taunt nearby enemies for <span class=\"d3-color-green\">1</span> second, last for <span class=\"d3-color-green\">7</span> seconds and have <span class=\"d3-color-green\">50%</span> of your Life.</p><p>Spells cast by your Mirror Images will deal <span class=\"d3-color-green\">10%</span> of the damage of your own spells.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">15</span> seconds</p><p>Summon illusions of yourself that taunt nearby enemies. Spells cast by your Mirror Images deal limited damage.</p>"
  }, {
    "requiredLevel" : 25,
    "orderIndex" : 21,
    "tooltipParams" : "skill/wizard/meteor",
    "categoryName" : "Force",
    "categorySlug" : "force",
    "icon" : "wizard_meteor",
    "name" : "Meteor",
    "slug" : "meteor",
    "runes" : [ {
      "requiredLevel" : 29,
      "name" : "Thunder Crash",
      "tooltipParams" : "rune/meteor/e",
      "type" : "e",
      "description" : "<p>Removes the delay before Meteor comes crashing down.</p><p>Meteor&#39;s damage turns into Lightning.</p>",
      "simpleDescription" : "<p>Removes the delay before Meteor comes crashing down.</p><p>Meteor&#39;s damage turns into Lightning.</p>"
    }, {
      "requiredLevel" : 34,
      "name" : "Star Pact",
      "tooltipParams" : "rune/meteor/d",
      "type" : "d",
      "description" : "<p>Expend all remaining Arcane Power. Each point of extra Arcane Power spent increases the impact damage of Meteor by <span class=\"d3-color-green\">20%</span> weapon damage as Arcane.</p>",
      "simpleDescription" : "<p>Expend all remaining Arcane Power. Each point of extra Arcane Power spent increases the impact damage of Meteor.</p><p>Meteor&#39;s damage turns into Arcane.</p>"
    }, {
      "requiredLevel" : 43,
      "name" : "Comet",
      "tooltipParams" : "rune/meteor/c",
      "type" : "c",
      "description" : "<p>Summon a Comet that deals <span class=\"d3-color-green\">740%</span> weapon damage as Cold and freezes chilled enemies for <span class=\"d3-color-green\">1</span> second upon impact.</p><p>The impact site is covered in an icy mist that deals <span class=\"d3-color-green\">235%</span> weapon damage as Cold over <span class=\"d3-color-green\">3</span> seconds.</p>",
      "simpleDescription" : "<p>Summon a Comet that freezes chilled enemies on impact. The impact site is covered in an icy mist that damages and chills enemies.</p>"
    }, {
      "requiredLevel" : 48,
      "name" : "Meteor Shower",
      "tooltipParams" : "rune/meteor/b",
      "type" : "b",
      "description" : "<p>Unleash a volley of <span class=\"d3-color-green\">7</span> small Meteors that each strike for <span class=\"d3-color-green\">277%</span> weapon damage as Fire.</p>",
      "simpleDescription" : "<p>Unleash a volley of small Meteors.</p>"
    }, {
      "requiredLevel" : 58,
      "name" : "Molten Impact",
      "tooltipParams" : "rune/meteor/a",
      "type" : "a",
      "description" : "<p>Greatly increases the size and increases the damage of the Meteor impact to <span class=\"d3-color-green\">1648%</span> weapon damage as Fire and the molten fire to <span class=\"d3-color-green\">625%</span> weapon damage as Fire over <span class=\"d3-color-green\">3</span> seconds.</p><p>Adds a <span class=\"d3-color-green\">15</span> second cooldown.</p>",
      "simpleDescription" : "<p>Increases the damage and affected area of the Meteor impact and the molten fire.</p><p>Adds a <span class=\"d3-color-green\">15</span> second cooldown.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">40</span> Arcane Power</p><p>Summon an immense Meteor that plummets from the sky, crashing into enemies for <span class=\"d3-color-green\">740%</span> weapon damage as Fire. The ground it hits is scorched with molten fire that deals <span class=\"d3-color-green\">235%</span> weapon damage as Fire over <span class=\"d3-color-green\">3</span> seconds.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">40</span> Arcane Power</p><p>Unleash a massive Meteor that scorches enemies caught in its blast.</p>"
  }, {
    "requiredLevel" : 27,
    "orderIndex" : 22,
    "tooltipParams" : "skill/wizard/blizzard",
    "categoryName" : "Force",
    "categorySlug" : "force",
    "icon" : "wizard_blizzard",
    "name" : "Blizzard",
    "slug" : "blizzard",
    "runes" : [ {
      "requiredLevel" : 35,
      "name" : "Lightning Storm",
      "tooltipParams" : "rune/blizzard/c",
      "type" : "c",
      "description" : "<p>Enemies affected by Blizzard take <span class=\"d3-color-green\">15%</span> increased damage from Lightning.</p>",
      "simpleDescription" : "<p>Enemies affected by Blizzard take increased damage from Lightning.</p>"
    }, {
      "requiredLevel" : 42,
      "name" : "Frozen Solid",
      "tooltipParams" : "rune/blizzard/e",
      "type" : "e",
      "description" : "<p>Enemies caught in the Blizzard have a <span class=\"d3-color-green\">100%</span> chance to be Frozen for <span class=\"d3-color-green\">2.5</span> seconds.</p>",
      "simpleDescription" : "<p>Enemies caught in the Blizzard have a chance to be Frozen.</p>"
    }, {
      "requiredLevel" : 47,
      "name" : "Snowbound",
      "tooltipParams" : "rune/blizzard/d",
      "type" : "d",
      "description" : "<p>Reduce the casting cost of Blizzard to <span class=\"d3-color-green\">10</span> Arcane Power.</p>",
      "simpleDescription" : "<p>Reduce the casting cost of Blizzard.</p>"
    }, {
      "requiredLevel" : 54,
      "name" : "Apocalypse",
      "tooltipParams" : "rune/blizzard/b",
      "type" : "b",
      "description" : "<p>Increase the area of effect of Blizzard to a <span class=\"d3-color-green\">30</span> yard radius.</p><p>Blizzard&#39;s damage turns into Fire.</p>",
      "simpleDescription" : "<p>Increase the area of effect of Blizzard.</p><p>Blizzard&#39;s damage turns into Fire.</p>"
    }, {
      "requiredLevel" : 60,
      "name" : "Unrelenting Storm",
      "tooltipParams" : "rune/blizzard/a",
      "type" : "a",
      "description" : "<p>Increase the duration and damage of Blizzard to deal <span class=\"d3-color-green\">1810%</span> weapon damage as Cold over <span class=\"d3-color-green\">8</span> seconds.</p>",
      "simpleDescription" : "<p>Increase the duration and damage of Blizzard.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">40</span> Arcane Power</p><p>Call down shards of ice that deal <span class=\"d3-color-green\">1075%</span> weapon damage as Cold over <span class=\"d3-color-green\">6</span> seconds to enemies in a <span class=\"d3-color-green\">12</span> yard radius. Multiple casts in the same area from the same caster do not stack.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">40</span> Arcane Power</p><p>Unleash a Blizzard that damages and Slows enemies caught in its grasp.</p>"
  }, {
    "requiredLevel" : 28,
    "orderIndex" : 23,
    "tooltipParams" : "skill/wizard/energy-armor",
    "categoryName" : "Conjuration",
    "categorySlug" : "conjuration",
    "icon" : "wizard_energyarmor",
    "name" : "Energy Armor",
    "slug" : "energy-armor",
    "runes" : [ {
      "requiredLevel" : 32,
      "name" : "Absorption",
      "tooltipParams" : "rune/energy-armor/d",
      "type" : "d",
      "description" : "<p>You have a chance to gain <span class=\"d3-color-green\">4</span> Arcane Power when you are hit by a ranged or melee attack.</p>",
      "simpleDescription" : "<p>You have a chance to gain Arcane Power when you are hit by a ranged or melee attack.</p>"
    }, {
      "requiredLevel" : 41,
      "name" : "Pinpoint Barrier",
      "tooltipParams" : "rune/energy-armor/e",
      "type" : "e",
      "description" : "<p>Energy Armor also increases your Critical Hit Chance by <span class=\"d3-color-green\">5%</span>.</p>",
      "simpleDescription" : "<p>Energy Armor also increases your Critical Hit Chance.</p>"
    }, {
      "requiredLevel" : 48,
      "name" : "Energy Tap",
      "tooltipParams" : "rune/energy-armor/b",
      "type" : "b",
      "description" : "<p>Rather than decreasing your maximum Arcane Power, Energy Armor increases it by <span class=\"d3-color-green\">20</span>.</p>",
      "simpleDescription" : "<p>Energy Armor increases maximum Arcane Power instead of decreasing it.</p>"
    }, {
      "requiredLevel" : 54,
      "name" : "Force Armor",
      "tooltipParams" : "rune/energy-armor/c",
      "type" : "c",
      "description" : "<p>Incoming attacks that would deal more than <span class=\"d3-color-green\">35%</span> of your maximum Life are reduced to deal <span class=\"d3-color-green\">35%</span> of your maximum Life instead.</p><p>The amount absorbed cannot exceed <span class=\"d3-color-green\">100%</span> of your maximum Life.</p>",
      "simpleDescription" : "<p>Incoming attacks have their damage limited to a percentage of your maximum Life.</p>"
    }, {
      "requiredLevel" : 60,
      "name" : "Prismatic Armor",
      "tooltipParams" : "rune/energy-armor/a",
      "type" : "a",
      "description" : "<p>Energy Armor also increases your resistance to all damage types <span class=\"d3-color-green\">25%</span>.</p>",
      "simpleDescription" : "<p>Energy Armor also increases your resistance to all damage types.</p>"
    } ],
    "primary" : false,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Focus your energies, increasing your Armor by <span class=\"d3-color-green\">35%</span> but decreasing your maximum Arcane Power by <span class=\"d3-color-green\">20</span>. Lasts <span class=\"d3-color-green\">10</span> minutes.</p><p><span class=\"d3-color-yellow\">Only one Armor may be active at a time.</span></p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">25</span> Arcane Power</p><p>Increase your Armor at the cost of decreasing your maximum Arcane Power while Energy Armor is active.</p><p><span class=\"d3-color-yellow\">Only one Armor may be active at a time.</span></p>"
  }, {
    "requiredLevel" : 30,
    "orderIndex" : 24,
    "tooltipParams" : "skill/wizard/archon",
    "categoryName" : "Mastery",
    "categorySlug" : "mastery",
    "icon" : "wizard_archon",
    "name" : "Archon",
    "slug" : "archon",
    "runes" : [ {
      "requiredLevel" : 36,
      "name" : "Combustion",
      "tooltipParams" : "rune/archon/e",
      "type" : "e",
      "description" : "<p>An explosion erupts around you when you transform, dealing <span class=\"d3-color-green\">3680%</span> weapon damage as Fire to all enemies within <span class=\"d3-color-green\">15</span> yards.</p><p>Archon abilities deal <span class=\"d3-color-green\">Fire</span> damage instead of Arcane.</p>",
      "simpleDescription" : "<p>An explosion erupts around you when you transform.</p><p>Archon abilities deal <span class=\"d3-color-green\">Fire</span> damage instead of Arcane.</p>"
    }, {
      "requiredLevel" : 40,
      "name" : "Teleport",
      "tooltipParams" : "rune/archon/c",
      "type" : "c",
      "description" : "<p>Archon form can cast <span class=\"d3-color-green\">Teleport</span> with a <span class=\"d3-color-green\">3</span> second cooldown.</p>",
      "simpleDescription" : "<p>Can cast <span class=\"d3-color-green\">Teleport</span> in Archon form.</p>"
    }, {
      "requiredLevel" : 46,
      "name" : "Pure Power",
      "tooltipParams" : "rune/archon/d",
      "type" : "d",
      "description" : "<p>Decrease the cooldown of Archon to <span class=\"d3-color-green\">100</span> seconds.</p><p>Archon abilities deal <span class=\"d3-color-green\">Lightning</span> damage instead of Arcane.</p>",
      "simpleDescription" : "<p>Decrease the cooldown of Archon.</p><p>Archon abilities deal <span class=\"d3-color-green\">Lightning</span> damage instead of Arcane.</p>"
    }, {
      "requiredLevel" : 52,
      "name" : "Slow Time",
      "tooltipParams" : "rune/archon/b",
      "type" : "b",
      "description" : "<p>Archon form can cast a <span class=\"d3-color-green\">Slow Time</span> that follows you.</p><p>Archon abilities deal <span class=\"d3-color-green\">Cold</span> damage instead of Arcane.</p>",
      "simpleDescription" : "<p>Archon form can cast a <span class=\"d3-color-green\">Slow Time</span> that follows you.</p><p>Archon abilities deal <span class=\"d3-color-green\">Cold</span> damage instead of Arcane.</p>"
    }, {
      "requiredLevel" : 60,
      "name" : "Improved Archon",
      "tooltipParams" : "rune/archon/a",
      "type" : "a",
      "description" : "<p>Increase the damage of all Archon abilities by <span class=\"d3-color-green\">22%</span>.</p>",
      "simpleDescription" : "<p>Increase the damage of all Archon abilities.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">120</span> seconds</p><p>Transform into a being of pure arcane energy for <span class=\"d3-color-green\">20</span> seconds. While in Archon form, your normal abilities are replaced by powerful Archon abilities and your damage, Armor and resistances are increased by <span class=\"d3-color-green\">20%</span>.</p><p>Each enemy killed while in Archon form increases your damage by <span class=\"d3-color-green\">6%</span> for the remaining duration of Archon.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">120</span> seconds</p><p>Become a being of pure energy and gain potent new abilities for <span class=\"d3-color-green\">20</span> seconds.</p>"
  }, {
    "requiredLevel" : 61,
    "orderIndex" : 25,
    "tooltipParams" : "skill/wizard/black-hole",
    "categoryName" : "Mastery",
    "categorySlug" : "mastery",
    "icon" : "x1_wizard_wormhole",
    "name" : "Black Hole",
    "slug" : "black-hole",
    "runes" : [ {
      "requiredLevel" : 62,
      "name" : "Supermassive",
      "tooltipParams" : "rune/black-hole/a",
      "type" : "a",
      "description" : "<p>Increases the Black Hole radius to <span class=\"d3-color-green\">20</span> yards and damage to <span class=\"d3-color-green\">1290%</span> weapon damage as Lightning over <span class=\"d3-color-green\">2</span> seconds.</p>",
      "simpleDescription" : "<p>Increases the radius and damage of Black Hole.</p><p>Black Hole&#39;s damage turns into Lightning.</p>"
    }, {
      "requiredLevel" : 63,
      "name" : "Absolute Zero",
      "tooltipParams" : "rune/black-hole/e",
      "type" : "e",
      "description" : "<p>Each enemy hit increases the damage of your Cold spells by <span class=\"d3-color-green\">3%</span> for <span class=\"d3-color-green\">10</span> seconds.</p><p>Black Hole&#39;s damage turns into Cold.</p>",
      "simpleDescription" : "<p>Each enemy hit increases the damage of your Cold spells for a short duration.</p><p>Black Hole&#39;s damage turns into Cold.</p>"
    }, {
      "requiredLevel" : 65,
      "name" : "Event Horizon",
      "tooltipParams" : "rune/black-hole/b",
      "type" : "b",
      "description" : "<p>The Black Hole also absorbs enemy projectiles and objects from Elite monster affixes within <span class=\"d3-color-green\">15</span> yards.</p>",
      "simpleDescription" : "<p>The Black Hole also absorbs enemy projectiles and objects from Elite monster affixes.</p>"
    }, {
      "requiredLevel" : 67,
      "name" : "Blazar",
      "tooltipParams" : "rune/black-hole/c",
      "type" : "c",
      "description" : "<p>Conjure a Black Hole at the target location that draws enemies to it and deals <span class=\"d3-color-green\">700%</span> weapon damage as Fire over <span class=\"d3-color-green\">2</span> seconds to all enemies within <span class=\"d3-color-green\">15</span> yards.</p><p>After the Black Hole disappears, an explosion occurs that deals <span class=\"d3-color-green\">725%</span> weapon damage as Fire to enemies within <span class=\"d3-color-green\">15</span> yards.</p>",
      "simpleDescription" : "<p>A fiery explosion occurs after the Black Hole disappears.</p><p>Black Hole&#39;s damage turns into Fire.</p>"
    }, {
      "requiredLevel" : 69,
      "name" : "Spellsteal",
      "tooltipParams" : "rune/black-hole/d",
      "type" : "d",
      "description" : "<p>Enemies hit by Black Hole deal <span class=\"d3-color-green\">10%</span> reduced damage for <span class=\"d3-color-green\">5</span> seconds. Each enemy hit by Black Hole grants you <span class=\"d3-color-green\">3%</span> increased damage for <span class=\"d3-color-green\">5</span> seconds.</p>",
      "simpleDescription" : "<p>Enemies hit by Black Hole deal reduced damage. Each enemy hit by Black Hole grants you increased damage.</p>"
    } ],
    "primary" : true,
    "description" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">20</span> Arcane Power<br/><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">12</span> seconds</p><p>Conjure a Black Hole at the target location that draws enemies to it and deals <span class=\"d3-color-green\">700%</span> weapon damage as Arcane over <span class=\"d3-color-green\">2</span> seconds to all enemies within <span class=\"d3-color-green\">15</span> yards.</p>",
    "simpleDescription" : "<p><span class=\"d3-color-gold\">Cost:</span> <span class=\"d3-color-green\">20</span> Arcane Power<br/><span class=\"d3-color-gold\">Cooldown:</span> <span class=\"d3-color-green\">12</span> seconds</p><p>Conjure a Black Hole that draws enemies to it and deals damage.</p>"
  } ],
  "traits" : [ {
    "requiredLevel" : 10,
    "orderIndex" : 0,
    "tooltipParams" : "skill/wizard/power-hungry",
    "icon" : "wizard_passive_powerhungry",
    "name" : "Power Hungry",
    "slug" : "power-hungry",
    "description" : "<p>Being healed by a health globe causes the next Arcane Power Spender you cast to be cast for free.</p><p>You can have up to <span class=\"d3-color-green\">10</span> charges of Power Hungry.</p>",
    "simpleDescription" : "<p>Being healed by a health globe causes the next Arcane Power Spender you cast to be cast for free.</p><p>You can have up to <span class=\"d3-color-green\">10</span> charges of Power Hungry.</p>"
  }, {
    "requiredLevel" : 10,
    "orderIndex" : 1,
    "tooltipParams" : "skill/wizard/blur",
    "icon" : "wizard_passive_blur",
    "name" : "Blur",
    "slug" : "blur",
    "description" : "<p>Decrease damage taken by <span class=\"d3-color-green\">17%</span>.</p>",
    "simpleDescription" : "<p>Decrease damage taken by <span class=\"d3-color-green\">17%</span>.</p>"
  }, {
    "requiredLevel" : 13,
    "orderIndex" : 2,
    "tooltipParams" : "skill/wizard/evocation",
    "icon" : "wizard_passive_evocation",
    "name" : "Evocation",
    "slug" : "evocation",
    "description" : "<p>Reduce all cooldowns by <span class=\"d3-color-green\">20%</span>.</p>",
    "simpleDescription" : "<p>Reduce all cooldowns by <span class=\"d3-color-green\">20%</span>.</p>"
  }, {
    "requiredLevel" : 16,
    "orderIndex" : 3,
    "tooltipParams" : "skill/wizard/glass-cannon",
    "icon" : "wizard_passive_glasscannon",
    "name" : "Glass Cannon",
    "slug" : "glass-cannon",
    "description" : "<p>Increase all damage done by <span class=\"d3-color-green\">15%</span>, but decrease Armor and resistances by <span class=\"d3-color-green\">10%</span>.</p>",
    "simpleDescription" : "<p>Increase all damage done by <span class=\"d3-color-green\">15%</span>, but decrease Armor and resistances by <span class=\"d3-color-green\">10%</span>.</p>"
  }, {
    "requiredLevel" : 20,
    "orderIndex" : 4,
    "tooltipParams" : "skill/wizard/prodigy",
    "icon" : "wizard_passive_prodigy",
    "name" : "Prodigy",
    "slug" : "prodigy",
    "description" : "<p>When you cast a Signature spell, you gain <span class=\"d3-color-green\">5</span> Arcane Power.</p><p>The following skills are Signature spells:<br/><span class=\"tooltip-icon-bullet\"></span> Magic Missile<br/><span class=\"tooltip-icon-bullet\"></span> Shock Pulse<br/><span class=\"tooltip-icon-bullet\"></span> Spectral Blade<br/><span class=\"tooltip-icon-bullet\"></span> Electrocute</p>",
    "simpleDescription" : "<p>When you cast a Signature spell, you gain <span class=\"d3-color-green\">5</span> Arcane Power.</p><p>The following skills are Signature spells:<br/><span class=\"tooltip-icon-bullet\"></span> Magic Missile<br/><span class=\"tooltip-icon-bullet\"></span> Shock Pulse<br/><span class=\"tooltip-icon-bullet\"></span> Spectral Blade<br/><span class=\"tooltip-icon-bullet\"></span> Electrocute</p>"
  }, {
    "requiredLevel" : 24,
    "orderIndex" : 5,
    "tooltipParams" : "skill/wizard/astral-presence",
    "icon" : "wizard_passive_astralpresence",
    "name" : "Astral Presence",
    "slug" : "astral-presence",
    "description" : "<p>Increase your maximum Arcane Power by <span class=\"d3-color-green\">20</span> and Arcane Power regeneration by <span class=\"d3-color-green\">2.5</span> per second.</p>",
    "simpleDescription" : "<p>Increase your maximum Arcane Power by <span class=\"d3-color-green\">20</span> and Arcane Power regeneration by <span class=\"d3-color-green\">2.5</span> per second.</p>"
  }, {
    "requiredLevel" : 27,
    "orderIndex" : 6,
    "tooltipParams" : "skill/wizard/illusionist",
    "icon" : "wizard_passive_illusionist",
    "name" : "Illusionist",
    "slug" : "illusionist",
    "description" : "<p>When you take more than <span class=\"d3-color-green\">15%</span> of your maximum Life in damage within <span class=\"d3-color-green\">1</span> second, the cooldowns on Mirror Image, Slow Time, and Teleport are reset.</p><p>When you use Mirror Image, Slow Time, or Teleport, your movement speed is increased by <span class=\"d3-color-green\">30%</span> for <span class=\"d3-color-green\">3</span> seconds.</p>",
    "simpleDescription" : "<p>When you take more than <span class=\"d3-color-green\">15%</span> of your maximum Life in damage within <span class=\"d3-color-green\">1</span> second, the cooldowns on Mirror Image, Slow Time, and Teleport are reset.</p><p>When you use Mirror Image, Slow Time, or Teleport, your movement speed is increased by <span class=\"d3-color-green\">30%</span> for <span class=\"d3-color-green\">3</span> seconds.</p>"
  }, {
    "requiredLevel" : 30,
    "orderIndex" : 7,
    "tooltipParams" : "skill/wizard/cold-blooded",
    "icon" : "wizard_passive_coldblooded",
    "name" : "Cold Blooded",
    "slug" : "cold-blooded",
    "description" : "<p>Enemies chilled or frozen by you take <span class=\"d3-color-green\">10%</span> more damage from all sources for the duration of the chill or Freeze.</p>",
    "simpleDescription" : "<p>Enemies chilled or frozen by you take <span class=\"d3-color-green\">10%</span> more damage from all sources for the duration of the chill or Freeze.</p>"
  }, {
    "requiredLevel" : 34,
    "orderIndex" : 8,
    "tooltipParams" : "skill/wizard/conflagration",
    "icon" : "wizard_passive_conflagration",
    "name" : "Conflagration",
    "slug" : "conflagration",
    "description" : "<p>Fire damage dealt to enemies applies a burning effect, increasing their chance to be critically hit by <span class=\"d3-color-green\">6%</span> for <span class=\"d3-color-green\">3</span> seconds.</p>",
    "simpleDescription" : "<p>Fire damage dealt to enemies applies a burning effect, increasing their chance to be critically hit by <span class=\"d3-color-green\">6%</span> for <span class=\"d3-color-green\">3</span> seconds.</p>"
  }, {
    "requiredLevel" : 37,
    "orderIndex" : 9,
    "tooltipParams" : "skill/wizard/paralysis",
    "icon" : "wizard_passive_paralysis",
    "name" : "Paralysis",
    "slug" : "paralysis",
    "description" : "<p>Lightning spells have a <span class=\"d3-color-green\">15%</span> chance to Stun all targets hit for <span class=\"d3-color-green\">1.5</span> seconds.</p>",
    "simpleDescription" : "<p>Lightning spells have a <span class=\"d3-color-green\">15%</span> chance to Stun all targets hit for <span class=\"d3-color-green\">1.5</span> seconds.</p>"
  }, {
    "requiredLevel" : 40,
    "orderIndex" : 10,
    "tooltipParams" : "skill/wizard/galvanizing-ward",
    "icon" : "wizard_passive_galvanizingward",
    "name" : "Galvanizing Ward",
    "slug" : "galvanizing-ward",
    "description" : "<p>As long as you have not taken damage in the last <span class=\"d3-color-green\">5</span> seconds you gain a protective shield that absorbs the next <span class=\"d3-color-green\">81536</span> damage.</p>",
    "simpleDescription" : "<p>As long as you have not taken damage in the last <span class=\"d3-color-green\">5</span> seconds you gain a protective shield that absorbs the next <span class=\"d3-color-green\">81536</span> damage.</p>"
  }, {
    "requiredLevel" : 45,
    "orderIndex" : 11,
    "tooltipParams" : "skill/wizard/temporal-flux",
    "icon" : "wizard_passive_temporalflux",
    "name" : "Temporal Flux",
    "slug" : "temporal-flux",
    "description" : "<p>Enemies that take Arcane damage are slowed by <span class=\"d3-color-green\">80%</span> for <span class=\"d3-color-green\">2</span> seconds.</p>",
    "simpleDescription" : "<p>Enemies that take Arcane damage are slowed by <span class=\"d3-color-green\">80%</span> for <span class=\"d3-color-green\">2</span> seconds.</p>"
  }, {
    "requiredLevel" : 50,
    "orderIndex" : 12,
    "tooltipParams" : "skill/wizard/dominance",
    "icon" : "x1_wizard_passive_arcaneaegis",
    "name" : "Dominance",
    "slug" : "dominance",
    "description" : "<p>Killing an enemy grants a shield that absorbs <span class=\"d3-color-green\">16093</span> damage for <span class=\"d3-color-green\">3</span> seconds. This effect can stack up to <span class=\"d3-color-green\">10</span> times.</p><p>Refreshing Dominance will set the shield to its maximum possible potency and each stack will increase its total duration by <span class=\"d3-color-green\">0.5</span> seconds.</p>",
    "simpleDescription" : "<p>Killing an enemy grants a shield that absorbs <span class=\"d3-color-green\">16093</span> damage for <span class=\"d3-color-green\">3</span> seconds. This effect can stack up to <span class=\"d3-color-green\">10</span> times.</p><p>Refreshing Dominance will set the shield to its maximum possible potency and each stack will increase its total duration by <span class=\"d3-color-green\">0.5</span> seconds.</p>"
  }, {
    "requiredLevel" : 55,
    "orderIndex" : 13,
    "tooltipParams" : "skill/wizard/arcane-dynamo",
    "icon" : "wizard_passive_arcanedynamo",
    "name" : "Arcane Dynamo",
    "slug" : "arcane-dynamo",
    "description" : "<p>When you cast a Signature spell, you gain a Flash of Insight. After <span class=\"d3-color-green\">5</span> Flashes of Insight, your next non-Signature spell deals <span class=\"d3-color-green\">60%</span> additional damage. </p><p>The following skills are Signature spells:<br/><span class=\"tooltip-icon-bullet\"></span> Magic Missile<br/><span class=\"tooltip-icon-bullet\"></span> Shock Pulse<br/><span class=\"tooltip-icon-bullet\"></span> Spectral Blade<br/><span class=\"tooltip-icon-bullet\"></span> Electrocute</p>",
    "simpleDescription" : "<p>When you cast a Signature spell, you gain a Flash of Insight. After <span class=\"d3-color-green\">5</span> Flashes of Insight, your next non-Signature spell deals <span class=\"d3-color-green\">60%</span> additional damage. </p><p>The following skills are Signature spells:<br/><span class=\"tooltip-icon-bullet\"></span> Magic Missile<br/><span class=\"tooltip-icon-bullet\"></span> Shock Pulse<br/><span class=\"tooltip-icon-bullet\"></span> Spectral Blade<br/><span class=\"tooltip-icon-bullet\"></span> Electrocute</p>"
  }, {
    "requiredLevel" : 60,
    "orderIndex" : 14,
    "tooltipParams" : "skill/wizard/unstable-anomaly",
    "icon" : "wizard_passive_unstableanomaly",
    "name" : "Unstable Anomaly",
    "slug" : "unstable-anomaly",
    "description" : "<p>When you receive fatal damage, you heal to <span class=\"d3-color-green\">45%</span> of your maximum Life and release a shockwave that knocks enemies back and slows them by <span class=\"d3-color-green\">60%</span> for <span class=\"d3-color-green\">3</span> seconds. </p><p>This effect may occur once every <span class=\"d3-color-green\">60</span> seconds.</p>",
    "simpleDescription" : "<p>When you receive fatal damage, you heal to <span class=\"d3-color-green\">45%</span> of your maximum Life and release a shockwave that knocks enemies back and slows them by <span class=\"d3-color-green\">60%</span> for <span class=\"d3-color-green\">3</span> seconds. </p><p>This effect may occur once every <span class=\"d3-color-green\">60</span> seconds.</p>"
  }, {
    "requiredLevel" : 64,
    "orderIndex" : 15,
    "tooltipParams" : "skill/wizard/unwavering-will",
    "icon" : "x1_wizard_passive_unwaveringwill",
    "name" : "Unwavering Will",
    "slug" : "unwavering-will",
    "description" : "<p>Standing still for <span class=\"d3-color-green\">1.5</span> seconds increases the following attributes:</p><p><span class=\"tooltip-icon-bullet\"></span> Armor: <span class=\"d3-color-green\">20%</span><br/><span class=\"tooltip-icon-bullet\"></span> All Resistances: <span class=\"d3-color-green\">20%</span><br/><span class=\"tooltip-icon-bullet\"></span> Damage: <span class=\"d3-color-green\">10%</span></p>",
    "simpleDescription" : "<p>Standing still for <span class=\"d3-color-green\">1.5</span> seconds increases the following attributes:</p><p><span class=\"tooltip-icon-bullet\"></span> Armor: <span class=\"d3-color-green\">20%</span><br/><span class=\"tooltip-icon-bullet\"></span> All Resistances: <span class=\"d3-color-green\">20%</span><br/><span class=\"tooltip-icon-bullet\"></span> Damage: <span class=\"d3-color-green\">10%</span></p>"
  }, {
    "requiredLevel" : 66,
    "orderIndex" : 16,
    "tooltipParams" : "skill/wizard/audacity",
    "icon" : "x1_wizard_passive_audacity",
    "name" : "Audacity",
    "slug" : "audacity",
    "description" : "<p>You deal <span class=\"d3-color-green\">15%</span> additional damage to enemies within <span class=\"d3-color-green\">15</span> yards.</p>",
    "simpleDescription" : "<p>You deal <span class=\"d3-color-green\">15%</span> additional damage to enemies within <span class=\"d3-color-green\">15</span> yards.</p>"
  }, {
    "requiredLevel" : 68,
    "orderIndex" : 17,
    "tooltipParams" : "skill/wizard/elemental-exposure",
    "icon" : "x1_wizard_passive_elementalexposure",
    "name" : "Elemental Exposure",
    "slug" : "elemental-exposure",
    "description" : "<p>Damaging enemies with Arcane, Cold, Fire or Lightning will cause them to take <span class=\"d3-color-green\">5%</span> more damage from all sources for <span class=\"d3-color-green\">5</span> seconds. Each different damage type applies a stack, stacking up to <span class=\"d3-color-green\">4</span> times.</p><p>Elemental damage from your weapon contributes to Elemental Exposure.</p>",
    "simpleDescription" : "<p>Damaging enemies with Arcane, Cold, Fire or Lightning will cause them to take <span class=\"d3-color-green\">5%</span> more damage from all sources for <span class=\"d3-color-green\">5</span> seconds. Each different damage type applies a stack, stacking up to <span class=\"d3-color-green\">4</span> times.</p><p>Elemental damage from your weapon contributes to Elemental Exposure.</p>"
  } ]
};
