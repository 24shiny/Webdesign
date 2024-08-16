let mainMenu = $('nav ul li');
mainMenu.hover(function(){
    $(this).find('ul').stop().slideDown();
},function(){
    $(this).find('ul').stop().slideUp();
})

let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentIdx+1)%slideCount;
        slideContainer.animate({marginTop:-300*nextIdx+'px'});
        currentIdx = nextIdx;
    },3000)
}
autoSlide();

/*tabMenu*/
let tabMenu = $('.tabMenu li');
let tabContent = $('.tabContent div');

tabMenu.click(function(e){
    e.preventDefault();
    tabMenu.removeClass('active');
    $(this).addClass('active');

    let target = $(this).find('a').attr('href');
    tabContent.removeClass('active');
    $(target).addClass('active');
})