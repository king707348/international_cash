$('#hdService').on('click',function(){
    $(this).find( $('.under_line') ).addClass('on');
    $('#hdWork,#hdCareers').find( $('.under_line') ).removeClass('on');
    $('html,body').animate({
        scrollTop:0
    },500)
    $('.contact-form').fadeOut(500, toMain)
    return false
})
$('#hdWork').on('click',function(){
    $(this).find( $('.under_line') ).addClass('on');
    $('#hdService,#hdCareers').find( $('.under_line') ).removeClass('on');
    $('html,body').animate({
        scrollTop:$('.zone1').height()+1
    },500)
    $('.contact-form').fadeOut(500, toMain)
    return false
})
$('#hdCareers').on('click',function(){
    $(this).find( $('.under_line') ).addClass('on');
    $('#hdService,#hdWork').find( $('.under_line') ).removeClass('on');
    $('html,body').animate({
        scrollTop:$('.zone1').height()+ $('.zone2').height()+1
    },500)
    $('.contact-form').fadeOut(500, toMain)
    return false
})

$(window).scroll(function(){
    if($('html,body').scrollTop() < $('.zone1').height()){
        $('#hdWork,#hdCareers').find( $('.under_line') ).removeClass('on');
        $('#hdService').find( $('.under_line') ).addClass('on');
    }
    if($('html,body').scrollTop() > $('.zone1').height() && $('html,body').scrollTop() < $('.zone2').height()+ $('.zone1').height()){
        $('#hdService,#hdCareers').find( $('.under_line') ).removeClass('on');
        $('#hdWork').find( $('.under_line') ).addClass('on');
    }
    if($('html,body').scrollTop() > $('.zone1').height()+ $('.zone2').height() ){
        $('#hdService,#hdWork').find( $('.under_line') ).removeClass('on');
        $('#hdCareers').find( $('.under_line') ).addClass('on');
    }
})


// contact
$('.contact').on('click',function(e){
    e.preventDefault()
    $('#hdService,#hdWork,#hdCareers').find( $('.under_line') ).removeClass('on');
    $('.main').fadeOut(500,toCont)
})

function toCont(){
    $('.contact-form').fadeIn(500)
}
function toMain(){
    $('.main').fadeIn(500)
}

