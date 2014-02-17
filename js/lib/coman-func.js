
$(function () {
	/*
		// display the page when page renderd fuly.
	*/
	$('[data-role]').css('opacity','1')
})














/**************
// S EVENT LISTENERS
****************/
window.formChanged = false;

$(':input').on('change', function() {
    window.formChanged = true;
});









/***************
// S FUNCTIONS
****************/

/*
	// 1 - making editable felds 
	// 2 - changing edit button to Save
	// make_form_editable () 
*/

function make_form_editable() {
	// remove disabled Attr
	$(".attr_disabled").prop('disabled',false);
	$(".attr_disabled").parent().removeClass('ui-state-disabled');

	$( ".make_form_editable" ).css('display', "none");
	$( ".make_form_save_data" ).css('display', "block");

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

	$( ".make_form_save_data" ).css('display', "none");
	$( ".make_form_editable" ).css('display', "block");
    // $(".make_form_save_data").prop('disabled','disabled');
}
/*
// end make_form_save_data ()
*/


