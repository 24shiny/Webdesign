let mainMenu = $('nav ul li');
mainMenu.hover(function(){
    $(this).find('ul').stop().slideDown();
}, function(){
    $(this).find('ul').stop().slideUp();
})

let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentidx = 0;

function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentidx+1)%slideCount;
        slideContainer.animate({top:-100*nextIdx+'%'});
        currentidx = nextIdx;
    },3000)
}

autoSlide();

let popupLink = $('#notice li:first');
let popup = $('#popup');
let closeBt = popup.find('.close');
popupLink.click(function(e){
    e.preventDefault();
    popup.addClass('active');
})
closeBt.click(function(){
    popup.removeClass('active');
})