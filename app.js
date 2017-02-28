// JavaScript for BusMall

var totalVotes = 0;
var listOfProducts = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var listOfProductObjects = [];
var container = document.getElementById('container')

function Product(name, path) {
  this.name = name; //name of product/image
  this.path = path; //relative path to jpg
  this.votes = 0; //clicks for this product
  this.views = 0; //number of times image has been shown
  listOfProductObjects.push(this);
};

(function() {
  for (var i = 0; i < listOfProducts.length; i++) {
    new Product(listOfProducts[i], './assets/' + listOfProducts[i] + '.jpg');
  }
}
)()

var first = document.getElementById('first');
var img0 = document.createElement('img');
first.appendChild(img0);

var second = document.getElementById('second');
var img1 = document.createElement('img');
second.appendChild(img1);

var third = document.getElementById('third');
var img2 = document.createElement('img');
third.appendChild(img2);

function populate() {

  var rand = [];
  while (rand.length < 3) {
    var randNum = (Math.ceil(Math.random() * listOfProducts.length)) - 1;
    if (rand.indexOf(randNum) === -1) {
      rand.push(randNum);
    }
    continue;
  }
  // console.log(rand)

  img0.src = listOfProductObjects[rand[0]].path;
  img0.id = listOfProductObjects[rand[0]].name;

  img1.src = listOfProductObjects[rand[1]].path
  img1.id = listOfProductObjects[rand[1]].name;

  img2.src = listOfProductObjects[rand[2]].path
  img2.id = listOfProductObjects[rand[2]].name;
}

function onClick(click) {

  var productIndex = listOfProducts.indexOf(click.target.id);
  listOfProductObjects[productIndex].votes +=1;
  console.log('onClick', 'name: ' + click.target.id, ', productIndex: ' + productIndex, ', votes: ' + listOfProductObjects[productIndex].votes);
  var images = document.getElementsByTagName('img');
  populate();
}














container.addEventListener('click', onClick);

populate();
