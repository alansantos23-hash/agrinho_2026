 JavaScript

let plantas = [];
let particulas = [];
let sol;

function setup() {
  createCanvas(800, 600);
  sol = { x: 150, y: 120, r: 60 };
  
  // Cria as plantas iniciais
  for (let i = 0; i < 8; i++) {
    plantas.push(new Planta(random(100, 700), 520));
  }
}

function draw() {
  background(135, 206, 235);
  
  // Desenha os elementos do cenário
  drawNuvens();
  desenharSol();
  desenharCenario();
  
  // Atualiza e mostra as plantas
  for (let planta of plantas) {
    planta.atualizar();
    planta.mostrar();
  }
  
  // Atualiza e mostra as partículas de terra
  for (let i = particulas.length - 1; i >= 0; i--) {
    particulas[i].atualizar();
    particulas[i].mostrar();
    if (particulas[i].vida < 0) particulas.splice(i, 1);
  }
  
  // Textos informativos na tela
  desenharTextos();
}

// --- FUNÇÕES AUXILIARES DE DESENHO ---

function desenharSol() {
  fill(255, 220, 0);
  circle(sol.x, sol.y, sol.r * 2);
  fill(255, 240, 100);
  circle(sol.x, sol.y, sol.r * 1.6);
}

function desenharCenario() {
  // Terra
  fill(139, 69, 19);
  rect(0, 450, width, height - 450);
  // Grama
  fill(34, 139, 34);
  rect(0, 480, width, height - 480);
}

function drawNuvens() {
  fill(255);
  noStroke();
  desenharNuvem(100, 80, 1.2);
  desenharNuvem(400, 50, 0.9);
  desenharNuvem(650, 110, 1.1);
}

function desenharNuvem(x, y, escala) {
  circle(x, y, 60 * escala);
  circle(x + 35 * escala, y - 10, 50 * escala);
  circle(x + 70 * escala, y, 55 * escala);
}

function desenharTextos() {
  fill(255);
  noStroke();
  textSize(32);
  textAlign(CENTER);
  text("🌱 Agrinho 2026 🌱", width / 2, 55);
  textSize(22);
  text("Campo e Cidade: Conexões que Transformam", width / 2, 85);
  
  fill(0);
  textSize(16);
  text("Clique na terra para plantar sementes!", width / 2, height - 20);
}

// --- INTERAÇÃO ---

function mousePressed() {
  // Verifica se o clique foi na região da terra/grama
  if (mouseY > 450 && mouseY < 580) {
    plantas.push(new Planta(mouseX, 520));
    for (let i = 0; i < 15; i++) {
      particulas.push(new Particula(mouseX, mouseY - 20));
    }
  }
}

// --- CLASSES ---

class Planta {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.altura = random(30, 80);
    this.fase = random(0.3, 1.8);
    this.corFolha = color(34, random(120, 180), 34);
  }
  
  atualizar() {
    if (this.fase < 3) this.fase += 0.008;
  }
  
  mostrar() {
    push();
    translate(this.x, this.y);
    
    // Caule
    stroke(34, 139, 34);
    strokeWeight(6);
    line(0, 0, 0, -this.altura * this.fase * 0.7);
    
    // Folhas
    noStroke();
    fill(this.corFolha);
    let h = -this.altura * this.fase * 0.7;
    
    for (let i = 1; i < 5; i++) {
      let hy = h * (i / 4);
      push();
      rotate(-0.6);
      ellipse(0, hy, 35 * this.fase, 12);
      pop();
      
      push();
      rotate(0.6);
      ellipse(0, hy, 35 * this.fase, 12);
      pop();
    }
    
    // Flor/Fruto quando cresce
    if (this.fase > 1.5) {
      fill(255, 215, 0);
      circle(0, h - 15, 25);
      fill(255, 140, 0);
      circle(0, h - 15, 18);
    }
    
    pop();
  }
}

class Particula {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-4, -1);
    this.vida = 60;
    this.cor = color(34, 180, 34, 200);
  }
  
  atualizar() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.15; // Gravidade da partícula
    this.vida--;
  }
  
  mostrar() {
    noStroke();
    fill(this.cor);
    circle(this.x, this.y, this.vida / 8);
  }
}

























































































































