$(window).scroll(function(){
    if($('html,body').scrollTop() < $('.zone1').height()){
        $('#hdWork,#hdCareers').find( $('.under_line') ).removeClass('on');
        $('#hdService').find( $('.under_line') ).addClass('on');
    }
    if($('html,body').scrollTop() > $('.zone1').height() && $('html,body').scrollTop() < $('.zone2').height() + $('.zone1').height()){
        $('#hdService,#hdCareers').find( $('.under_line') ).removeClass('on');
        $('#hdWork').find( $('.under_line') ).addClass('on');
    }
    if($('html,body').scrollTop() > $('.zone1').height() + $('.zone2').height() && $('html,body').scrollTop() < $('.zone1').height() + $('.zone2').height() + $('.zone3').height()){
        $('#hdService,#hdWork').find( $('.under_line') ).removeClass('on');
        $('#hdCareers').find( $('.under_line') ).addClass('on');
    }
})

$('#hdService').on('click',function(e){
    e.preventDefault()
    $('.contact-form').fadeOut(500, toMain)
    $('#hdWork,#hdCareers').find( $('.under_line') ).removeClass('on');
    $(this).find( $('.under_line') ).addClass('on');
    $('html,body').animate({
        scrollTop:0
    },500)
    return false
})
$('#hdWork').on('click',function(e){
    e.preventDefault()
    $('.contact-form').fadeOut(500, toMain)
    $('#hdService,#hdCareers').find( $('.under_line') ).removeClass('on');
    $(this).find( $('.under_line') ).addClass('on');
    $('html,body').animate({
        scrollTop:$('.zone1').height() + 1
    },500)
    return false
})
$('#hdCareers').on('click',function(e){
    e.preventDefault()
    $('.contact-form').fadeOut(500, toMain)
    $('#hdService,#hdWork').find( $('.under_line') ).removeClass('on');
    $(this).find( $('.under_line') ).addClass('on');
    $('html,body').animate({
        scrollTop:$('.zone1').height() + $('.zone2').height() + 1
    },500)
    return false
})

// contact
$('.contact').on('click',function(e){
    e.preventDefault()
    $('.main').fadeOut(500,toCont)
    $('#hdService,#hdWork,#hdCareers').find( $('.under_line') ).removeClass('on');
    return false
})

function toCont(){
    $('.contact-form').fadeIn(500)
}
function toMain(){
    $('.main').fadeIn(500)
}

