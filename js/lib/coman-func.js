

/*
	// 1 - making editable felds 
	// 2 - changing edit button to Save
	// make_form_editable () 
*/
function make_form_editable() {
	// remove disabled Attr
	$(".attr_disabled").prop('disabled',false);
	$(".attr_disabled").parent().removeClass('ui-state-disabled');

	$(".make_form_editable").toggleClass('hide');
	$(".make_form_save_data").toggleClass('hide');
}
/*
// end make_form_editable ()
*/


/*
	// 1 - making editable felds Desable
	// 2 - changing Save button to Edit
	// make_form_save_data () 
*/
function make_form_desabled () {
	// remove disabled Attr
	$(".attr_disabled").prop('disabled','disabled');
	$(".attr_disabled").parent().addClass('ui-state-disabled');

	$(".make_form_editable").toggleClass('hide');
	$(".make_form_save_data").toggleClass('hide');
}
/*
// end make_form_save_data ()
*/