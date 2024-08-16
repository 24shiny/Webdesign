let tabMenu = $('.tabMenu li');
let tabContent = $('.tabContent div');

tabMenu.click(function(e){
    e.preventDefault();
    tabMenu.removeClass('active');
    $(this).addClass('active');

    let target = $(this).find('a').attr('href');
    tabContent.removeClass('active');
    $(target).addClass('active');
});