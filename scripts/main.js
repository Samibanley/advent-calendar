const today = new Date().getDate();
const dayNum = today > 25 ? 25 : today;

const xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=samibanley+advent+calendar+day+${dayNum}&api_key=JSQCmqsSp8XZji7Vb5INMqaEYXzUtDEv&sort=relevant`);
xhr.done((result) => {
  const image = document.getElementById("gif");
  image.src = result.data[0].images.original.url;
  console.log(image.src);
});
