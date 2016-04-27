// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
$.window.title = args.title;
var TiCircularSlider = require('de.marcelpociot.circularslider');

var sliderView = TiCircularSlider.createView({

    height : 100,
    width : 100,
    lineWidth : 20,
    left : 20,
    filledColor : 'red',
    unfilledColor : 'gray',
    maximumValue : (OS_IOS) ? "50.0f" : 50,
    minimumValue : (OS_IOS) ? "20.0f" : 20
});

var sliderView2 = TiCircularSlider.createView({
    left : 20,
    height : 100,
    width : 100,
    lineWidth : 20,
    filledColor : 'blue',
    unfilledColor : 'gray',
    // maximumValue: "50.0f"
});

sliderView.addEventListener('change', function(e) {
    Ti.API.warn("change");
    if (e && e.value) {
        $.firstLabel.text = Math.round(e.value);
    }
});

sliderView.addEventListener('touchstart', function(e) {
    Ti.API.warn("touchstart");
    if (e && e.value) {
        $.firstLabel.text = Math.round(e.value);
    }
});

sliderView.addEventListener('touchend', function(e) {
    Ti.API.warn("touchend");
    if (e && e.value) {
        $.firstLabel.text = Math.round(e.value);
    }
});

sliderView2.addEventListener('change', function(e) {
    Ti.API.warn("change");
    if (e && e.value) {
        $.secondLabel.text = Math.round(e.value);
    }
});

sliderView2.addEventListener('touchstart', function(e) {
    Ti.API.warn("touchstart");
    if (e && e.value) {
        $.secondLabel.text = Math.round(e.value);
    }
});

sliderView2.addEventListener('touchend', function(e) {
    Ti.API.warn("touchend");
    if (e && e.value) {
        $.secondLabel.text = Math.round(e.value);
    }
});

$.window.addEventListener("open", function() {
    //sliderView.setValue(30);
});

$.firstRow.add(sliderView);
$.secondRow.add(sliderView2);

function submitForm(e) {
    if (args.singleSelect) {
        console.log("coming from single window");
        //args.hvacs has selected hvacs names.

    } else {
        console.log("coming from calendar");
        //args.hvacs has selected hvacs names.
    }
}
