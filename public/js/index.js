// var petfinder = require("@petfinder/petfinder-js");
// var client = new petfinder.Client({apiKey: "my-api-key", secret: "my-api-secret"});
// const DogBreed = ('https://api.thedogapi.com/v1/images/search');
// const fetch = require("node-fetch");
// client.animal.search()
//     .then(function (response) {
//         // Do something with `response.data.animals`
//     })
//     .catch(function (error) {
//         // Handle the error
//     });
// const HardPass = document.getElementById('NoDeal');
// const Absolutely = document.getElementById('Absolutely')
// HardPass.addEventListener('click', function(){
//     alert('helloWorld');
// });

// Absolutely.addEventListener('click', function(){
//     alert('helloWorld');
// })

// fetch('api/randomdog')
// .then(response => response.json())
// .then(data => console.log(data));

// const AnimalDisplay = document.getElementById('petdisplay')
// AnimalDisplay.setAttribute(DogBreed)

const imageRandom = document.getElementById("imageRandom");

function getRandomImage(){
  const randomImageApiUrl = "api/randomdog";
  fetch(randomImageApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // now we got the json . we can use this to update any data in html 
    //   console.log(json);
      var imageUrl = json[0].url;
      console.log(imageUrl)
      //update the image with new random url
      imageRandom.src=imageUrl;
    })
    .catch(function(error){
      console.log(error);
    });
}
//call the getRandomImage function whenever page loads
getRandomImage();