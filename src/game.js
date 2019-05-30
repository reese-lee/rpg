export class Game{
  constructor(character) {
    this.character = character;
  }

  save() {
    let save = {
      player1 = player
    }
    // localStorage.setItem("save", JSON.stringify(save));
  }


// Crafty.init(200, 200);
//
// var dim1 = {x: 5, y: 5, w: 50, h: 50}
// var dim2 = {x: 20, y: 10, w: 60, h: 40}
//
// var plant = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");
//
// var sheep = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(2).attr(dim2).color("blue");
//
// sheep.bind("EnterFrame", function () {
//     if (plant.x < sheep.x + sheep.w &&
//         plant.x + plant.w > sheep.x &&
//         plant.y < sheep.y + sheep.h &&
//         plant.h + plant.y > sheep.y) {
//         // collision detected!
//         this.color("green");
//     } else {
//         // no collision
//         this.color("blue");
//     }
// });


}
