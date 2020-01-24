const getAlphabetScore = str => {
  let score = 0;
  switch (str.toUpperCase()) {
    case "A":
    case "E":
    case "I":
    case "U":
    case "L":
    case "N":
    case "R":
    case "S":
    case "T":
      score = 1;
      break;
    case "D":
    case "G":
      score = 2;
      break;
    case "B":
    case "C":
    case "M":
    case "P":
      score = 3;
      break;
    case "F":
    case "H":
    case "V":
    case "W":
      score = 4;
      break;
    case "K":
      score = 5;
    case "J":
    case "X":
      score = 8;
      break;

    case "Q":
    case "Z":
      score = 10;
      break;
  }

  return score;
};

const getWordScore = word => {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    const element = word[i];
    if (/[a-zA-Z]/.test(element)) {
      score += getAlphabetScore(word[i]);
    }
  }
  return score;
};

/************* Test *************/
const cmdArgument = process.argv[2];
const word = cmdArgument || "AutoMateD";

const profileStart = Date.now();
const wordScore = getWordScore(word);
const profileEnd = Date.now();
const profileDifference = profileEnd - profileStart;
const totalTime = profileDifference / 1000;
console.log(
  `The score for the word "%s" is %d, process took: %ds`,
  word,
  wordScore,
  totalTime
);
/************* End Test *************/
