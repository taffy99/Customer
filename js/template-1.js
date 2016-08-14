$(function () {
    $(".addWell-addBtn").click(function () {
        $(".addWell-area").toggle()
        $(this).toggleClass("addBtnBot btn-primary")
    });

    $(".exp-icon").click(function () {
        var that = $(this)
        that.find("i").toggleClass("glyphicon-plus glyphicon-minus")
        that.siblings(".node").find("i").toggleClass("glyphicon-folder-close glyphicon-folder-open")
        that.siblings("ul").toggleClass("hide")
    });

    $('.btn-default-active').on('click', function () {
        $('.btn-default-active').removeClass('btn-default-active');
    });

    $( "#datepicker" ).datepicker();
    $( "#datepicker" ).datepicker("option", "dateFormat", "yy-mm-dd");
	$('#rootwizard').bootstrapWizard({'tabClass': 'bwizard-steps'});
	

});