var panels = $('.board section');
var tabs = $('.tab a');

tabs.click(function(event) {
    event.preventDefault();
    panels.removeClass('board-act');
    
    $(this).parent().parent().addClass('board-act') //.parent.parent 부모 두 단계를 올라감.
});
