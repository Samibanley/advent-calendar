// const giphyFetch = require("giphy/js-fetch-api");

// const gf = new giphyFetch("JSQCmqsSp8XZji7Vb5INMqaEYXzUtDEv");

// const { data } = gf.search("samibanley advent calendar", {sort: "relevant"});

// const image = document.getElementById("gif");
// image.src = data[0].url;

//javascript, jQuery

const today = new Date().getDate();
// const dayNum = today.getDate();
console.log(today);

const xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=samibanley+advent+calendar+day+${today}&api_key=JSQCmqsSp8XZji7Vb5INMqaEYXzUtDEv&sort=relevant`);
xhr.done(function (data) {
  console.log("success got data", data);
  const image = document.getElementById("gif");
  image.src = data.data[0].embed_url;
  console.log(data.data[0].embed_url);
});