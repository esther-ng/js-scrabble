var Scrabble = {
  score_chart: [
    [1, "A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    [2, 'D', 'G'],
    [3, 'B', 'C', 'M', 'P'],
    [4, 'F', 'H', 'V', 'W', 'Y'],
    [5, 'K'],
    [8, 'J', 'X'],
    [10, 'Q', 'Z']
  ],
  score: function(word) {
    var wordScore = 0;
    var wordUp = word.toUpperCase();
    for (var i = 0; i < word.length; i++) {
      this.score_chart.forEach(function(group) {
        if (group.includes(wordUp[i])){
          wordScore += group[0];
        }
      });
    }
    if (word.length === 7) {
      wordScore += 50;
    }
    return wordScore;
  },
  highestScoreFrom: function(arrayOfWords) {
    var topWord = "";
    var topScore = 0;
    arrayOfWords.forEach(function(word){
      var thisScore = Scrabble.score(word);
      if ((thisScore > topScore) || ((thisScore === topScore) && (word.length === 7 && topWord.length != 7))) {
        topWord = word;
        topScore = thisScore;
      } else if ((thisScore === topScore) && (word.length < topWord.length)) {
          topWord = word;
          topScore = thisScore;
      }
    })
    return topWord;
  }
};

console.log(Scrabble.highestScoreFrom(["how", "are", "you", "pizzazz", "whallupp", "hello"]));

var Player = function(name) {
  this._name = name;
  this._plays = [];
};

Player.prototype.play = function(word) {
  this._plays.push(word);
};

Player.prototype.totalScore = function() {
  var my_score = 0;
  this._plays.forEach(function(word) {
    my_score += Scrabble.score(word);
  });
  return my_score;
};

Player.prototype.hasWon = function() {
  return this.totalScore() > 100 ? true : false;
};

Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoreFrom(this._plays);
};

Player.prototype.highestWordScore = function() {
  return Scrabble.score(this.highestScoringWord());
};

// Player.prototype = Scrabble;

testPlayer = new Player("Jill");
testPlayer.play("Hi");
testPlayer.play("Hello");
console.log(testPlayer.totalScore());
console.log(testPlayer.hasWon());
console.log(testPlayer.highestScoringWord());
console.log(testPlayer.highestWordScore());
console.log(testPlayer);
// console.log(testPlayer.score("Hi"));

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;
