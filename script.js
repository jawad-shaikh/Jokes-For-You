fetch('https://icanhazdadjoke.com/slack')
  .then(response => response.json())
  .then(data => document.getElementById("textHere").innerHTML = data.attachments[0].fallback);