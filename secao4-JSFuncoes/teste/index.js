const body = document.querySelector("body");

setInterval(() => {
  body.style.backgroundColor =
    "#" + Math.floor(Math.random() * (255 * 255 * 255)).toString(16);
}, 10);
16777215;
