$(document).ready(function () {

    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })

    $('#sign-button').on('click', function () {
        $('#left-opinion').toggle();
        $('#left-sign').toggle();
        $(this).toggleClass('btn-default');
        $(this).toggleClass('btn-primary');
    });

    $('.btn-default-active').on('click', function () {
       $('.btn-default-active').removeClass('btn-default-active');
    });
});