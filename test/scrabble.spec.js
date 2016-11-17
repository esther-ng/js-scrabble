var Scrabble = require('../scrabble');
var Player = require('../player');
var TileBag = require('../tilebag');

describe('Scrabble', function() {

  it('has a score chart property', function() {
    expect(Scrabble.score_chart).toBeTruthy();
  });

  it('returns the score of a word', function() {
    var word = "junior";
    expect(Scrabble.score(word)).toBe(13);
  });

  it('gives a bonus of 50 points if 7 letters are used', function() {
    var word = "whallup";
    expect(Scrabble.score(word)).toBe(65);
  });

  it('returns the highest scoring word', function() {
    var words = ["how", "are", "you", "pizzazz", "whallup", "hello"];
    expect(Scrabble.highestScoreFrom(words)).toBe("pizzazz");
  });

  it('highest scoring word returns the shorter word if there is a tie', function() {
    var words = ["dog", "hi", "tours"];
    expect(Scrabble.highestScoreFrom(words)).toBe("hi");
  });

  it('highest scoring word returns the 7 letter word if there is a tie', function() {
    var words = ["zzzzzx", "aaaaaad", "tours"];
    expect(Scrabble.highestScoreFrom(words)).toBe("aaaaaad");
  });

  it('highest scoring word returns the first word if there is a tie in both score and length', function() {
    var words = ["zzzzzj", "zzzzzx", "aaaaad", "tours"];
    expect(Scrabble.highestScoreFrom(words)).toBe("zzzzzj");
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
    expect(jill.hasWon()).toBe(false);
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

  it('will return the highest scoring word the player played', function() {
    var jill = new Player('Jill');
    jill.play("pizzazz");
    jill.play("whallup");
    expect(jill.highestScoringWord()).toBe("pizzazz");
  });

  it('will return the highest scoring word score the player played', function() {
    var jill = new Player('Jill');
    jill.play("pizzazz");
    jill.play("whallup");
    expect(jill.highestWordScore()).toBe(95);
  });
});

describe('TileBag', function() {

  it('will create a new instance of the TileBag with 98 tiles', function() {
    var bag = new TileBag();
    expect(bag.tiles.length).toBe(98);
  });

  it('will allow a number of tiles to be randomly drawn', function() {
    var bag = new TileBag();
    var draw1 = bag.drawTiles(5);
    var draw2 = bag.drawTiles(5);
    expect(draw1.length).toBe(5);
    expect(draw1).not.toBe(draw2);
  });

  it('will remove the tiles drawn from the bag', function() {
    var bag = new TileBag();
    var beforeDraw = bag.tiles.length;
    var draw1 = bag.drawTiles(5);
    expect(beforeDraw - bag.tilesLeft()).toBe(5);
  });

});
