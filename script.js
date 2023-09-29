//animação de digitação utilizando a biblioteca TypeIt

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animacao", {
        speed: 200,
        strings: "o Developer.",
    }).go()
})

//scroll suave utilizando JQuery

$(document).ready(function() {
    $('a[href^="#sobre"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500); // Velocidade da animação em milissegundos
        }
    });
});

$(document).ready(function() {
    $('a[href^="#skills"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500); // Velocidade da animação em milissegundos
        }
    });
});

$(document).ready(function() {
    $('a[href^="#projetos"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500); // Velocidade da animação em milissegundos
        }
    });
});

$(document).ready(function() {
    $('a[href^="#contato"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500); // Velocidade da animação em milissegundos
        }
    });
});

$(document).ready(function() {
    $('a[href^="#home"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500); // Velocidade da animação em milissegundos
        }
    });
});