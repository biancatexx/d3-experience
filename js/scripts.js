/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 


window.addEventListener('DOMContentLoaded', event => {

    AOS.init();

    // // Iniciará quando todo o corpo do documento HTML estiver pronto.
    // $().ready(function() {
    //     setTimeout(function () {
    //         $('#msgForm').hide(); // "foo" é o id do elemento que seja manipular.
    //     }, 6000); // O valor é representado em milisegundos.
    // });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });


    $('#submitFormReserva').click( function(e) {
        e.preventDefault();

        var nome = $('#inputNomeC').val();
        var email = $('#inputEmailC').val();
        var celular = $('#inputCelularC').val();
        var experiencias = $('#inputExperiencesC').val();
        var hospedes = $('#inputHospedesC').val();
        var checkin = $('#inputCheckinC').val();
        var checkout = $('#inputCheckoutC').val();

        console.log('nome: ' + nome + 'email: ' + email + 'celular: ' + celular + 'Experiences: ' 
        + experiencias + 'Hospedes: ' + hospedes +'checkin: ' + checkin + 'cheeckout: ' +checkout );


        checkin.replace(/[\(\)\.\s-]+/g,'');
        checkout.replace(/[\(\)\.\s-]+/g,'');
        var dados = {
            inputName: nome,
            inputEmail: email,
            inputCelular: celular,
            inputExperiences: JSON.stringify(experiencias) ,
            inputHospedes: hospedes,
            inputCheckin: checkin,
            inputCheckout: checkout,
        };


        console.log(JSON.stringify(dados)); 

        $.ajax({
            type: 'POST',
            async: true,
            dataType: 'json',
            url: './php/sendForm.php',
            data: dados,
            beforeSend: function() {
                $('#submitFormReserva').html('Enviando...');
            },
            success: function(result) {
                $('#retornoForReserva').removeClass('hide');
                console.log(result);
                $('#submitFormReserva').html('Enviado');
            },

            error: function(resul) {
                console.log(resul);
                $('#retornoForReserva').removeClass('hide');
                // $('#retornoForReserva').removeClass('hide');
                setTimeout(function() { $("#retornoForReserva").addClass('hide'); }, 6000);
            },

            complete: function() {
                $('#submitFormReserva').html('Enviado');
                $('#sendForm').html('Enviar');
                $('#inputNomeC').val("");
                $('#inputEmailC').val("");
                $('#inputCelularC').val("");
                $('#inputExperiencesC').val("");
                $('#inputHospedesC').val("");
                $('#inputCheckinC').val("");
                $('#inputCheckoutC').val("");

            },


        });

    });

    $('#submitFormContact').click( function(e) {
        e.preventDefault();

        var nome = $('#contatoInputName').val();
        var email = $('#contatoInputEmail').val();
        var celular = $('#contatoInputPhone').val();
        var mensagem = $('#contatoInputMsg').val();


        var dados = {
            inputName: nome,
            inputEmail: email,
            inputCelular: celular,
            inputMensagem: mensagem,
        };


        console.log(JSON.stringify(dados));

        $.ajax({
            type: 'POST',
            async: true,
            dataType: 'json',
            url: './php/sendContact.php',
            data: dados,
            beforeSend: function() {
                $('#submitFormContact').html('Enviando...');
            },
            success: function(result) {
                $('#retornoForContact').removeClass('hide');
                console.log(result);
                $('#submitFormContact').html('Enviado');
            },

            error: function(resul) {
                console.log(resul);
                $('#retornoForContact').removeClass('hide');
                // $('#retornoForReserva').removeClass('hide');
                setTimeout(function() { $("#retornoForContact").addClass('hide'); }, 6000);
            },

            complete: function() {
                $('#contatoInputName').val("");
                $('#contatoInputEmail').val("");
                $('#contatoInputPhone').val("");
                $('#contatoInputMsg').val("");

            },


        });

    });

    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('(00) 0 0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');


    // carregaDocumento("component/navbar.html", "#mainMenu");
    // carregaDocumento("rodape.html", "#mainfooter");

    // function carregaDocumento(arquivo, target)
    // {
    //     var el = document.querySelector(target);

    //     //Se o elemento não existir então não requisita
    //     if (!el) return;

    //     var xhr = new XMLHttpRequest();
    //     xhr.open("GET", arquivo, true);
    //     xhr.onreadystatechange = function(){
    //          if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300){
    //               el.innerHTML = xhr.responseText;
    //          }
    //     };

    //     xhr.send(null);
    // }



});
