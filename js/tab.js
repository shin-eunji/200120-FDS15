// var panels = $('.board section');
// var tabs = $('.tab a');

// tabs.click(function(event) {
//     event.preventDefault();
//     panels.removeClass('board-act');
    
//     $(this).parent().parent().addClass('board-act') //.parent.parent 부모 두 단계를 올라감.
// });


var tabs = $('.tab-list [role="tab"]');

tabs.on('click',function(e) {
    e.preventDefault();
    $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
    var selectedId = "#"+$(this).attr('aria-controls');  
    $(selectedId).addClass('section-act').siblings().removeClass('section-act');
})