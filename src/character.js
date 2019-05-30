export class Sheep {
  constructor(name, level, intelligence) {
    this.name = name;
    this.level = level;
    this.intelligence = intelligence;
  }

  checkLevel() {
    let level = 0;
  }

  let imgObj = null;
  function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
  }

  function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
  }

  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 39) {
      moveRight();
    }
  });
  window.onload = init;
}
