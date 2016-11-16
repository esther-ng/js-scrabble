
var TileBag = function() {
  this.tiles = ['J','K','Q','X','Z'];
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
        this.tiles.push(letter);
      }
    });
  });
  // addToBag.forEach(function(letter) {
  //   this.tiles.push(letter);
  // })
};

var bag = new TileBag;
console.log(bag.tiles);
