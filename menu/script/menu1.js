// let mainMenu = $('nav>ul>li');
// let subMenu = mainMenu.find('ul');
// mainMenu.mouseover(function(){
//     subMenu.stop().slideDown();
// }).mouseout(function(){
//     subMenu.stop().slideUp();
// });

let mainMenu = $('nav>ul>li');
let subMenu = mainMenu.find('ul');
mainMenu.hover(function(){
    subMenu.stop().slideDown();
},function(){
    subMenu.stop().slideUp();
})