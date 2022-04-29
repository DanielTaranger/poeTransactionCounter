var elements = document.getElementsByClassName("packageName el FontinBold");
var total = 0;
var errormessage = "";

for(var i = 0; i < elements.length; ++i){
    myString = elements[i].innerHTML;
    myString = myString.trim();

    var out = 0;
    if(myString.includes("Dread")){
        out = 30;
    }else if(myString.includes("Ancient Dread")){
        out = 60;
    }else if(myString.includes("Primordial Dread")){
        out = 90;
    }else if(myString.includes("Aesir")){
        out = 30;
    }else if(myString.includes("Aesir Warrior")){
        out = 60;
    }else if(myString.includes("Aesir Demigod")){
        out = 90;
    }else if(myString.includes("Crescent")){
        out = 30;
    }else if(myString.includes("Silver Crescent")){
        out = 60;
    }else if(myString.includes("Emberkeep")){
        out = 30;
    }else if(myString.includes("Elite Emberkeep")){
        out = 60;
    }else if(myString.includes("Supreme Emberkeep")){
        out = 90;
    }else if(myString.includes("Wyrm")){
        out = 30;
    }else if(myString.includes("Wyrmcaller")){
        out = 60;
    }else if(myString.includes("Wyrmlord")){
        out = 90;
    }else if(myString.includes("Incinerator")){
        out = 480;
    }else if(myString.includes("Ravager")){
        out = 240;
    }else if(myString.includes("Annihilator")){
        out = 160;
    }else if(myString.includes("Nullifier")){
        out = 100;
    }else if(myString.includes("Imperator")){
        out = 60;
    }else if(myString.includes("Liege")){
        out = 30;
    }else if(myString.includes("Intrepid Liege")){
        out = 60;
    }else if(myString.includes("Triumphant Liege")){
        out = 90;
    }else if(myString.includes("Soulkeeper")){
        out = 30;
    }else if(myString.includes("Soulkeeper Vizier")){
        out = 60;
    }else if(myString.includes("Soulkeeper Demigod")){
        out = 90;
    }else if(myString.includes("Imperial Sun")){
        out = 60;
    }else if(myString.includes("Sun")){
        out = 30;
    }else if(myString.includes("Renegade")){
        out = 30;
    }else if(myString.includes("Deadly Renegade")){
        out = 60;
    }else if(myString.includes("Elite Faithsworn")){
        out = 60;
    }else if(myString.includes("Faithsworn")){
        out = 30;
    }else if(myString.includes("Delve Core")){
        out = 60;
    }else if(myString.includes("Breach Core")){
        out = 100;
    }else if(myString.includes("Abyss Core")){
        out = 160;
    }else if(myString.includes("Harvest Core")){
        out = 240;
    }else if(myString.includes("Atlas Core")){
        out = 480;
    }else if(myString.includes("Master Spellblade")){
        out = 60;
    }else if(myString.includes("Spellblade")){
        out = 30;
    }else if(myString.includes("Imperial Eagle")){
        out = 60;
    }else if(myString.includes("Eagle")){
        out = 30;
    }else if(myString.includes("Insatiable Malice")){
        out = 60;
    }else if(myString.includes("Malice")){
        out = 30;
    }else if(myString.includes("Divine Benevolence")){
        out = 60;
    }else if(myString.includes("Benevolence")){
        out = 30;
    }else if(myString.includes("Elite Fateweaver")){
        out = 60;
    }else if(myString.includes("Fateweaver")){
        out = 30;
    }else if(myString.includes("Elder Darkseer")){
        out = 60;
    }else if(myString.includes("Darkseer")){
        out = 30;
    }else if(myString.includes("Basilisk")){
        out = 60;
    }else if(myString.includes("Crusader")){
        out = 100;
    }else if(myString.includes("Eyrie")){
        out = 160;
    }else if(myString.includes("Judicator")){
        out = 240;
    }else if(myString.includes("Orion")){
        out = 480;
    }else if(myString.includes("Grand Sanctum")){
        out = 60;
    }else if(myString.includes("Sanctum")){
        out = 30;
    }else if(myString.includes("Eternal Damnation")){
        out = 60;
    }else if(myString.includes("Damnation")){
        out = 30;
    }else if(myString.includes("Sentinel Overlord")){
        out = 60;
    }else if(myString.includes("Sentinel")){
        out = 30;
    }else if(myString.includes("Bane Lich")){
        out = 60;
    }else if(myString.includes("Lich")){
        out = 30;
    }else if(myString.includes("Cult of Darkness")){
        out = 30;
    }else if(myString.includes("Cult of Apocalypse")){
        out = 60;
    }else if(myString.includes("Blood Knight")){
        out = 30;
    }else if(myString.includes("Blood Guardian")){
        out = 60;
    }else if(myString.includes("Sunstone")){
        out = 30;
    }else if(myString.includes("Sunspire")){
        out = 60;
    }else if(myString.includes("Doomcrow")){
        out = 30;
    }else if(myString.includes("Doomguard")){
        out = 60;
    }else if(myString.includes("Pitfighter")){
        out = 60;
    }else if(myString.includes("Assassin")){
        out = 100;
    }else if(myString.includes("Vanguard")){
        out = 160;
    }else if(myString.includes("Empyrean")){
        out = 240;
    }else if(myString.includes("Crucible")){
        out = 480;
    }else if(myString.includes("Master Undertaker")){
        out = 60;
    }else if(myString.includes("Undertaker")){
        out = 30;
    }else if(myString.includes("Master Soulstealer")){
        out = 60;
    }else if(myString.includes("Soulstealer")){
        out = 30;
    }else if(myString.includes("Shadowstalker")){
        out = 60;
    }else if(myString.includes("Stalker")){
        out = 30;
    }else if(myString.includes("Dreadforge")){
        out = 60;
    }else if(myString.includes("Forge")){
        out = 30;
    }else if(myString.includes("High Council")){
        out = 60;
    }else if(myString.includes("Council")){
        out = 30;
    }else if(myString.includes("Grand Conquest")){
        out = 60;
    }else if(myString.includes("Conquest")){
        out = 30;
    }else if(myString.includes("Alpha Harpy")){
        out = 60;
    }else if(myString.includes("Harpy")){
        out = 30;
    }else if(myString.includes("Alpha Manticore")){
        out = 30;
    }else if(myString.includes("Manticore")){
        out = 30;
    }else if(myString.includes("First Blood")){
        out = 20;
    }else if(myString.includes("Abyssal")){
        out = 60;
    }else if(myString.includes("Vagabond")){
        out = 30;
    }else if(myString.includes("Seeker")){
        out = 60;
    }else if(myString.includes("Scholar")){
        out = 100;
    }else if(myString.includes("Redeemer")){
        out = 160;
    }else if(myString.includes("Subjugator")){
        out = 240;
    }else if(myString.includes("Dominator")){
        out = 480;
    }else if(myString.includes("Portent")){
        out = 30;
    }else if(myString.includes("Harbinger")){
        out = 60;
    }else if(myString.includes("Classic")){
        out = 30;
    }else if(myString.includes("Oriath")){
        out = 30;
    }else if(myString.includes("Outlaw")){
        out = 60;
    }else if(myString.includes("Legion")){
        out = 100;
    }else if(myString.includes("Eclipse")){
        out = 160;
    }else if(myString.includes("Beast")){
        out = 240;
    }else if(myString.includes("Kitava")){
        out = 480;
    }else if(myString.includes("Legacy")){
        out = 60;
    }else if(myString.includes("Breachspawn")){
        out = 30;
    }else if(myString.includes("Breachlord")){
        out = 60;
    }else if(myString.includes("Minotaur")){
        out = 50;
    }else if(myString.includes("Hydra")){
        out = 110;
    }else if(myString.includes("Chimera")){
        out = 220;
    }else if(myString.includes("Phoenix")){
        out = 440;
    }else if(myString.includes("Prophecy")){
        out = 60;
    }else if(myString.includes("Aspirant")){
        out = 50;
    }else if(myString.includes("Challenger")){
        out = 110;
    }else if(myString.includes("Sovereign")){
        out = 220;
    }else if(myString.includes("Ascendant")){
        out = 440;
    }else if(myString.includes("Axiom")){
        out = 60;
    }else if(myString.includes("Vaal")){
        out = 130;
    }else if(myString.includes("Lunaris")){
        out = 260;
    }else if(myString.indexOf("Highgate") == 0){
        out = 1100;
    }else if(myString.includes("Awakening")){
        out = 30;
    }else if(myString.includes("Apprentice")){
        out = 50;
    }else if(myString.includes("Journeyman")){
        out = 100;
    }else if(myString.includes("Master")){
        out = 200;
    }else if(myString.includes("Grandmaster")){
        out = 500;
    }else if(myString.includes("Survivor")){
        out = 50;
    }else if(myString.includes("Warrior")){
        out = 120;
    }else if(myString.includes("Champion")){
        out = 280;
    }else if(myString.includes("Conqueror")){
        out = 900;
    }else if(myString.includes("Open Beta")){
        out = 30;
    }else if(myString.includes("Regal")){
        out = 50;
    }else if(myString.includes("Divine")){
        out = 110;
    }else if(myString.includes("Exalted")){
        out = 270;
    }else if(myString.includes("Eternal")){
        out = 1500;
    }else if(myString.includes("Ruler of Wraeclast")){
        out = 12500;
    }else if(myString.includes("Kiwi")){
        out = 25;
    }else if(myString.includes("Bronze")){
        out = 50;
    }else if(myString.includes("Silver")){
        out = 100;
    }else if(myString.includes("Gold")){
        out = 250;
    }else if(myString.includes("Diamond")){
        out = 1000;
    }else if(myString.includes("50 Point")){
        out = 5;
    }else if(myString.includes("100 Point")){
        out = 10;
    }else if(myString.includes("200 Point")){
        out = 20;
    }else if(myString.includes("516 Point")){
        out = 50;
    }else if(myString.includes("1065 Point")){
        out = 100;
    }else if(myString.indexOf("Supporter") == 0){
        out = 15;
    }else if(myString.includes("Koala")){
        out = 14;
    }else if(myString.includes("Angelic Mask")){
        out = 5;
    }else if(myString.includes("Comic")){
        out = 4;
    }else if(myString.includes("Brazil")){
        out = 40;
    }else if(myString.includes("Early")){
        out = 10;
    }else{
          errormessage  = errormessage + "\n" + myString;
    }
    console.log(myString);
    console.log(total + "+"+ out + "=" + (total = total + parseInt(out)));
}

if(errormessage == ""){
    alert("You have spent " + "$" + total + " on microtransactions");
}else{
    alert("You have spent " + "$" + total + " on microtransactions \n\n" + "Packs not found: "  + errormessage);
}
