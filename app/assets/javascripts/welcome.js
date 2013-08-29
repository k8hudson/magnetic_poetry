
$(function(){
    //make the magnets draggable and constrained to the fridge (their parent)
    $('.magnet').draggable({
        containment: 'parent',
        stack:'.magnet',
        stop: function(){
            //post the magnet id & coordinates back to the server after a move
            var id = $(this).attr('mid')
            var coors = [parseInt($(this).css('left')),parseInt($(this).css('top')),parseInt($(this).css('z-index'))]
            $.get('update/'+id+'['+coors.join(':')+']')
        }
    });
});
