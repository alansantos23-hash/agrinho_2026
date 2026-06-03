 document.getElementById('btnAlternativas').addEventListener('click', function() {
    const lista = document.getElementById('listaAlternativas');
    
    if (lista.classList.contains('hidden')) {
        lista.classList.remove('hidden');
        this.textContent = 'Ocultar Alternativas';
    } else {
        lista.classList.add('hidden');
        this.textContent = 'Mostrar Alternativas';
    }
});

// Mensagem motivacional aleatória
const mensagens = [
    "O futuro da agricultura precisa ser mais inteligente, não só mais produtivo.",
    "Nem tudo que é verde é sustentável.",
    "Plantar não é o mesmo que restaurar."
];

console.log("%c" + mensagens[Math.floor(Math.random() * mensagens.length)], "color: #4a7043; font-size: 14px; font-weight: bold;"); 



















































































































