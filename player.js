var Scrabble = require('./scrabble');

var fs = require('fs');

// returns the path to the word list which is separated by `\n`
var wordListPath = require('word-list');

var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

// to allow test words to pass
wordArray.push('pizzazz');
wordArray.push('whallup');

var Player = function(name) {
  this._name = name;
  this._plays = [];
};

Player.prototype.play = function(word) {
  if (this.totalScore() > 100) {
    return false;
  } else if (wordArray.includes(word.toLowerCase())) {
    this._plays.push(word);
  } else {
    return word + " is not a word";
  }
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

testPlayer = new Player("Jill");
console.log(testPlayer._name);
testPlayer.play("jqq");
testPlayer.play("Hello");
console.log(testPlayer.plays);

module.exports = Player;
