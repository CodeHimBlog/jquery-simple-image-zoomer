/*  Plugin: simple.zoomer.js
 *   Framework: jQuery 3.1
 *   Author: Asif Mughal
 *   URL: https://www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2018 - Asif Mughal
 */
(function($){
      $.fn.zoomer = function(options) {
      var setting = $.extend({
                 maxLimit: 100,
                 zoomingOrigin: (0, 0),
                  
  		   }, options);
  
  return this.each(function() {
  var objectToZoom, 
      zoomedObject,
      zoomer, slider, status;
      
 objectToZoom = $(this);
/* Create some DOMs for zoomer UI */ 
 status = document.createElement('span');
 slider = document.createElement('input');
 zoomer = document.createElement('div');
 zoomedObject = document.createElement('section');
/* Add some classes to customize these DOMs later */
    $(zoomedObject).addClass('object-container');
    $(zoomer).addClass("zoomer-container");
/* Set up the values, attributes and properties*/
    $(slider).attr('type', 'range');
    $(slider).prop('min', '10').addClass('zoom-slider');
    $(slider).prop('value', '10');
    $(slider).prop('max', setting.maxLimit).appendTo(zoomer);
    $(status).addClass('zoomer-status').insertBefore(slider).html('Zoom: 10%');
/* Starting zooming at the same time when user change the range*/
$(slider).on('input', function(){
    var zoomer; 
    var  zoom = $(this).val();
    zoomer = zoom/10;
    $(objectToZoom).css({
/*Images will zoom in and out with the CSS3 transformation*/
     'transform' : 'scale('+zoomer+')',
/*The origin where from zooming transformation starts */
     'transformOrigin' : setting.zoomingOrigin,
 });
/* Adding zooming status to show the users zoom level in percent. */
     $(status).html('Zoom: ' + zoom + '%');
});
     /* The zoomer slider will be show bottom of the object that to be zoom. */
    $(zoomer).insertAfter(this);
/* To show slider at the top of the object, insert zoomer before (this) */
 $(objectToZoom).wrapAll(zoomedObject);
        });
      };
    
    })(jQuery);
