// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.window.title = args.title;
var index = args.index;
var filteredList = _.filter(Alloy.Globals.HVACS, function(data) {
    return data.category == args.title;
});

//console.log(JSON.stringify(filteredList));
var listItems = [];
for (var i = 0; i < filteredList.length; i++) {
    listItems.push({
        listLabel : {
            text : filteredList[i].name
        }
    });
}

$.defaultSection.setItems(listItems);

function clickItems(e) {
    $.listView.deselectItem(0, e.itemIndex);
    var windoName = filteredList[e.itemIndex].name;

    var windowController = Alloy.createController("hvacSettings", {
    	title : windoName
    }).getView();
    if (OS_IOS) {
        Alloy.Globals.navgroup.openWindow(windowController, {
            animated : false
        });
    } else if (OS_ANDROID) {
        windowController.open();
    }
}
