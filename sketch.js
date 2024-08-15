function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background("black");
    fill("white");
    textSize(64);
    textAlign(CENTER, CENTER);
    
    if(mouseX < 50) {
      let palavra = "C";
      text(palavra, 200, 200);
    } else {
      let palavra = "Teotonio";
      text(palavra, 200, 200);
    }
  }
  
  