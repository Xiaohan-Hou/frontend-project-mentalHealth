$(document).ready(function() {

    //toggle answer
    $('.menu-btn').click(function(){
        $('.navbar-right').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('header').toggleClass("fixed");
        $('.circle-nav-image').toggleClass('full-opacity');
    })

    //toggle image opacity
    $('.circle-container').hover(function(){
        $(this).find('.circle-nav-image').toggleClass('full-opacity');
    })

    //Toggle the share your experience button
    $('.share-button').hover(function(){
        $('.share-button').toggleClass('active');
    })

    //Toggle the share your experience button
    $('.submit-button').hover(function(){
        $('.submit-button').toggleClass('active');
    })

});



    




  