let mainMenu = $('nav>ul>li');
let subMenu = mainMenu.find('ul');
let header = $('header');

mainMenu.hover(function(){
    header.addClass('active');
    subMenu.stop().slideDown();
},function(){
    header.removeClass('active');
    subMenu.stop().slideUp();
})