function collapse(){
    $('.content_movil').toggle('slow');
}
$(document).ready(function () {
    $('#spinner').hide();
    $('input').each(function () {
        $(this).on('focus', function () {
            $(this).parent('.wrapper').addClass('active');
        });
        $(this).on('blur', function () {
            if ($(this).val().length === 0) {
                $(this).parent('.wrapper').removeClass('active');
            }
        });
        if ($(this).val() !== '') $(this).parent('.wrapper').addClass('active');
    });
    //$("#valid").validate();
});
$(document).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    if(scrollTop > 100){
        $('.vass_menu').removeClass('up');
        $('.vass_menu').addClass('down');
        if(ventana_ancho > 991.98){
            $('.talento').css('border-left','1px solid #000');
        }
    }else{
        $('.vass_menu').removeClass('down');
        $('.vass_menu').addClass('up');
        if(ventana_ancho > 991.98){
            $('.talento').css('border-left','1px solid #fff');
        }
    }
    if(scrollTop > 540){
        $('.talento').css('border-left','0px solid #000');
    }
});
$(document).ready(function(){
    $(".btn_hamburger").click(function(){
        $("#men_movil_colapse").slideToggle();
    });
});

function valid() {
    $('#spinner').show();
    setTimeout(function(){  
        
        var nombre = $('#el1').val();
        var email = $('#el2').val();
        var empresa = $('#el3').val();
        var mensaje = $('#el6').val();
        if (nombre === '' ) {
            $('#requeridoName').append('<strong>Campo Nombre requerido</strong>');
        }else{
            $('#requeridoName').empty();
        }
        if (email === '' ) {
            $('#requeridoEmail').append('<strong>Campo Email requerido</strong>');
        }else{
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var resultmail = regex.test(email);
            if (!resultmail) {
                $('#requeridoEmail').append('<strong>Correo no valido</strong>');
            }else{
                $('#requeridoEmail').empty();
            }
        }
        if (empresa === '' ) {
            $('#requeridoEmpresa').append('<strong>Campo Empresa requerido</strong>');
        }else{
            $('#requeridoEmpresa').empty();
        }
        if (mensaje === '' ) {
            $('#requeridoMensaje').append('<strong>Campo Mensaje requerido</strong>');
        }else{
            $('#requeridoMensaje').empty();
        }
        $('#spinner').hide();

    }, 2000);
}