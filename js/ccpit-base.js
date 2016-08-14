$(document).ready(function () {

    $('.nav-sidebar > li').on('click', function () {
        if ($('#main-left').is(":visible")) {
            console.log('visible');
            $('#main-left').hide();
            $('#main-split').hide();
            $('#main-content').removeClass('main-content').addClass('main-content-unfold');
            $('.dossier').addClass('dossier-unfold');
        } else {
            $('#main-left').show();
            $('#main-split').show();
            $('#main-content').removeClass('main-content-unfold').addClass('main-content');
            $('.dossier').removeClass('dossier-unfold');
        }
    });

    $('#dossier-button').on('click', function () {
        if (!$('.dossier').hasClass('open')) {
            $('.dossier .header .title').html("收起");
            $('.dossier .header .icon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            $('.dossier').addClass('open');
        } else {
            $('.dossier .header .title').html("展开");
            $('.dossier .header .icon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            $('.dossier').removeClass('open');
        }
    });

    $('.leftContorl-menu').on('click', function () {
        if ($('#main-left').is(":visible")) {
            console.log('visible');
            $('#main-left').hide();
            $('#main-split').hide();
            $('#main-content').removeClass('main-content').addClass('main-content-unfold');
            $('.leftContorl-arrow').hide();
            $('.dossier').addClass('dossier-unfold');
        } else {
            $('#main-left').show();
            $('#main-split').show();
            $('#main-content').removeClass('main-content-unfold').addClass('main-content');
            $('.leftContorl-arrow').show();
            $('.dossier').removeClass('dossier-unfold');
        }
    });

});