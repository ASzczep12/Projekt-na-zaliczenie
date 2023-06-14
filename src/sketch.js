// Szerokośc paska z kolorem 20 pikseli
const barWidth = 20;
// Poprzedni pasek (aby nie rysować go ponownie)
let lastBar = -5;
// Zapamientywamy poprzednie localizacje dla myszy
let mouse_trail = [];

function setup() {
  // Stwórz płótno 500x500 pikseli
  createCanvas(500, 500);
  // Zmiana na tryb kolorów HSB
  // (Tryb, Hue, Saturation, Brightness)
  colorMode(HSB, width, height, 100);
  // Bez konturu
  noStroke();
}

function draw() {

  // Który pasek = pozycja myszy po X / szerokość paska
  let whichBar = mouseX / barWidth;
  // Jeśli pasek jest inny niż poprzedni
  if (whichBar !== lastBar) {
    // Wybierz kolor na podstawie pozycji myszy
    let barX = whichBar * barWidth;
    // Ustaw kolor wypełnienia na podstawie pozycji myszy
    fill(barX, mouseY, 66);
    // Narysuj prostokąt na podstawie pozycji myszy
    rect(barX, 0, barWidth, height);
    // Zapisz poprzedni pasek jako obecny
    lastBar = whichBar;
  }

  // Dodaj aktualną pozycję myszy do tablicy
  mouse_trail.push(new p5.Vector(mouseX, mouseY));

  // Jeśli ścieżka jest zbyt długa, usuń pierwszy (najstarszy) punkt
  if (mouse_trail.length > 30) {
    // Usuń pierwszy element z tablicy
    mouse_trail.shift();
  }

  // Narysuj ścieżkę
  for (let i = 0; i < mouse_trail.length; i++) {
    // Pobierz punkt z tablicy
    let p = mouse_trail[i];

    // Wybierz kolor na podstawie pozycji myszy
    let c = color('magenta');
    fill(c);

    // Rozmiar ścieżki jest mniejszy na początku,
    // a większy bliżej myszy
    let size = 40.0 * i / mouse_trail.length;
    // Narysuj koło w punkcie
    circle(p.x, p.y, size);
  }
}