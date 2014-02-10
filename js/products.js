// Place third party dependencies in the lib folder
//
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      jquery: 'jquery-1.10.2.min',
      jqm: 'jquery.mobile-1.4.0.min',
      underscore: 'underscore-min'
    },
    "shim": {
    	// deps: ['jquery', 'mustache']
    }
});

// Load the main app module to start the app
define(["jquery", "jqm", "underscore"], function($) {

$(function()
{

    get_all_products ();
	

    /*
    // vendings advanced options,
    // item click listen
    // call - get_by_vending()
    */
    $(document).on('tap', '.product_item', function() {
        //remove hilite
        $('#vending_list_view_wraper li').find('.select_product').removeClass('select_product')
        $(this).addClass('select_product')
        get_by_vending($(this).attr('id'))
    });






});





function get_all_products ()
{

	$(window).bind("online", function()
	{
    });

    if (navigator.offline) {
        alert("online")
    	// I'm online so submit the form.
	}


    // This code is unchanged, except we're getting a different JSON file.
    var exampleValues = {},
	parsedTemplate = "",
	templateText = $('#profileTemplate').html(),
	demoTemplate = _.template(templateText);
    
    $.ajax({
    	url: "http://localhost/invobill-admin/sampleData/all_product_list.json",
    	async: false,
        crossDomain: 'true',
    	dataType: "json",
    	success: function(json)
    	{

    		exampleValues = json;
    		
    	}
    });
    // The for loop runs the values for each employee through the 
    // demoTemplate function, and builds the parsedTemplate HTML 
    // from the results.
    for (employee in exampleValues.company_employees) 
    {
      parsedTemplate += demoTemplate(exampleValues.company_employees[employee]);
    }
    // The rest of the page is the same as the previous example.
    $("#vending_list_view_wraper").html(parsedTemplate);
    // $( "#vending_list_view_wraper" ).listview( "refresh" );
}
/*
// End get_all_products()
*/




    /*
    // vendings advanced options display on popup,
    // ajax send - product_id
    // ajax get - vendings relavente data
    */
    function get_by_vending (vending_id) {

        $( "#vending_advanced_popup" ).popup( "open" )
        // alert(vending_id)

        
    }
    /*
    // End get_by_vending()
    */









});
