(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {

        //google maps impostor
        var map = L.map('mapa').setView([24.747377, -107.553052], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([24.747377, -107.553052]).addTo(map)
            .bindPopup('Casa de pepillo')
            .openPopup()
            .bindTooltip('aqui vive el vrga')
            .openTooltip();


    }); //DOM Contetn Loaded
})();


//implementando jquery:
$(function() {
    //usando plugin lettering:
    $('.nombre-sitio').lettering();

    //barra del menu fijo
    var windowHeight = $(window).height();
    console.log(windowHeight);
    var barraAltura = $('.barra').innerHeight();

    console.log(barraAltura);
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > windowHeight) {
            console.log("has rebasado la altura de la pantalla");
            $('.barra').addClass('fixed');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            console.log("aun no");
            $('.barra').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' });
        }
    });

    //menu resonsivo:
    // $('.menu-movil').on('click', function() {
    //     $('.navegacion-principal').slideToggle();
    // });

    //programa de conferencias:
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    //alert("funciona");
    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        console.log(enlace);
        $(enlace).fadeIn(1000);
        //quitar salto:
        return false;
    })

    //animaciones para los numeros:
    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1200);

    //Cuenta regresiva:

    $('.cuenta-regresiva').countdown('2020/11/12 09:02:00', function(event) {

        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));

    });
});