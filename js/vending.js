// Place third party dependencies in the lib folder
//
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      jquery: 'jquery-1.10.2.min',
      jqm: 'jquery.mobile-1.4.0.min',
      coman: 'coman-func',
      underscore: 'underscore-min'
    },
    "shim": {
    	coman: {
            deps: ['jquery']
        }
    }
});

// Load the main app module to start the app
define(["jquery", "jqm", "underscore", "coman"], function($) {

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
        $('#vending_list_view_wraper > tr.select_product').removeClass('select_product')
        $(this).addClass('select_product')
        get_by_vending($(this).attr('id'))
    });






});





function get_all_products ()
{

	// $(window).bind("online", function()
	// {
 //    });

 //    if (navigator.offline) {
 //        alert("online")
 //    	// I'm online so submit the form.
	// }


    // This code is unchanged, except we're getting a different JSON file.
    var vendingValues = {},
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

    		vendingValues = json;
    		
    	}
    });
    // The for loop runs the values for each employee through the 
    // demoTemplate function, and builds the parsedTemplate HTML 
    // from the results.
    for (employee in vendingValues.company_employees) 
    {
      parsedTemplate += demoTemplate(vendingValues.company_employees[employee]);
    }
    // The rest of the page is the same as the previous example.
    $("#vending_list_view_wraper").html(parsedTemplate);
    $( "#vender_list_table" ).table( "refresh" );
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



    var vendingValues = {},
    parsedTemplate = "",
    templateText = $('#vending_advanced_popup_Template').html(),
    demoTemplate = _.template(templateText);
    
    $.ajax({
        url: "http://localhost/invobill-admin/sampleData/get_by_vending.json",
        async: false,
        crossDomain: 'true',
        dataType: "json",
        success: function(json)
        {

            vendingValues = json;
            
        }
    });
    
    // for (employee in vendingValues.company_employees) 
    // {
    //   parsedTemplate += demoTemplate(vendingValues.company_employees[employee]);
    // }    


    // The rest of the page is the same as the previous example.
    $("#vending_advanced_popup .ui-content").html(demoTemplate(vendingValues));


        $( "#vending_advanced_popup" ).popup( "open" )
        // alert(vending_id)

        
    }
    /*
    // End get_by_vending()
    */









});
