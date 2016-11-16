var Scrabble = require('./scrabble');

var Player = function(name) {
  this._name = name;
  this._plays = [];
};

Player.prototype.play = function(word) {
  if (this.totalScore() > 100) {
    return false;
  } else {
    this._plays.push(word);
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

// testPlayer = new Player("Jill");
// console.log(testPlayer._name);
// testPlayer.play("Hi");
// testPlayer.play("Hello");
// console.log(testPlayer.plays);

module.exports = Player;
