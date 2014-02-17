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


/***************
// S DOCUMENT READDY
****************/
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

/***************
// S EVENT LISTENERS
****************/

/*
    // listn to .make_form_editable tap evant
    // calling to make_form_editable ()
*/
$(document).on('click', '.make_form_editable', function() {
    make_form_editable ();
});


/*
    // listn to .make_form_save_data tap evant
    // calling to make_form_save_data ()
*/
$(document).on('tap', '.make_form_save_data', function() {
    make_form_desabled ()
});


/*
    // closing the detail page on vending
*/
$(document).on("click",".detail_page_close", function() {
    if (window.formChanged == false)
    {
        $.mobile.changePage('#invoice', {transition: "pop", role: "page"} );
    }
    else
    {
        $("#conferm_data_save").popup("open")
    }
});

/*
    // conferm popup to close #conferm_data_save
    // close 
*/

$(document).on("click","#conferm_data_cancel_btn", function() {
    $.mobile.changePage('#invoice');
    make_form_desabled ()
})

$(document).on("click","#conferm_data_save_btn", function() {
    $("#conferm_data_save").popup("close")
})




/***************
// S FUNCTIONS
****************/

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
    // $( "#vender_list_table" ).table( "refresh" );
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



    var vendingValues = {};
    // templateText = $('#vending_advanced_popup_Template').html(),
    // demoTemplate = _.template(templateText);
    
    $.ajax({
        url: "http://localhost/invobill-admin/sampleData/get_by_vending.json",
        async: false,
        crossDomain: 'true',
        dataType: "json",
        success: function(json)
        {

            vendingValues = json;
            
            // assign Valus
            $( "#vending_item_title" ).html( vendingValues.vending_item_name )
            $( "#vending_item_name" ).val( vendingValues.vending_item_name )
            $( "#vending_item_discription" ).val( vendingValues.vending_item_discription )
            $( "#vending_item_price" ).val( vendingValues.vending_item_price )
            $( "#vending_item_vending_type" ).val( vendingValues.vending_item_vending_type ).attr("selected", "selected").trigger('change')
            $( "#vending_item_avalability" ).val(vendingValues.vending_item_avalability).attr("selected", "selected").trigger('change')

            window.formChanged = false;

        }
    });


    $.mobile.changePage('#vending_detail_page', { transition: "pop", role: "dialog" } );

        // $( "#vending_detail_page" ).popup( "open" )
        // $( "#vending_advanced_popup" ).popup( "open" )

        
    }
    /*
    // End get_by_vending()
    */









});
