const today = new Date().getDate();

const xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=samibanley+advent+calendar+day+${today}&api_key=JSQCmqsSp8XZji7Vb5INMqaEYXzUtDEv&sort=relevant`);
xhr.done((result) => {
  const image = document.getElementById("gif");
  image.src = result.data[0].images.original.url;
});
