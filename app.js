// Seleciona o elemento principal que envolve o envelope
const envelopeWrapper = document.querySelector(".envelope-wrapper");

// Seleciona o coração
const heart = document.getElementById("heart");

/**
 * Função para abrir ou fechar a carta.
 * Adiciona ou remove a classe 'open' no wrapper do envelope.
 */
const toggleLetter = () => {
  envelopeWrapper.classList.toggle("open");
};

// Adiciona um ouvinte de evento de clique ao wrapper do envelope
envelopeWrapper.addEventListener("click", toggleLetter);

// Adiciona um ouvinte de evento de clique ao coração (opcional, caso queira que o coração também seja clicável)
heart.addEventListener("click", (e) => {
  // Impede que o clique no coração propague para o envelope e feche a carta logo após abrir
  e.stopPropagation(); 
  toggleLetter();
});
