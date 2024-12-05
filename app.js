import juegos from './assets/js/juegos.js';

const $carrusel_cards = document.querySelectorAll('.card');
const $carrusel_puntitos = document.querySelectorAll('.dot');

document.addEventListener('DOMContentLoaded', () => {
    imprimir_juegos(0);
    $carrusel_cards[0].click();
});

// CARRUSEL
$carrusel_cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        $carrusel_cards.forEach((card, index) => {
            card.classList.remove('active');
        });
        card.classList.add('active');
        $carrusel_puntitos.forEach((puntito) => {
            puntito.classList.remove('active');
        });
        $carrusel_puntitos.forEach((puntito) => {
            puntito.style.backgroundColor = 'darkgray';
        });
        $carrusel_puntitos[index].style.backgroundColor = 'snow';
        
        imprimir_juegos(index)
    });
});
$carrusel_puntitos.forEach((puntito, index) => {
    puntito.addEventListener('click', () => {
        $carrusel_cards.forEach((card, index) => {
            card.classList.remove('active');
        });
        $carrusel_cards[index].classList.add('active');
        $carrusel_puntitos.forEach((puntito) => {
            puntito.style.backgroundColor = 'darkgray';
        });
        puntito.style.backgroundColor = 'snow';

        imprimir_juegos(index)
    });
});

// completar juegos
const $juegos__container = document.querySelector('.juegos__container');

function imprimir_juegos(index) {
    const juego = juegos[index];
    $juegos__container.innerHTML = '';
    juego.juegos.forEach((juego) => {
        const $juego_card = document.createElement('div');
        $juego_card.classList.add('game_card');
        $juego_card.setAttribute('data-link', juego.link);
        $juego_card.innerHTML = `
            <img src="assets/img/${juego.img}" alt="imagen ${juego.name}">
            <h1>${juego.name}</h1>
        `;
        $juegos__container.appendChild($juego_card);
    });

    document.querySelectorAll('.game_card').forEach((game_card, index) => {
        game_card.addEventListener('click', () => {
            window.location.href = game_card.getAttribute('data-link');
        });
    });

}

// ayuda
const $help = document.querySelector('#help');
const $close = document.querySelector('.fa-solid.fa-close');
const $$main = document.querySelectorAll('main>div');

$help.addEventListener('click', () => {  
    $$main.forEach((main) => {
        main.classList.toggle('hidden');
    });
    
});

$close.addEventListener('click', () => {
    $$main.forEach((main) => {
        main.classList.toggle('hidden');
    });
});

