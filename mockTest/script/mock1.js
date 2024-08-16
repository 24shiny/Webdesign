// nav
let mainMenu = $('nav ul li');
let subMenu = mainMenu.find('ul');
mainMenu.hover(function(){
    subMenu.stop().slideDown();
}, function(){
    subMenu.stop().slideUp();
})

//slide
let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;
function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentIdx+1)%slideCount;
        slideContainer.animate({marginTop:-300*nextIdx+'px'});
        currentIdx = nextIdx;
    },3000);
}
autoSlide();

//notice
let tabMenu = $('.tabMenu li');
let tabContent = $('.tabContent div')
tabMenu.click(function(e){
    e.preventDefault();
    tabMenu.removeClass('active');
    $(this).addClass('active');
    
    let target = $(this).find('a').attr('href');
    tabContent.removeClass('active');
    $(target).addClass('active');
})

//popup
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