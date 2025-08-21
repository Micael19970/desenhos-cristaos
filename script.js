// Efeito escrita no título principal
const frases = ["🌟 Mais de 50 Páginas Cristãs para Colorir!"];
let i = 0, j = 0, apagando = false;
const typewriter = document.getElementById('typewriter');
function escrever() {
  if (!typewriter) return;
  if (!apagando && j <= frases[i].length) {
    typewriter.textContent = frases[i].slice(0, j++);
    setTimeout(escrever, 60);
  } else if (apagando && j > 0) {
    typewriter.textContent = frases[i].slice(0, --j);
    setTimeout(escrever, 30);
  } else {
    setTimeout(() => { apagando = !apagando; escrever(); }, 1200);
  }
}
escrever();

// Timer regressivo
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `00:${minutes}:${seconds}`;
    if (--timer < 0) timer = 0;
  }, 1000);
}
window.addEventListener('DOMContentLoaded', () => {
  const timerDisplay = document.getElementById('timer');
  if (timerDisplay) startTimer(15*60+23, timerDisplay);
});

// Timer regressivo da barra de urgência (topo)
function startBarraTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${minutes}:${seconds}`;
    if (--timer < 0) timer = 0;
  }, 1000);
}
window.addEventListener('DOMContentLoaded', () => {
  const barraTimer = document.getElementById('barra-timer');
  if (barraTimer) startBarraTimer(15*60, barraTimer);
});

// Barra de progresso animada
function animarProgresso() {
  const fill = document.getElementById('progresso-fill');
  const num = document.getElementById('progresso-num');
  let percent = 87;
  fill.style.width = percent + '%';
  if (percent < 90) fill.style.background = 'linear-gradient(90deg, #4be37a 60%, #f7b500 90%, #f74d4d 100%)';
  else if (percent < 97) fill.style.background = 'linear-gradient(90deg, #f7b500 60%, #f74d4d 100%)';
  else fill.style.background = 'linear-gradient(90deg, #f74d4d 100%)';
  num.textContent = percent + '%';
}
window.addEventListener('DOMContentLoaded', animarProgresso);

// Notificações de compra (fake)
const nomes = [
  "Ana de Fortaleza",
  "João de Recife",
  "Maria de SP",
  "Lucas de BH",
  "Paula de Salvador",
  "Rafael de Manaus",
  "Camila de Brasília",
  "Felipe de Porto Alegre",
  "Larissa de Belém",
  "Gustavo de Campinas",
  "Bruna de Florianópolis",
  "Tiago de Goiânia",
  "Isabela de Vitória",
  "Marcos de Curitiba",
  "Patrícia de Maceió",
  "Renato de Santos"
];
const produtos = ["acabou de comprar!", "garantiu o Super Pack!", "comprou o pack básico!", "aproveitou a oferta!"];
function mostrarNotificacao() {
  const notif = document.createElement('div');
  notif.className = 'toast';
  const nome = nomes[Math.floor(Math.random()*nomes.length)];
  const produto = produtos[Math.floor(Math.random()*produtos.length)];
  notif.textContent = `🎉 ${nome} ${produto}`;
  document.getElementById('notificacoes').appendChild(notif);
  notif.style.opacity = 1;
  setTimeout(() => { notif.style.opacity = 0; notif.remove(); }, 120000);
}
setInterval(mostrarNotificacao, 7000);

// Carrossel de avatares (sem texto)
const avatares = [
  "avatar1.png",
  "avatar2.png",
  "avatar3.png",
  "avatar4.png",
  "avatar5.png"
];
function renderAvatares() {
  const wrapper = document.getElementById('depoimentos-wrapper');
  wrapper.innerHTML = '';
  const img = document.createElement('img');
  img.className = 'depoimento-avatar';
  img.alt = 'Avatar de cliente';
  img.style.margin = '0 auto';
  wrapper.appendChild(img);
  let idx = 0;
  function trocarAvatar() {
    img.src = avatares[idx];
    idx = (idx + 1) % avatares.length;
  }
  trocarAvatar();
  setInterval(trocarAvatar, 1800);
}
window.addEventListener('DOMContentLoaded', renderAvatares);

// Galeria de produto com zoom
const imagens = ["exemplo1.png", "exemplo2.png", "exemplo3.png", "exemplo4.png"];
function renderGaleria() {
  const galeria = document.getElementById('galeria');
  imagens.forEach(img => {
    const i = document.createElement('img');
    i.src = img;
    i.className = 'galeria-img';
    i.alt = 'Página para colorir';
    i.onclick = () => {
      const zoom = document.createElement('div');
      zoom.style.position = 'fixed';
      zoom.style.top = 0; zoom.style.left = 0; zoom.style.right = 0; zoom.style.bottom = 0;
      zoom.style.background = 'rgba(0,0,0,0.8)';
      zoom.style.display = 'flex';
      zoom.style.alignItems = 'center';
      zoom.style.justifyContent = 'center';
      zoom.style.zIndex = 9999;
      const imgZoom = document.createElement('img');
      imgZoom.src = img;
      imgZoom.style.maxWidth = '90vw';
      imgZoom.style.maxHeight = '80vh';
      imgZoom.style.borderRadius = '1.2rem';
      zoom.appendChild(imgZoom);
      zoom.onclick = () => zoom.remove();
      document.body.appendChild(zoom);
    };
    galeria.appendChild(i);
  });
}
window.addEventListener('DOMContentLoaded', renderGaleria);

// FAQ acordeão
const faqBtns = document.getElementsByClassName('faq-pergunta');
Array.from(faqBtns).forEach(btn => {
  btn.onclick = function() {
    const item = this.parentElement;
    item.classList.toggle('open');
    this.classList.toggle('active');
  };
});

// Confete animado ao clicar no botão de compra
function confete() {
  const canvas = document.getElementById('confete');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  let confetes = Array.from({length: 80}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*-canvas.height,
    r: Math.random()*6+4,
    d: Math.random()*Math.PI*2,
    c: `hsl(${Math.random()*360},90%,60%)`,
    s: Math.random()*2+1
  }));
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetes.forEach(f => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, 2*Math.PI);
      ctx.fillStyle = f.c;
      ctx.fill();
    });
  }
  function update() {
    confetes.forEach(f => {
      f.y += f.s;
      f.x += Math.sin(f.d)*2;
      if (f.y > canvas.height) f.y = -10;
    });
  }
  let frames = 0;
  function animar() {
    draw(); update();
    frames++;
    if (frames < 80) requestAnimationFrame(animar);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  animar();
}
// Redirecionamento dos botões de compra
const linkCheckout = 'https://pay.cakto.com.br/ktpbfeq_527643';
const linkSuperPack = 'https://pay.cakto.com.br/zpvvdzu_534181';

document.getElementById('cta-main').onclick = function() {
  confete();
  setTimeout(() => { window.location.href = linkCheckout; }, 800);
};
document.querySelector('.cta-barra').onclick = function() {
  window.location.href = linkCheckout;
};
document.getElementById('cta-superpack').onclick = function() {
  confete();
  setTimeout(() => { window.location.href = linkSuperPack; }, 800);
};
document.getElementById('cta-main-card').onclick = function() {
  confete();
  setTimeout(() => { window.location.href = linkCheckout; }, 800);
};

// Scroll animations
function animarScroll() {
  const anims = document.querySelectorAll('[data-anim]');
  anims.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) el.classList.add('animar');
  });
}
window.addEventListener('scroll', animarScroll);
window.addEventListener('DOMContentLoaded', animarScroll);
