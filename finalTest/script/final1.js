let mainMenu = $('nav ul li');
mainMenu.hover(function(){
    $(this).find('ul').stop().slideDown();
}, function(){
    $(this).find('ul').stop().slideUp();
})

/*slide*/
let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

slide.eq(currentIdx).fadeIn();

function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentIdx+1)%slideCount;
        slide.eq(currentIdx).fadeOut();
        slide.eq(nextIdx).fadeIn();
    },3000)
}
autoSlide();

/*popup*/
let popupLink = $('#notice li:first');
let popup = $('#popup');
let closeBt = popup.find('.close');
popupLink.click(function(e){
    e.preventDefault();
    popup.addClass('active');
});
closeBt.click(function(){
    popup.removeClass('active');
})