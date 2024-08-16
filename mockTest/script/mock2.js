//menu
let mainMenu = $('nav ul li');
let subMenu = mainMenu.find('ul');
let header = $('header');
mainMenu.hover(function(){
    header.addClass('active');
    subMenu.stop().slideDown();
}, function(){
    header.removeClass('active');
    subMenu.stop().slideUp();
})

//left-right slide
let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentIdx+1)%slideCount;
        slideContainer.animate({marginLeft:-1200*nextIdx+'px'});
        currentIdx = nextIdx;
    },3000);
}
autoSlide();
//popup
let popupLink = $('.notice li:first');
let popup = $('#popup');
let closeBt = popup.find('.close');
popupLink.click(function(e){
    e.preventDefault();
    popup.addClass('active');
})
closeBt.click(function(){
    popup.removeClass('active');
})