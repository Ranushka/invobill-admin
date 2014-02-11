/*
// 1 - making editable felds 
// 2 - changing edit button to Save
// .make_form_editable tap listen 
*/
$(document).on('tap', '.make_form_editable', function() {
	// remove disabled Attr
	$(".attr_disabled").prop('disabled',false);
	$("form").find('.ui-state-disabled').removeClass('ui-state-disabled');

	$(".make_form_editable").toggleClass('hide');
	$(".make_form_save_data").toggleClass('hide');

});