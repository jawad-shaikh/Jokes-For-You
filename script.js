const jokeBox = document.getElementById("jokeBox");

fetch('https://icanhazdadjoke.com/slack')
  .then(response => response.json())
  .then(data => {
    jokeBox.innerHTML = data.attachments[0].fallback
  });