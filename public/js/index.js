function refreshPage(){
  window.location.reload();
} 
const imageRandom = document.getElementById("imageRandom");

function getRandomImage(){
  const randomImageApiUrl = "api/randomdog";
  fetch(randomImageApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // now we got the json . we can use this to update any data in html 
      console.log(json);
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

// JSON object appending information: