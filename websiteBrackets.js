let correctBracket = {};

let westTeams = [
    "Gonzaga",
    "Duke",
    "Texas Tech",
    "Arkansas",
    "UConn",
    "Alabama",
    "Michigan State",
    "Boise State",
    "Memphis",
    "Davidson",
    "Notre Dame",
    "New Mexico State",
    "Vermont",
    "Montana State",
    "Cal State Fullerton",
    "Georgia State"
];
    
let southTeams = [
    "Arizona",
    "Villanova",
    "Tennessee",
    "Illinois",
    "Houston",
    "Colorado State",
    "Ohio State",
    "Seton Hall",
    "TCU",
    "Loyola Chicago",
    "Michigan",
    "UAB",
    "Chattanooga",
    "Longwood",
    "Delaware",
    "Wright State"
];
    
let midwestTeams = [
    "Kansas",
    "Auburn",
    "Wisconsin",
    "Providence",
    "Iowa",
    "LSU",
    "USC",
    "San Diego State",
    "Creighton",
    "Miami",
    "Iowa State",
    "Richmond",
    "South Dakota State",
    "Colgate",
    "Jacksonville State",
    "Texas Southern"
];
    
    let eastTeams = [
    "Baylor",
    "Kentucky",
    "Purdue",
    "UCLA",
    "Saint Mary's",
    "Texas",
    "Murray State",
    "North Carolina",
    "Marquette",
    "San Francisco",
    "Virginia Tech",
    "Indiana",
    "Akron",
    "Yale",
    "Saint Peter's",
    "Norfolk State"
];

const westr64t1 = document.getElementById("westr64t1");
const westr64t2 = document.getElementById("westr64t2");
const westr64t3 = document.getElementById("westr64t3");
const westr64t4 = document.getElementById("westr64t4");
const westr64t5 = document.getElementById("westr64t5");
const westr64t6 = document.getElementById("westr64t6");
const westr64t7 = document.getElementById("westr64t7");
const westr64t8 = document.getElementById("westr64t8");
const westr64t9 = document.getElementById("westr64t9");
const westr64t10 = document.getElementById("westr64t10");
const westr64t11 = document.getElementById("westr64t11");
const westr64t12 = document.getElementById("westr64t12");
const westr64t13 = document.getElementById("westr64t13");
const westr64t14 = document.getElementById("westr64t14");
const westr64t15 = document.getElementById("westr64t15");
const westr64t16 = document.getElementById("westr64t16");

const eastr64t1 = document.getElementById("eastr64t1");
const eastr64t2 = document.getElementById("eastr64t2");
const eastr64t3 = document.getElementById("eastr64t3");
const eastr64t4 = document.getElementById("eastr64t4");
const eastr64t5 = document.getElementById("eastr64t5");
const eastr64t6 = document.getElementById("eastr64t6");
const eastr64t7 = document.getElementById("eastr64t7");
const eastr64t8 = document.getElementById("eastr64t8");
const eastr64t9 = document.getElementById("eastr64t9");
const eastr64t10 = document.getElementById("eastr64t10");
const eastr64t11 = document.getElementById("eastr64t11");
const eastr64t12 = document.getElementById("eastr64t12");
const eastr64t13 = document.getElementById("eastr64t13");
const eastr64t14 = document.getElementById("eastr64t14");
const eastr64t15 = document.getElementById("eastr64t15");
const eastr64t16 = document.getElementById("eastr64t16");

const southr64t1 = document.getElementById("southr64t1");
const southr64t2 = document.getElementById("southr64t2");
const southr64t3 = document.getElementById("southr64t3");
const southr64t4 = document.getElementById("southr64t4");
const southr64t5 = document.getElementById("southr64t5");
const southr64t6 = document.getElementById("southr64t6");
const southr64t7 = document.getElementById("southr64t7");
const southr64t8 = document.getElementById("southr64t8");
const southr64t9 = document.getElementById("southr64t9");
const southr64t10 = document.getElementById("southr64t10");
const southr64t11 = document.getElementById("southr64t11");
const southr64t12 = document.getElementById("southr64t12");
const southr64t13 = document.getElementById("southr64t13");
const southr64t14 = document.getElementById("southr64t14");
const southr64t15 = document.getElementById("southr64t15");
const southr64t16 = document.getElementById("southr64t16");

const midwestr64t1 = document.getElementById("midwestr64t1");
const midwestr64t2 = document.getElementById("midwestr64t2");
const midwestr64t3 = document.getElementById("midwestr64t3");
const midwestr64t4 = document.getElementById("midwestr64t4");
const midwestr64t5 = document.getElementById("midwestr64t5");
const midwestr64t6 = document.getElementById("midwestr64t6");
const midwestr64t7 = document.getElementById("midwestr64t7");
const midwestr64t8 = document.getElementById("midwestr64t8");
const midwestr64t9 = document.getElementById("midwestr64t9");
const midwestr64t10 = document.getElementById("midwestr64t10");
const midwestr64t11 = document.getElementById("midwestr64t11");
const midwestr64t12 = document.getElementById("midwestr64t12");
const midwestr64t13 = document.getElementById("midwestr64t13");
const midwestr64t14 = document.getElementById("midwestr64t14");
const midwestr64t15 = document.getElementById("midwestr64t15");
const midwestr64t16 = document.getElementById("midwestr64t16");

const westr64g1 = document.getElementById("westr64g1");
const westr64g2 = document.getElementById("westr64g2");
const westr64g3 = document.getElementById("westr64g3");
const westr64g4 = document.getElementById("westr64g4");
const westr64g5 = document.getElementById("westr64g5");
const westr64g6 = document.getElementById("westr64g6");
const westr64g7 = document.getElementById("westr64g7");
const westr64g8 = document.getElementById("westr64g8");
const westr32g1 = document.getElementById("westr32g1");
const westr32g2 = document.getElementById("westr32g2");
const westr32g3 = document.getElementById("westr32g3");
const westr32g4 = document.getElementById("westr32g4");
const westr16g1 = document.getElementById("westr16g1");
const westr16g2 = document.getElementById("westr16g2");
const weste8g1 = document.getElementById("weste8g1");
const semiweste8g1 = document.getElementById("semiweste8g1");

const eastr64g1 = document.getElementById("eastr64g1");
const eastr64g2 = document.getElementById("eastr64g2");
const eastr64g3 = document.getElementById("eastr64g3");
const eastr64g4 = document.getElementById("eastr64g4");
const eastr64g5 = document.getElementById("eastr64g5");
const eastr64g6 = document.getElementById("eastr64g6");
const eastr64g7 = document.getElementById("eastr64g7");
const eastr64g8 = document.getElementById("eastr64g8");
const eastr32g1 = document.getElementById("eastr32g1");
const eastr32g2 = document.getElementById("eastr32g2");
const eastr32g3 = document.getElementById("eastr32g3");
const eastr32g4 = document.getElementById("eastr32g4");
const eastr16g1 = document.getElementById("eastr16g1");
const eastr16g2 = document.getElementById("eastr16g2");
const easte8g1 = document.getElementById("easte8g1");
const semieaste8g1 = document.getElementById("semieaste8g1");

const southr64g1 = document.getElementById("southr64g1");
const southr64g2 = document.getElementById("southr64g2");
const southr64g3 = document.getElementById("southr64g3");
const southr64g4 = document.getElementById("southr64g4");
const southr64g5 = document.getElementById("southr64g5");
const southr64g6 = document.getElementById("southr64g6");
const southr64g7 = document.getElementById("southr64g7");
const southr64g8 = document.getElementById("southr64g8");
const southr32g1 = document.getElementById("southr32g1");
const southr32g2 = document.getElementById("southr32g2");
const southr32g3 = document.getElementById("southr32g3");
const southr32g4 = document.getElementById("southr32g4");
const southr16g1 = document.getElementById("southr16g1");
const southr16g2 = document.getElementById("southr16g2");
const southe8g1 = document.getElementById("southe8g1");
const semisouthe8g1 = document.getElementById("semisouthe8g1");

const midwestr64g1 = document.getElementById("midwestr64g1");
const midwestr64g2 = document.getElementById("midwestr64g2");
const midwestr64g3 = document.getElementById("midwestr64g3");
const midwestr64g4 = document.getElementById("midwestr64g4");
const midwestr64g5 = document.getElementById("midwestr64g5");
const midwestr64g6 = document.getElementById("midwestr64g6");
const midwestr64g7 = document.getElementById("midwestr64g7");
const midwestr64g8 = document.getElementById("midwestr64g8");
const midwestr32g1 = document.getElementById("midwestr32g1");
const midwestr32g2 = document.getElementById("midwestr32g2");
const midwestr32g3 = document.getElementById("midwestr32g3");
const midwestr32g4 = document.getElementById("midwestr32g4");
const midwestr16g1 = document.getElementById("midwestr16g1");
const midwestr16g2 = document.getElementById("midwestr16g2");
const midweste8g1 = document.getElementById("midweste8g1");
const semimidweste8g1 = document.getElementById("semimidweste8g1");

const westeastsemifinal = document.getElementById("westeastsemifinal");
const southmidwestsemifinal = document.getElementById("southmidwestsemifinal");

const final = document.getElementById("final");


westr64t1.innerHTML = westTeams[0];
westr64t2.innerHTML = westTeams[1];
westr64t3.innerHTML = westTeams[2];
westr64t4.innerHTML = westTeams[3];
westr64t5.innerHTML = westTeams[4];
westr64t6.innerHTML = westTeams[5];
westr64t7.innerHTML = westTeams[6];
westr64t8.innerHTML = westTeams[7];
westr64t9.innerHTML = westTeams[8];
westr64t10.innerHTML = westTeams[9];
westr64t11.innerHTML = westTeams[10];
westr64t12.innerHTML = westTeams[11];
westr64t13.innerHTML = westTeams[12];
westr64t14.innerHTML = westTeams[13];
westr64t15.innerHTML = westTeams[14];
westr64t16.innerHTML = westTeams[15];

eastr64t1.innerHTML = eastTeams[0];
eastr64t2.innerHTML = eastTeams[1];
eastr64t3.innerHTML = eastTeams[2];
eastr64t4.innerHTML = eastTeams[3];
eastr64t5.innerHTML = eastTeams[4];
eastr64t6.innerHTML = eastTeams[5];
eastr64t7.innerHTML = eastTeams[6];
eastr64t8.innerHTML = eastTeams[7];
eastr64t9.innerHTML = eastTeams[8];
eastr64t10.innerHTML = eastTeams[9];
eastr64t11.innerHTML = eastTeams[10];
eastr64t12.innerHTML = eastTeams[11];
eastr64t13.innerHTML = eastTeams[12];
eastr64t14.innerHTML = eastTeams[13];
eastr64t15.innerHTML = eastTeams[14];
eastr64t16.innerHTML = eastTeams[15];

southr64t1.innerHTML = southTeams[0];
southr64t2.innerHTML = southTeams[1];
southr64t3.innerHTML = southTeams[2];
southr64t4.innerHTML = southTeams[3];
southr64t5.innerHTML = southTeams[4];
southr64t6.innerHTML = southTeams[5];
southr64t7.innerHTML = southTeams[6];
southr64t8.innerHTML = southTeams[7];
southr64t9.innerHTML = southTeams[8];
southr64t10.innerHTML = southTeams[9];
southr64t11.innerHTML = southTeams[10];
southr64t12.innerHTML = southTeams[11];
southr64t13.innerHTML = southTeams[12];
southr64t14.innerHTML = southTeams[13];
southr64t15.innerHTML = southTeams[14];
southr64t16.innerHTML = southTeams[15];

midwestr64t1.innerHTML = midwestTeams[0];
midwestr64t2.innerHTML = midwestTeams[1];
midwestr64t3.innerHTML = midwestTeams[2];
midwestr64t4.innerHTML = midwestTeams[3];
midwestr64t5.innerHTML = midwestTeams[4];
midwestr64t6.innerHTML = midwestTeams[5];
midwestr64t7.innerHTML = midwestTeams[6];
midwestr64t8.innerHTML = midwestTeams[7];
midwestr64t9.innerHTML = midwestTeams[8];
midwestr64t10.innerHTML = midwestTeams[9];
midwestr64t11.innerHTML = midwestTeams[10];
midwestr64t12.innerHTML = midwestTeams[11];
midwestr64t13.innerHTML = midwestTeams[12];
midwestr64t14.innerHTML = midwestTeams[13];
midwestr64t15.innerHTML = midwestTeams[14];
midwestr64t16.innerHTML = midwestTeams[15];

let bracket = {};
let bracketId = 0;

let perfectBracketsIds =[];
let bestBracketsIds = [];

fetchCorrectBracket();
getFirstBracket();
fetchNumberOfPerfectBrackets();
fetchBestBrackets();

document.getElementById('bracketNumberSelector').addEventListener('keypress', async (e) => {
    if(e.key === 'Enter'){
        bracketId = parseInt(e.target.value - 1);
        bracket = await fetchBracket(bracketId);
    }
    readBracket();
});

async function fetchBracket(bracketNumber){
    try {
        const response = await fetch(`https://millionmarchmadnessbrackets.loca.lt/Bracket?bracketId=${bracketId}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

async function fetchNumberOfPerfectBrackets(){
    try {
        const response = await fetch(`https://millionmarchmadnessbrackets.loca.lt/GetPerfectBrackets`);
        if (response.ok) {
            const jsonResponse = await response.json();
            perfectBracketsIds = jsonResponse;
            updatePerfectBracketsText();
            return;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

async function fetchBestBrackets(){
    try {
        const response = await fetch(`https://millionmarchmadnessbrackets.loca.lt/GetBestBrackets`);
        if (response.ok) {
            const jsonResponse = await response.json();
            bestBracketsIds = jsonResponse;
            updateBestBracketsText();
            return;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

async function updateCorrectBracket(newCorrectBracket) {
    if(newCorrectBracket.constructor.name !== "String"){
        newCorrectBracket = JSON.stringify(newCorrectBracket);
    }
    try {
        const response = await fetch(`https://millionmarchmadnessbrackets.loca.lt/PostCorrectBracket?correctBracket=${newCorrectBracket}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

async function fetchCorrectBracket(){
    try {
        const response = await fetch(`https://millionmarchmadnessbrackets.loca.lt/CorrectBracket`);
        if (response.ok) {
            const jsonResponse = await response.json();
            correctBracket = jsonResponse;
            compareBracket();
            return;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

function updatePerfectBracketsText(){
    const perfectBracketsDisplay = document.getElementById('perfectBrackets');
    if(perfectBracketsIds.length != 0){
        perfectBracketsDisplay.style.display = "normal";
        perfectBracketsDisplay.innerHTML = `There are ${perfectBracketsIds.length} perfect brackets left, including ${perfectBracketsIds.splice(0,10)}`;
    } else {
        perfectBracketsDisplay.style.display = "none";
    }

    updateBestBracketsText();
}

function updateBestBracketsText(){
    const bestBracketsDisplay = document.getElementById('bestBrackets');
    if(perfectBracketsIds.length == 0){
        bestBracketsDisplay.style.display = "normal";
        bestBracketsDisplay.innerHTML = `There best brackets are ${bestBracketsIds}`;
    } else {
        bestBracketsDisplay.style.display = "none";
    }
    
}

async function getFirstBracket(){
    bracket = await fetchBracket(0);
    readBracket();
}

function compareBracket(){
    westr64g1.style.backgroundColor = correctBracket["westr64g1"] != "" ? (bracket["westr64g1"] == correctBracket["westr64g1"] ? "lightGreen" : "indianRed") : "";
    westr64g2.style.backgroundColor = correctBracket["westr64g2"] != "" ? (bracket["westr64g2"] == correctBracket["westr64g2"] ? "lightGreen" : "indianRed") : "";
    westr64g3.style.backgroundColor = correctBracket["westr64g3"] != "" ? (bracket["westr64g3"] == correctBracket["westr64g3"] ? "lightGreen" : "indianRed") : "";
    westr64g4.style.backgroundColor = correctBracket["westr64g4"] != "" ? (bracket["westr64g4"] == correctBracket["westr64g4"] ? "lightGreen" : "indianRed") : "";
    westr64g5.style.backgroundColor = correctBracket["westr64g5"] != "" ? (bracket["westr64g5"] == correctBracket["westr64g5"] ? "lightGreen" : "indianRed") : "";
    westr64g6.style.backgroundColor = correctBracket["westr64g6"] != "" ? (bracket["westr64g6"] == correctBracket["westr64g6"] ? "lightGreen" : "indianRed") : "";
    westr64g7.style.backgroundColor = correctBracket["westr64g7"] != "" ? (bracket["westr64g7"] == correctBracket["westr64g7"] ? "lightGreen" : "indianRed") : "";
    westr64g8.style.backgroundColor = correctBracket["westr64g8"] != "" ? (bracket["westr64g8"] == correctBracket["westr64g8"] ? "lightGreen" : "indianRed") : "";
    westr32g1.style.backgroundColor = correctBracket["westr32g1"] != "" ? (bracket["westr32g1"] == correctBracket["westr32g1"] ? "lightGreen" : "indianRed") : "";
    westr32g2.style.backgroundColor = correctBracket["westr32g2"] != "" ? (bracket["westr32g2"] == correctBracket["westr32g2"] ? "lightGreen" : "indianRed") : "";
    westr32g3.style.backgroundColor = correctBracket["westr32g3"] != "" ? (bracket["westr32g3"] == correctBracket["westr32g3"] ? "lightGreen" : "indianRed") : "";
    westr32g4.style.backgroundColor = correctBracket["westr32g4"] != "" ? (bracket["westr32g4"] == correctBracket["westr32g4"] ? "lightGreen" : "indianRed") : "";
    westr16g1.style.backgroundColor = correctBracket["westr16g1"] != "" ? (bracket["westr16g1"] == correctBracket["westr16g1"] ? "lightGreen" : "indianRed") : "";
    westr16g2.style.backgroundColor = correctBracket["westr16g2"] != "" ? (bracket["westr16g2"] == correctBracket["westr16g2"] ? "lightGreen" : "indianRed") : "";
    weste8g1.style.backgroundColor = correctBracket["weste8g1"] != "" ? (bracket["weste8g1"] == correctBracket["weste8g1"] ? "lightGreen" : "indianRed") : "";

    eastr64g1.style.backgroundColor = correctBracket["eastr64g1"] != "" ? (bracket["eastr64g1"] == correctBracket["eastr64g1"] ? "lightGreen" : "indianRed") : "";
    eastr64g2.style.backgroundColor = correctBracket["eastr64g2"] != "" ? (bracket["eastr64g2"] == correctBracket["eastr64g2"] ? "lightGreen" : "indianRed") : "";
    eastr64g3.style.backgroundColor = correctBracket["eastr64g3"] != "" ? (bracket["eastr64g3"] == correctBracket["eastr64g3"] ? "lightGreen" : "indianRed") : "";
    eastr64g4.style.backgroundColor = correctBracket["eastr64g4"] != "" ? (bracket["eastr64g4"] == correctBracket["eastr64g4"] ? "lightGreen" : "indianRed") : "";
    eastr64g5.style.backgroundColor = correctBracket["eastr64g5"] != "" ? (bracket["eastr64g5"] == correctBracket["eastr64g5"] ? "lightGreen" : "indianRed") : "";
    eastr64g6.style.backgroundColor = correctBracket["eastr64g6"] != "" ? (bracket["eastr64g6"] == correctBracket["eastr64g6"] ? "lightGreen" : "indianRed") : "";
    eastr64g7.style.backgroundColor = correctBracket["eastr64g7"] != "" ? (bracket["eastr64g7"] == correctBracket["eastr64g7"] ? "lightGreen" : "indianRed") : "";
    eastr64g8.style.backgroundColor = correctBracket["eastr64g8"] != "" ? (bracket["eastr64g8"] == correctBracket["eastr64g8"] ? "lightGreen" : "indianRed") : "";
    eastr32g1.style.backgroundColor = correctBracket["eastr32g1"] != "" ? (bracket["eastr32g1"] == correctBracket["eastr32g1"] ? "lightGreen" : "indianRed") : "";
    eastr32g2.style.backgroundColor = correctBracket["eastr32g2"] != "" ? (bracket["eastr32g2"] == correctBracket["eastr32g2"] ? "lightGreen" : "indianRed") : "";
    eastr32g3.style.backgroundColor = correctBracket["eastr32g3"] != "" ? (bracket["eastr32g3"] == correctBracket["eastr32g3"] ? "lightGreen" : "indianRed") : "";
    eastr32g4.style.backgroundColor = correctBracket["eastr32g4"] != "" ? (bracket["eastr32g4"] == correctBracket["eastr32g4"] ? "lightGreen" : "indianRed") : "";
    eastr16g1.style.backgroundColor = correctBracket["eastr16g1"] != "" ? (bracket["eastr16g1"] == correctBracket["eastr16g1"] ? "lightGreen" : "indianRed") : "";
    eastr16g2.style.backgroundColor = correctBracket["eastr16g2"] != "" ? (bracket["eastr16g2"] == correctBracket["eastr16g2"] ? "lightGreen" : "indianRed") : "";
    easte8g1.style.backgroundColor = correctBracket["easte8g1"] != "" ? (bracket["easte8g1"] == correctBracket["easte8g1"] ? "lightGreen" : "indianRed") : "";

    southr64g1.style.backgroundColor = correctBracket["southr64g1"] != "" ? (bracket["southr64g1"] == correctBracket["southr64g1"] ? "lightGreen" : "indianRed") : "";
    southr64g2.style.backgroundColor = correctBracket["southr64g2"] != "" ? (bracket["southr64g2"] == correctBracket["southr64g2"] ? "lightGreen" : "indianRed") : "";
    southr64g3.style.backgroundColor = correctBracket["southr64g3"] != "" ? (bracket["southr64g3"] == correctBracket["southr64g3"] ? "lightGreen" : "indianRed") : "";
    southr64g4.style.backgroundColor = correctBracket["southr64g4"] != "" ? (bracket["southr64g4"] == correctBracket["southr64g4"] ? "lightGreen" : "indianRed") : "";
    southr64g5.style.backgroundColor = correctBracket["southr64g5"] != "" ? (bracket["southr64g5"] == correctBracket["southr64g5"] ? "lightGreen" : "indianRed") : "";
    southr64g6.style.backgroundColor = correctBracket["southr64g6"] != "" ? (bracket["southr64g6"] == correctBracket["southr64g6"] ? "lightGreen" : "indianRed") : "";
    southr64g7.style.backgroundColor = correctBracket["southr64g7"] != "" ? (bracket["southr64g7"] == correctBracket["southr64g7"] ? "lightGreen" : "indianRed") : "";
    southr64g8.style.backgroundColor = correctBracket["southr64g8"] != "" ? (bracket["southr64g8"] == correctBracket["southr64g8"] ? "lightGreen" : "indianRed") : "";
    southr32g1.style.backgroundColor = correctBracket["southr32g1"] != "" ? (bracket["southr32g1"] == correctBracket["southr32g1"] ? "lightGreen" : "indianRed") : "";
    southr32g2.style.backgroundColor = correctBracket["southr32g2"] != "" ? (bracket["southr32g2"] == correctBracket["southr32g2"] ? "lightGreen" : "indianRed") : "";
    southr32g3.style.backgroundColor = correctBracket["southr32g3"] != "" ? (bracket["southr32g3"] == correctBracket["southr32g3"] ? "lightGreen" : "indianRed") : "";
    southr32g4.style.backgroundColor = correctBracket["southr32g4"] != "" ? (bracket["southr32g4"] == correctBracket["southr32g4"] ? "lightGreen" : "indianRed") : "";
    southr16g1.style.backgroundColor = correctBracket["southr16g1"] != "" ? (bracket["southr16g1"] == correctBracket["southr16g1"] ? "lightGreen" : "indianRed") : "";
    southr16g2.style.backgroundColor = correctBracket["southr16g2"] != "" ? (bracket["southr16g2"] == correctBracket["southr16g2"] ? "lightGreen" : "indianRed") : "";
    southe8g1.style.backgroundColor = correctBracket["southe8g1"] != "" ? (bracket["southe8g1"] == correctBracket["southe8g1"] ? "lightGreen" : "indianRed") : "";

    midwestr64g1.style.backgroundColor = correctBracket["midwestr64g1"] != "" ? (bracket["midwestr64g1"] == correctBracket["midwestr64g1"] ? "lightGreen" : "indianRed") : "";
    midwestr64g2.style.backgroundColor = correctBracket["midwestr64g2"] != "" ? (bracket["midwestr64g2"] == correctBracket["midwestr64g2"] ? "lightGreen" : "indianRed") : "";
    midwestr64g3.style.backgroundColor = correctBracket["midwestr64g3"] != "" ? (bracket["midwestr64g3"] == correctBracket["midwestr64g3"] ? "lightGreen" : "indianRed") : "";
    midwestr64g4.style.backgroundColor = correctBracket["midwestr64g4"] != "" ? (bracket["midwestr64g4"] == correctBracket["midwestr64g4"] ? "lightGreen" : "indianRed") : "";
    midwestr64g5.style.backgroundColor = correctBracket["midwestr64g5"] != "" ? (bracket["midwestr64g5"] == correctBracket["midwestr64g5"] ? "lightGreen" : "indianRed") : "";
    midwestr64g6.style.backgroundColor = correctBracket["midwestr64g6"] != "" ? (bracket["midwestr64g6"] == correctBracket["midwestr64g6"] ? "lightGreen" : "indianRed") : "";
    midwestr64g7.style.backgroundColor = correctBracket["midwestr64g7"] != "" ? (bracket["midwestr64g7"] == correctBracket["midwestr64g7"] ? "lightGreen" : "indianRed") : "";
    midwestr64g8.style.backgroundColor = correctBracket["midwestr64g8"] != "" ? (bracket["midwestr64g8"] == correctBracket["midwestr64g8"] ? "lightGreen" : "indianRed") : "";
    midwestr32g1.style.backgroundColor = correctBracket["midwestr32g1"] != "" ? (bracket["midwestr32g1"] == correctBracket["midwestr32g1"] ? "lightGreen" : "indianRed") : "";
    midwestr32g2.style.backgroundColor = correctBracket["midwestr32g2"] != "" ? (bracket["midwestr32g2"] == correctBracket["midwestr32g2"] ? "lightGreen" : "indianRed") : "";
    midwestr32g3.style.backgroundColor = correctBracket["midwestr32g3"] != "" ? (bracket["midwestr32g3"] == correctBracket["midwestr32g3"] ? "lightGreen" : "indianRed") : "";
    midwestr32g4.style.backgroundColor = correctBracket["midwestr32g4"] != "" ? (bracket["midwestr32g4"] == correctBracket["midwestr32g4"] ? "lightGreen" : "indianRed") : "";
    midwestr16g1.style.backgroundColor = correctBracket["midwestr16g1"] != "" ? (bracket["midwestr16g1"] == correctBracket["midwestr16g1"] ? "lightGreen" : "indianRed") : "";
    midwestr16g2.style.backgroundColor = correctBracket["midwestr16g2"] != "" ? (bracket["midwestr16g2"] == correctBracket["midwestr16g2"] ? "lightGreen" : "indianRed") : "";
    midweste8g1.style.backgroundColor = correctBracket["midweste8g1"] != "" ? (bracket["midweste8g1"] == correctBracket["midweste8g1"] ? "lightGreen" : "indianRed") : "";

    westeastsemifinal.style.backgroundColor = correctBracket["westeastsemifinal"] != "" ? (bracket["westeastsemifinal"] == correctBracket["westeastsemifinal"] ? "lightGreen" : "indianRed") : "";
    southmidwestsemifinal.style.backgroundColor = correctBracket["southmidwestsemifinal"] != "" ? (bracket["southmidwestsemifinal"] == correctBracket["southmidwestsemifinal"] ? "lightGreen" : "indianRed") : "";

    final.style.backgroundColor = correctBracket["final"] != "" ? (bracket["final"] == correctBracket["final"] ? "lightGreen" : "indianRed") : "";
}

function readBracket(){
    westr64g1.innerHTML = bracket["westr64g1"];
    westr64g2.innerHTML = bracket["westr64g2"];
    westr64g3.innerHTML = bracket["westr64g3"];
    westr64g4.innerHTML = bracket["westr64g4"];
    westr64g5.innerHTML = bracket["westr64g5"];
    westr64g6.innerHTML = bracket["westr64g6"];
    westr64g7.innerHTML = bracket["westr64g7"];
    westr64g8.innerHTML = bracket["westr64g8"];
    westr32g1.innerHTML = bracket["westr32g1"];
    westr32g2.innerHTML = bracket["westr32g2"];
    westr32g3.innerHTML = bracket["westr32g3"];
    westr32g4.innerHTML = bracket["westr32g4"];
    westr16g1.innerHTML = bracket["westr16g1"];
    westr16g2.innerHTML = bracket["westr16g2"];
    weste8g1.innerHTML = bracket["weste8g1"];
    semiweste8g1.innerHTML = bracket["weste8g1"];

    eastr64g1.innerHTML = bracket["eastr64g1"];
    eastr64g2.innerHTML = bracket["eastr64g2"];
    eastr64g3.innerHTML = bracket["eastr64g3"];
    eastr64g4.innerHTML = bracket["eastr64g4"];
    eastr64g5.innerHTML = bracket["eastr64g5"];
    eastr64g6.innerHTML = bracket["eastr64g6"];
    eastr64g7.innerHTML = bracket["eastr64g7"];
    eastr64g8.innerHTML = bracket["eastr64g8"];
    eastr32g1.innerHTML = bracket["eastr32g1"];
    eastr32g2.innerHTML = bracket["eastr32g2"];
    eastr32g3.innerHTML = bracket["eastr32g3"];
    eastr32g4.innerHTML = bracket["eastr32g4"];
    eastr16g1.innerHTML = bracket["eastr16g1"];
    eastr16g2.innerHTML = bracket["eastr16g2"];
    easte8g1.innerHTML = bracket["easte8g1"];
    semieaste8g1.innerHTML = bracket["easte8g1"];

    southr64g1.innerHTML = bracket["southr64g1"];
    southr64g2.innerHTML = bracket["southr64g2"];
    southr64g3.innerHTML = bracket["southr64g3"];
    southr64g4.innerHTML = bracket["southr64g4"];
    southr64g5.innerHTML = bracket["southr64g5"];
    southr64g6.innerHTML = bracket["southr64g6"];
    southr64g7.innerHTML = bracket["southr64g7"];
    southr64g8.innerHTML = bracket["southr64g8"];
    southr32g1.innerHTML = bracket["southr32g1"];
    southr32g2.innerHTML = bracket["southr32g2"];
    southr32g3.innerHTML = bracket["southr32g3"];
    southr32g4.innerHTML = bracket["southr32g4"];
    southr16g1.innerHTML = bracket["southr16g1"];
    southr16g2.innerHTML = bracket["southr16g2"];
    southe8g1.innerHTML = bracket["southe8g1"];
    semisouthe8g1.innerHTML = bracket["southe8g1"];

    midwestr64g1.innerHTML = bracket["midwestr64g1"];
    midwestr64g2.innerHTML = bracket["midwestr64g2"];
    midwestr64g3.innerHTML = bracket["midwestr64g3"];
    midwestr64g4.innerHTML = bracket["midwestr64g4"];
    midwestr64g5.innerHTML = bracket["midwestr64g5"];
    midwestr64g6.innerHTML = bracket["midwestr64g6"];
    midwestr64g7.innerHTML = bracket["midwestr64g7"];
    midwestr64g8.innerHTML = bracket["midwestr64g8"];
    midwestr32g1.innerHTML = bracket["midwestr32g1"];
    midwestr32g2.innerHTML = bracket["midwestr32g2"];
    midwestr32g3.innerHTML = bracket["midwestr32g3"];
    midwestr32g4.innerHTML = bracket["midwestr32g4"];
    midwestr16g1.innerHTML = bracket["midwestr16g1"];
    midwestr16g2.innerHTML = bracket["midwestr16g2"];
    midweste8g1.innerHTML = bracket["midweste8g1"];
    semimidweste8g1.innerHTML = bracket["midweste8g1"];

    westeastsemifinal.innerHTML = bracket["westeastsemifinal"];
    southmidwestsemifinal.innerHTML = bracket["southmidwestsemifinal"];

    final.innerHTML = bracket["final"];
    updateTitle();
    compareBracket();
}

function updateTitle() {
    const title = document.getElementById('title');
    title.innerHTML = `You are viewing Bracket ${bracketId + 1} - ${bracket.final} Wins (${bracket.points}) points`;
}
