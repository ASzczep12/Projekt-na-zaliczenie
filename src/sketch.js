// Szerokośc paska z kolorem 20 pikseli
const barWidth = 20;
let lastBar = -5;
// Zapamientywamy poprzednie localizacje dla myszy
let mouse_trail = [];

function setup() {
  // Stwórz płótno 500x500 pikseli
  createCanvas(500, 500);
  // Zmiana na tryb kolorów HSB
  // (Tryb, Hue, Saturation, Brightness)
  colorMode(HSB, width, height, 100);
  // Brak krawędzi - samo wypełnienie bez obwodzenia
  noStroke();
}

function draw() {

  // Który pasek = pozycja myszy po X / szerokość paska
  let whichBar = mouseX / barWidth;
  // 
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(barX, mouseY, 66);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }

  // Add a point to the end of the trail at the mouse position
  mouse_trail.push(new p5.Vector(mouseX, mouseY));

  // If the trail gets too long, remove the first (oldest) point
  if (mouse_trail.length > 30) {
    mouse_trail.shift();
  }

  // Draw the trail
  for (let i = 0; i < mouse_trail.length; i++) {
    // Trail point
    let p = mouse_trail[i];

    // Set fill color for circle to magenta
    let c = color('magenta');
    fill(c);

    // The trail is smaller at the beginning,
    // and larger closer to the mouse
    let size = 40.0 * i / mouse_trail.length;
    circle(p.x, p.y, size);
  }
}