let mainMenu = $('nav ul li');
let subMenu = mainMenu.find('ul');
mainMenu.hover(function(){
    subMenu.stop().fadeIn();
}, function(){
    subMenu.stop().fadeOut();
})