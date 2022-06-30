$(document).ready(function () {
    var divBotao = $('.botaoVoltar');
    var linkBotao = $('.botaoVoltar-Link');

    /* Mostrar botão*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            divBotao.fadeIn();
        } else {
            divBotao.fadeOut();
        }

    });

    /* Clicar e voltar ao topo*/

    divBotao.click(function () {

        $('html,body').animate({ scrollTop: 0 }, 800);

        return false;
    });
});

