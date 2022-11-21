$(function(){
    $('input[name="audience"]').on('change', function(){
        var targetId = $(this).val()
        var group = $(this).data('toggle-group')
        $('[data-toggle-group="' + group + '"].collapse').each(function(){
            $(this).toggleClass('show', $(this).is('#' + targetId))
        })
    })
})
