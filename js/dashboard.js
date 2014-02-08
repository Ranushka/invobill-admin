// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      jquery: 'jquery-1.10.2.min',
      jqm: 'jquery.mobile-1.4.0.min',
      globalize: 'charts/dx.chartjs',
      chart: 'charts/globalize.min'
    },
    "shim": {
        // "jquery": ["jquery.mobile-1.4.0.min"],
        // "jqm": ["jquery-1.10.2.min"]
    }
});

// Load the main app module to start the app
define(["jquery", "jqm", "globalize", "chart"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function()
    {

    // $('body').css('display','block');
        

	var dataSource = [
	        { year: 1997, smp: 263, mmp: 226, cnstl: 10, cluster: 1 },
	        { year: 1999, smp: 169, mmp: 256, cnstl: 66, cluster: 7 },
	        { year: 2001, smp: 57, mmp: 257, cnstl: 143, cluster: 43 },
	        { year: 2003, smp: 0, mmp: 163, cnstl: 127, cluster: 210 },
	        { year: 2005, smp: 0, mmp: 103, cnstl: 36, cluster: 299 },
	        { year: 2007, smp: 0, mmp: 91, cnstl: 3, cluster: 300 }
	    ];

	    $("#overoll_salse").dxChart({
	        dataSource: dataSource,
	        commonSeriesSettings: {
	            type: "spline",
	            argumentField: "year"
	        },
	        commonAxisSettings: {
	            grid: {
	                visible: true
	            }
	        },
	        series: [
	            { valueField: "smp", name: "SMP" },
	            { valueField: "mmp", name: "MMP" },
	            { valueField: "cnstl", name: "cnstl" },
	            { valueField: "cluster", name: "Cluster" }
	        ],
	        tooltip:{
	            enabled: true
	        },
	        legend: {
	            verticalAlignment: "bottom",
	            horizontalAlignment: "center"
	        },
	        // title: "",
	        commonPaneSettings: {
	            border:{
	                visible: true,
	                bottom: false
	            }
	        }
	    });
	    // e $("#overoll_salse").dxChart


    });


});
