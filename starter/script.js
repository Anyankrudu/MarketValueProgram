const playerAgeGroups = {
  age: {
    group1: [18, 19, 20, 21, 22, 23],
    group2: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    group3: [34, 35, 36],
    group4: [37, 38, 39],
  },

  points: {
    group1: 4,
    group2: 5,
    group3: 3,
    group4: 1,
  },
};

const playerInjuryRecords = {
  injuryRecord: ["good", "satisfactory", "bad"],
  points: {
    good: 5,
    satisfactory: 4,
    bad: 3,
  },
};

const playerCurrentLeagues = {
  currentLeague: ["premierleague", "laliga", "bundesliga", "seriea", "ligue1"],
  points: {
    premierLeague: 5,
    laliga: 5,
    bundesliga: 4,
    serieA: 4,
    ligue1: 2,
  },
};

const playerMarketabilityRates = {
  marketabilityRate: ["high", "medium", "low"],
  points: {
    high: 5,
    medium: 4,
    low: 3,
  },
};

const playerExperienceLevels = {
  experienceLevel: ["super", "mid", "normal"],
  points: {
    top: 5,
    mid: 4,
    low: 2,
  },
};

const playerContractLengths = {
  contractLength: ["longterm", "shortterm", "loan"],
  points: { longterm: 5, shortterm: 3, loan: 1 },
};

const playerDataTypes = [
  playerAgeGroups,
  playerInjuryRecords,
  playerCurrentLeagues,
  playerMarketabilityRates,
  playerExperienceLevels,
  playerContractLengths,
];

const marketValueRange = {};

let currentPlayerData = {};
currentPlayerData.currentPlayerPoints = {};
// let currentPlayerPoints = {};

const getPlayerData = function (pldattyp) {
  pldattyp.forEach(function (dattyp, i) {
    console.log(Object.values(dattyp)[0]);

    let playerData = Object.getOwnPropertyNames(dattyp)[0];
    let data = prompt(`Enter Player's ${playerData}`);

    playerData !== "age"
      ? (currentPlayerData[playerData] = data)
      : (currentPlayerData[playerData] = Number(data));
    console.clear();
    console.log(currentPlayerData);
  });

  console.clear();
};
getPlayerData(playerDataTypes);

console.log(currentPlayerData);

const getPlayerAgeGroupPoints = function (curplag) {
  let ageGroup = Object.entries(playerAgeGroups.age).filter((aggrp) =>
    aggrp[1].includes(curplag)
  )[0][0];
  currentPlayerData.currentPlayerPoints.ageGroupPoints = Object.entries(
    playerAgeGroups.points
  ).find((pts) => pts.includes(ageGroup))[1];
};

getPlayerAgeGroupPoints(currentPlayerData.age);

const getPlayerDataType = function (dat) {
  for (let i = 0; i < playerDataTypes.length; i++) {
    if (playerDataTypes[i] === playerAgeGroups) continue;
    if (Object.values(playerDataTypes[i])[0].includes(dat)) {
      let dataType = playerDataTypes[i];
      return dataType;
    }
  }
};

const recordPlayerPoints = function (dat) {
  let dataType = getPlayerDataType(dat);
  currentPlayerData.currentPlayerPoints[
    Object.getOwnPropertyNames(dataType)[0] + "points"
  ] = Object.entries(dataType.points).find((dattyp) => dattyp.includes(dat))[1];
};

const getPlayerPoints = function (curpldat) {
  recordPlayerPoints(curpldat.injuryRecord);
  recordPlayerPoints(curpldat.currentLeague);
  recordPlayerPoints(curpldat.marketabilityRate);
  recordPlayerPoints(curpldat.experienceLevel);
  recordPlayerPoints(curpldat.contractLength);
};

getPlayerPoints(currentPlayerData);

const calcTotalPlayerPoints = function (curplpts) {
  currentPlayerData.totalPlayerPoints = Object.values(curplpts).reduce(
    (plpts, pts) => plpts + pts,
    0
  );
};
calcTotalPlayerPoints(currentPlayerData.currentPlayerPoints);

// set leauge title of others which consist of all other leagues apart from the top 5 leagues.....
// set conditions to check if user entered correct data type for all data types
//calculate player final points
