 let mainMenu = $('nav ul li');
 let subMenu = mainMenu.find('ul');
 mainMenu.hover(function(){
    subMenu.stop().fadeIn();
 }, function(){
    subMenu.stop().fadeOut();
 })

let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

slide.eq(currentIdx).fadeIn();

function autoSlide(){
    let nextIdx = (currentIdx+1)%slideCount;
    slide.eq(currentIdx).fadeOut();
    slide.eq(nextIdx).fadeIn();
    currentIdx = nextIdx;
}

setInterval(autoSlide,3000);

/*popup*/
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