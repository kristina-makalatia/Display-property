$("#portfolio-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 500);
});
$("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});
$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
});




jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
       });

});

jQuery(document).ready(function() {
    jQuery('.post2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated  bounceInUp',
        offset: 100
       });
});