// JavaScript for BusMall

var totalVotes = 0;
var listOfProducts = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var listOfProductObjects = [];
var container = document.getElementById('image-container')

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
  listOfProductObjects[productIndex].votes +=1;  //***use something similar to this for views up above
  console.log('onClick', 'name: ' + click.target.id, ', productIndex: ' + productIndex, ', votes: ' + listOfProductObjects[productIndex].votes);
  var images = document.getElementsByTagName('img');
  populate();
}

function renderResults() {
  var aside = document.getElementById('aside-left');
  var results = document.getElementById('results');
  results.remove();
  var results = document.createElement('div');
  results.id = 'results';
  aside.appendChild(results);
  var resultsH2 = document.createElement('h2');
  resultsH2.textContent = 'Results:'
  results.appendChild(resultsH2);

  var ulEl = document.createElement('ul');
  results.appendChild(ulEl);

  for(var i in listOfProductObjects) {
    var liEl = document.createElement('li');
    liEl.textContent = listOfProductObjects[i].name + ': ' + listOfProductObjects[i].votes;
    ulEl.appendChild(liEl);
  }
}

//create event listener when clicking on images
container.addEventListener('click', onClick);

//create event listener for clicking show-results button
var showResults = document.getElementById('show-results');
showResults.addEventListener('click', renderResults);

//display three random images
populate();
