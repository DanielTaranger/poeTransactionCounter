const elements = document.querySelectorAll(".packageName", ".el", ".FontinBold");
const microtransactions = {
    // PoE2 Early Access
    "Path of Exile 2 Early Access": 30,
    "Lord of Ogham": 60,
    "King of the Faridun": 100,
    "Thaumaturge of the Vaal": 160,
    "Warlord of the Karui": 240,
    "Liberator of Wraeclast": 480,

    // Settlers of Kalguur
    "Paladin": 30,
    "Divine Paladin": 60,
    "Sacred Paladin": 90,
    // the first packs with apostrophes
    "Penance": 30,
    "Acolyte's Penance": 60,
    "Acolytes Penance": 60,
    "Zealot's Penance": 90,
    "Zealots Penance": 90,

    // Exilecon 2023
    "Exilecon 2023 Ultra VIP": 2000,
    "Exilecon 2023 VIP": 700,
    "Exilecon 2023": 230,
    // will never acually match
    // because "Exilecon 2023" is more expensive
    // TODO: implement Levenshtein distance?
    "Exilecon 2023 Balcony Ticket": 210,

    // Exilecon 2019
    "Exilecon Ultra VIP": 1000,
    "Exilecon VIP": 500,
    "Exilecon": 200,
    // will never acually match
    // because "Exilecon" is more expensive
    // TODO: implement Levenshtein distance?
    "Exilecon Balcony Ticket": 180,

    // Necropolis
    "Solar": 30,
    "Solar Knight": 60,
    "Solar Guardian": 90,
    "Eldritch": 30,
    "Eldritch Hunger": 60,
    "Eldritch Horror": 90,

    // 2024 Core
    "Kalguuran Runesmith": 60,
    "Shackled Immortal": 100,
    "Vaal Serpent-God": 160,
    "Karui Elemancer": 240,
    "Sandwraith Assassin": 480,

    // Trial of the Ancestors
    "Shade": 30,
    "Haunting Shade": 60,
    "Midnight Shade": 90,
    "Disciple": 30,
    "Ardent Disciple": 60,
    "Devoted Disciple": 90,

    // Crucible
    "Lithomancer": 30,
    "Ancestral Lithomancer": 60,
    "Ancient Lithomancer": 90,
    "Enchanter": 30,
    "Master Enchanter": 60,
    "High Enchanter": 90,

    // 2023 Core
    "Tormentor": 60,
    "Hellfire": 100,
    "Bloodthirsty": 160,
    "Chronomancer": 240,
    "Voidborn": 480,

    // The Forbidden Sanctum
    "Forgekeeper": 30,
    "Forgeguard": 60,
    "Forgemaster": 90,
    "Gemling": 30,
    "Gemling Artificer": 60,
    "Gemling Sage": 90,

    // Lake of Kalandra
    "Knight": 30,
    "Knightmaster": 60,
    "Knightlord": 90,
    "Rogue": 30,
    "Rogue Stalker": 60,
    "Rogue Overseer": 90,

    // Sentinel
    "Reaper": 30,
    "Savage Reaper": 60,
    "Sanguine Reaper": 90,
    "Arcanist": 30,
    "Esteemed Arcanist": 60,
    "Grand Arcanist": 90,

    // Archnemesis
    "Wyrm": 30,
    "Wyrmcaller": 60,
    "Wyrmlord": 90,
    "Emberkeep": 30,
    "Elite Emberkeep": 60,
    "Supreme Emberkeep": 90,

    // 2022 Core
    "Imperator": 60,
    "Nullifier": 100,
    "Annihilator": 160,
    "Ravager": 240,
    "Incinerator": 480,

    // Scourge
    "Liege": 30,
    "Intrepid Liege": 60,
    "Triumphant Liege": 90,
    "Dread": 30,
    "Ancient Dread": 60,
    "Primordial Dread": 90,

    // Expedition
    "Soulkeeper": 30,
    "Soulkeeper Vizier": 60,
    // ggg has misspelled this in the account transactions list
    "Soulkeepr Vizier": 60,
    "Soulkeeper Demigod": 90,
    "Aesir": 30,
    "Aesir Warrior": 60,
    "Aesir Demigod": 90,

    // Ultimatum
    "Sun": 30,
    "Imperial Sun": 60,
    "Crescent": 30,
    "Silver Crescent": 60,

    // Ritual
    "Renegade": 30,
    "Deadly Renegade": 60,
    "Faithsworn": 30,
    "Elite Faithsworn": 60,

    // 2021 Core
    "Delve Core": 60,
    "Breach Core": 100,
    "Abyss Core": 160,
    "Harvest Core": 240,
    "Atlas Core": 480,

    // Heist
    "Spellblade": 30,
    "Master Spellblade": 60,
    "Eagle": 30,
    "Imperial Eagle": 60,

    // Harvest
    "Malice": 30,
    "Insatiable Malice": 60,
    "Benevolence": 30,
    "Divine Benevolence": 60,

    // Delirium
    "Fateweaver": 30,
    "Elite Fateweaver": 60,
    "Darkseer": 30,
    "Elder Darkseer": 60,

    // 2020 Core
    "Basilisk": 60,
    "Crusader": 100,
    "Eyrie": 160,
    "Judicator": 240,
    "Orion": 480,

    // Metamorph
    "Sanctum": 30,
    "Grand Sanctum": 60,
    "Damnation": 30,
    "Eternal Damnation": 60,

    // Blight
    "Sentinel": 30,
    "Sentinel Overlord": 60,
    "Lich": 30,
    "Bane Lich": 60,

    // Legion
    "Cult of Darkness": 30,
    "Cult of Apocalypse": 60,
    "Blood Knight": 30,
    "Blood Guardian": 60,

    // Synthesis
    "Sunstone": 30,
    "Sunspire": 60,
    "Doomcrow": 30,
    "Doomguard": 60,

    // 2019 Core
    "Pitfighter": 60,
    "Assassin": 100,
    "Vanguard": 160,
    "Empyrean": 240,
    "Crucible": 480,

    // Betrayal
    "Undertaker": 30,
    "Master Undertaker": 60,
    "Soulstealer": 30,
    "Master Soulstealer": 60,

    // Delve
    "Stalker": 30,
    "Shadowstalker": 60,
    "Forge": 30,
    "Dreadforge": 60,

    // Incursion
    "Council": 30,
    "High Council": 60,
    "Conquest": 30,
    "Grand Conquest": 60,

    // Bestiary
    "Harpy": 30,
    "Alpha Harpy": 60,
    "Manticore": 30,
    "Alpha Manticore": 60,

    // First Blood
    "First Blood": 20,

    // Abyss
    "Abyssal Imp": 60,
    "Abyssal Lich": 60,

    // War for the Atlas
    "Vagabond": 30,
    "Seeker": 60,
    "Scholar": 100,
    "Redeemer": 160,
    "Subjugator": 240,
    "Dominator": 480,

    // Harbinger
    "Portent": 30,
    "Harbinger": 60,

    // The Fall of Oriath
    "Oriath": 30,
    "Outlaw": 60,
    "Legion": 100,
    "Eclipse": 160,
    "Beast": 240,
    "Kitava": 480,

    // Legacy
    "Classic": 30,
    "Legacy": 60,

    // Breach
    "Breachspawn": 30,
    "Breachlord": 60,

    // Atlas of Worlds
    "Minotaur": 50,
    "Hydra": 110,
    "Chimera": 220,
    "Phoenix": 440,

    // Prophecy
    "Prophecy": 60,

    // Ascendancy
    "Aspirant": 50,
    "Challenger": 110,
    "Sovereign": 220,
    "Ascendant": 440,

    // The Awakening
    "Awakening": 30,
    "Axiom": 60,
    "Vaal": 130,
    "Lunaris": 260,
    "Highgate": 1100,

    // Forsaken Masters
    "Apprentice Pack": 50,
    "Apprentice Supporter Pack": 50,
    "Journeyman Pack": 100,
    "Journeyman Supporter Pack": 100,
    "Master Pack": 200,
    "Master Supporter Pack": 200,
    "Grandmaster Pack": 500,
    "Grandmaster Supporter Pack": 500,

    // Release
    "Survivor Supporter Pack": 50,
    "Survivor Pack": 50,
    "Warrior Pack": 120,
    "Warrior Supporter Pack": 120,
    "Champion Pack": 280,
    "Champion Supporter Pack": 280,
    "Conqueror Pack": 900,
    "Conqueror Supporter Pack": 900,

    // Open Beta
    "Open Beta": 30,
    "Regal Pack": 50,
    "Regal Supporter Pack": 50,
    "Divine Pack": 110,
    "Divine Supporter Pack": 110,
    "Exalted Pack": 270,
    "Exalted Supporter Pack": 270,
    "Eternal Pack": 1500,
    "Eternal Supporter Pack": 1500,
    "Ruler of Wraeclast": 12500,

    // Closed Beta
    "Early Access": 10,
    "Closed Beta": 15,
    "Kiwi Pack": 25,
    "Bronze Pack": 50,
    "Bronze Supporter Pack": 50,
    "Silver Pack": 100,
    "Silver Supporter Pack": 100,
    "Gold Pack": 250,
    "Gold Supporter Pack": 250,
    "Diamond Pack": 1000,
    "Diamond Supporter Pack": 1000,

    // Straight Points
    "50 Point": 5,
    "100 Point": 10,
    "200 Point": 20,
    "516 Point": 50,
    "1065 Point": 100,

    // Vault Passes
    "Vault Pass": 30,

    // other MTX
    //
    // digital comic: Origins
    // might be unreliable due to different price tiers
    // https://www.pathofexile.com/forum/view-thread/1703254
    "Comic": 4,
    // 2014 charity event item
    // https://www.pathofexile.com/forum/view-thread/919315
    "Angelic Mask": 5,
    // 2015 Australia Day event item
    // https://www.pathofexile.com/forum/view-thread/1185814
    "Koala": 14,
    "Brazil": 40,
    // 2021 Endless Delve / Nexus
    // https://www.pathofexile.com/forum/view-thread/3218435
    "Cursed Supporter Pack": 60,
}

let total = 0;
let errormessage = "";

for (let element of elements) {
    transactionName = element.innerHTML.trim();

    let out = 0;

    for (let mtx in microtransactions) {
        let value = microtransactions[mtx];
        if (transactionName.includes(mtx) && value > out) {
            out = value;
        }
    }

    if (out === 0) {
        errormessage += "\n" + transactionName;
    }

    let before = total;
    total += out;

    console.log(`${transactionName} (\$${out})`);
    console.log(`${before} + ${out} = ${total}`);
}

if (errormessage == "") {
    alert(`You have spent \$${total} on microtransactions`);
} else {
    console.warn( "The following supporter packs are unaccounted for...", errormessage );
    alert("You have spent " + "$" + total + " on microtransactions \n\n" + "Packs not found: " + errormessage);
}
