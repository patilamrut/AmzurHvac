// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};
var listItems = [];
for(var i=0;i<Alloy.Globals.HVACNames.length;i++){
	listItems.push({
		listLabel : {
			text :Alloy.Globals.HVACNames[i] 
		}
	});
}
	listItems.push({
		listLabel : {
			text :"Calendar" 
		}
	});

$.defaultSection.setItems(listItems);

function clickItems(e) {
    var windowName = "First Section";
    $.listView.deselectItem(0, e.itemIndex);
    //console.log(e.itemIndex +" "+Alloy.Globals.HVACNames.length);
    if(e.itemIndex<Alloy.Globals.HVACNames.length){
    	windowName = Alloy.Globals.HVACNames[e.itemIndex];
    }
    else{
    	windowName = "Calendar";
    }
    var windowController;
    if (e.itemIndex < Alloy.Globals.HVACNames.length) {
        windowController = Alloy.createController("hvacController", {
            title : windowName,
            index : e.itemIndex
        }).getView();
    } else {
        windowController = Alloy.createController("massScheduler", {
            title : windowName,
            index : e.itemIndex
        }).getView();

    }
    if (OS_IOS) {
        Alloy.Globals.navgroup.openWindow(windowController, {
            animated : false
        });
    }
    //For Android open Standard Window
    else if (OS_ANDROID) {
        windowController.open();
    }
}
