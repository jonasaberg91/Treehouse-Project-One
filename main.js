$(".contact-trigger").text("Contact +");

$('.contact-trigger').click(function() {
    $('.contact-tab').slideToggle(300);
    if( $(this).text() == 'Contact -' ) {
        $(this).text('Contact +');
    } else {
        $(this).text('Contact -');
    }
});