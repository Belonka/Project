$('.about-hiring > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-hiring').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(300);
})