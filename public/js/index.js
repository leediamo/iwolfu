var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: "my-api-key", secret: "my-api-secret"});

client.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
    })
    .catch(function (error) {
        // Handle the error
    });