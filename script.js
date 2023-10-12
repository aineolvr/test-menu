// menu nome/sobrenome
const headerContent = document.querySelector('.header-content');
const optionsCard = document.querySelector('.options-card');
const svgIcon = document.querySelector('.header-content svg');

// adicionando evento de click ao svg 
svgIcon.addEventListener('click', () => {
    optionsCard.classList.toggle('show');
});

//fechar o options-card quando clicar fora deles 
document.addEventListener('click', (event) => {
    if(!optionsCard.contains(event.target) && !svgIcon.contains(event.target)) {
        optionsCard.classList.remove('show');
    }
})


//menu mobile click - abertura e fechamento 

const mobileMenuButton = document.getElementById('mobile-menu-button');
const menuContent = document.getElementById('additional-buttons');
const BtnCancelar = document.getElementById('btn-cancelar');

mobileMenuButton.addEventListener('click', () => {
    console.log('cliquei')
    if (menuContent.style.display === 'block') {
        menuContent.style.display ='none';
    } else {
        menuContent.style.display = 'block';
    }
});









  
  
  
  

   
    




 
 
