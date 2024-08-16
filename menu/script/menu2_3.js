let mainMenu = $('aside nav>ul>li');
mainMenu.hover(function(){
    $(this).find('ul').stop().slideDown();
}, function(){
    $(this).find('ul').stop().slideUp();
})