const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error) {
    console.log("Error:", error);
  }
  if (body === "[]") {
    console.log("breed not found");
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});