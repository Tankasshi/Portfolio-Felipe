var cards = document.querySelectorAll('.cards');

cards.forEach(function(card) {
  var button = card.querySelector('.saiba-mais');
  
  button.addEventListener('click', function() {
    cards.forEach(function(c) {
      if (c !== card) {
        c.classList.remove('active');
        var otherButton = c.querySelector('.saiba-mais');
        otherButton.textContent = 'Saiba Mais';
      }
    });
    
    card.classList.toggle('active');
    
    if (card.classList.contains('active')) {
      button.textContent = 'Mostrar Menos';
    } else {
      button.textContent = 'Saiba Mais';
    }
  });
});








