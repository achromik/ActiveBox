$(function() {
    // auto collapse menu on mobile view after clicking on link
    $(document).on('click','.navbar-collapse.in',function(event) {
        if( $(event.target).is('a') ) {
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

    


    //Smooth scroll to section
    $("a").on('click', function(event) {

        //duration of the top scrolling animation (in ms)
        var scroll_duration = $(document).height() /2.5;


        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, scroll_duration, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //grab the "back to top" link
    $back_to_top = $('.back-to-top');

    

    //hide or show the "back to top" link
    $(window).scroll(function(){
        

        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');   //jshint ignore:line
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        var scroll_duration = $back_to_top.offset().top /2.5;
        event.preventDefault();

        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_duration
        );
    });


});