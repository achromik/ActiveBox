// auto collapse menu on mobile view after clicking on link
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


//hide navbar when scrolldown
$(window).scroll(function() {

    if ($(this).scrollTop()>25) {
            $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }

});