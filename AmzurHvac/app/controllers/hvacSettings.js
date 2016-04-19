// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
$.window.title = args.title;
var TiCircularSlider = require('de.marcelpociot.circularslider');

var sliderView = TiCircularSlider.createView({
	
	height: 100,
    width: 100,
    lineWidth: 20,
    left : 20,
    filledColor: 'red',
    unfilledColor: 'gray',
    maximumValue: "50.0f",
    minimumValue : "20.0f"
});

var sliderView2 = TiCircularSlider.createView({
	left : 20,
	height: 100,
    width: 100,
    lineWidth: 20,
    filledColor: 'blue',
    unfilledColor: 'gray',
    // maximumValue: "50.0f"
});

sliderView.addEventListener('change',function(e) {
    Ti.API.warn("change");
	$.firstLabel.text = Math.round( e.value );
});

sliderView.addEventListener('touchstart',function(e) {
    Ti.API.warn("touchstart");
	$.firstLabel.text = Math.round( e.value );
});

sliderView.addEventListener('touchend',function(e) {
    Ti.API.warn("touchend");
	$.firstLabel.text = Math.round( e.value );
});

sliderView2.addEventListener('change',function(e) {
    Ti.API.warn("change");
	$.secondLabel.text = Math.round( e.value );
});

sliderView2.addEventListener('touchstart',function(e) {
    Ti.API.warn("touchstart");
	$.secondLabel.text = Math.round( e.value );
});

sliderView2.addEventListener('touchend',function(e) {
    Ti.API.warn("touchend");
	$.secondLabel.text = Math.round( e.value );
});



$.window.addEventListener("open", function() {
    //sliderView.setValue(30);
});


$.firstRow.add(sliderView);
$.secondRow.add(sliderView2);
