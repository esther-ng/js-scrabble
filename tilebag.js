
var TileBag = function() {
  var bag = ['J','K','Q','X','Z'];
  var addToBag = {
    2: ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'],
    3: ['G'],
    4: ['D', 'L', 'S', 'U'],
    6: ['N', 'R', 'T'],
    8: ['O'],
    9: ['A', 'I'],
    12: ['E']
  };
  var nums = Object.getOwnPropertyNames(addToBag);

  nums.forEach(function(num) {
    addToBag[num].forEach(function(letter) {
      for (var i = num; i > 0; i--) {
        bag.push(letter);
      }
    });
  });

  this.tiles = bag;
};

TileBag.prototype.tilesLeft = function() {
  return this.tiles.length;
};

TileBag.prototype.drawTiles = function(num) {
  var tilesDrawn = [];
  for (var i = 0; i < num; i++) {
    var randIndex = Math.floor(Math.random() * this.tiles.length);
    var tile = this.tiles[randIndex];
    tilesDrawn.push(tile);
    this.tiles.splice(randIndex, 1);
  }
  return tilesDrawn;
};

// var bag = new TileBag;
// console.log(bag.tiles.length);
// console.log(bag.drawTiles(5));
// console.log(bag.tiles.length);

module.exports = TileBag;
