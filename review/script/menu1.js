let mainMenu = $('nav ul li');
let subMenu = mainMenu.find('ul');
mainMenu.hover(function(){
    subMenu.stop().slideDown();
}, function(){
    subMenu.stop().slideUp();
})