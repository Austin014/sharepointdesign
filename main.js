$(document).ready(function(){
    $('.thumbnailX').click(function(){
        var id = $(this).attr('id').replace(/\s/g, '');
        $('.expandedinfo').hide();
       $(this).parent().siblings('.'+id).slideToggle(); 
        console.log(id);
    });
    $(function(){
	// Instantiate MixItUp:
	$('.wrap').mixItUp({
        animation: {
        effects: 'fade stagger(40ms)',
        duration: 500
	}
    });
});
    
    $('.filter').click(function(){
       $('.expandedinfo').hide(); 
    });
    
});