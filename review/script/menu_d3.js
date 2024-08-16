let mainMenu = $('nav ul li');
let subMeneu = mainMenu.find('ul');
mainMenu.hover(function(){
    subMeneu.stop().fadeIn();
}, function(){
    subMeneu.stop().fadeOut();
});