var Scrabble = require('./scrabble');
var Player = require('./player');

describe('Scrabble', function() {

  it('has a score chart property', function() {
    expect(Scrabble.score_chart).toBeTruthy();
  });

  it('returns the score of a word', function() {
    var word = "junior";
    expect(Scrabble.score(word)).toBe(13);
  });

  it('returns the highest scoring word', function() {
    var words = ["how", "are", "you", "pizzazz", "whallup", "hello"];
    expect(Scrabble.highestScoreFrom(words)).toBe("pizzazz");
  });
});

describe('Player', function() {
  it('can can instantiate/construct a new instance of Player with a name property', function() {
    var jill = new Player('Jill');
    expect(jill._name).toBe('Jill');
  });

  it('has a property to track an array of words played by player', function() {
    var jill = new Player('Jill');
    jill.play("yoyo");
    jill.play("cello");
    expect(jill._plays).toContain("cello");
    expect(jill._plays).toContain("yoyo");
  });

  it('can calculate the totalScore of the player words', function() {
    var jill = new Player('Jill');
    jill.play("yoyo");
    jill.play("cello");
    expect(jill.totalScore()).toBe(17);
  });

  it('can tell you if the player hasWon', function() {
    var jill = new Player('Jill');
    jill.play("pizzazz");
    jill.play("whallup");
    expect(jill.hasWon()).toBe(true);
  });

  it('returns false if player plays a word after they hasWon', function() {
    var jill = new Player('Jill');
    jill.play("pizzazz");
    jill.play("whallup");
    expect(jill.play("word")).toBe(false);
  });

  it('does not add any more words to _plays if player has already won', function() {
    var jill = new Player('Jill');
    jill.play("pizzazz");
    jill.play("whallup");
    jill.play("word");
    expect(jill._plays).not.toContain("word");    
  });
});
