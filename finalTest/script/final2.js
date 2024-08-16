let mainMenu = $('nav ul li');
let subMenu = mainMenu.find('ul');
mainMenu.hover(function(){
    subMenu.stop().fadeIn();
}, function(){
    subMenu.stop().fadeOut();
})

/*slide*/
let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

slide.eq(currentIdx).fadeIn();
autoSlide(); 

function autoSlide(){
    setInterval(function(){
        let nextIdx = (currentIdx+1)%slideCount;
        slide.eq(currentIdx).fadeOut();
        slide.eq(nextIdx).fadeIn();
        currentIdx = nextIdx;
    }, 3000);
}

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