// JavaScript for BusMall

var totalVotes = 0;
var listOfProducts = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var listOfProductObjects = [];

var product = function (name, path) {
  this.name = name; //name of product/image
  this.path = path; //relative path to jpg
  this.votes = 0; //clicks for this product
  listOfProductObjects.push(this);
};

for (var i = 0; i < listOfProducts.length; i++) {
  new product(listOfProducts[i], './assets/' + listOfProducts[i] + '.jpg');
}

var populate = function () {
  var first = document.getElementById('first');
  var img0 = document.createElement('img');
  img0.src = listOfProductObjects[0].path
  first.appendChild(img0);

  var second = document.getElementById('second');
  var img1 = document.createElement('img');
  img1.src = listOfProductObjects[1].path
  second.appendChild(img1);

  var third = document.getElementById('third');
  var img2 = document.createElement('img');
  img2.src = listOfProductObjects[2].path
  third.appendChild(img2);
};
populate()
