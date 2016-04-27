// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
$.window.title = args.title;
var monday = false,
    tuesday = false,
    wednesday = false,
    thursday = false,
    friday = false,
    saturday = false,
    sunday = false;

var listItems = [];
var checkedValue = {};
for (var i = 0; i < Alloy.Globals.HVACUnitNames.length; i++) {
    listItems.push({
        listLabel : {
            text : Alloy.Globals.HVACUnitNames[i],
            color : "black"
        },
        checkMark : {
            image : "/refillUnchecked.png"
        }
    });
    checkedValue[Alloy.Globals.HVACUnitNames[i]] = false;
}

$.defaultSection.setItems(listItems);

function dayClicked(e) {
    if (e.source && e.source.backgroundColor == "white") {
        e.source.backgroundColor = "gray";
    } else {
        e.source.backgroundColor = "white";
    }
    changeValue(e.source.id);
}

function changeValue(id) {
    switch(id) {
        case "monday" :
            monday = !monday;
            break;
        case "tuesday" :
            tuesday = !tuesday;
            break;
        case "wednesday" :
            wednesday = !wednesday;
            break;
        case "thursday" :
            thursday = !thursday;
            break;
        case "friday" :
            friday = !friday;
            break;
        case "saturday" :
            saturday = !saturday;
            break;
        case "sunday" :
            sunday = !sunday;
            break;
    }
}

function clickItems(e) {
    if (OS_IOS) {
        $.listView.deselectItem(0, e.itemIndex);
    }
    var i = e.itemIndex;
    checkedValue[Alloy.Globals.HVACUnitNames[i]] = !checkedValue[Alloy.Globals.HVACUnitNames[i]];
    var clickedItem = listItems[i];//$.listView.getSections()[0].getItemAt(i);
    console.log(JSON.stringify(clickedItem));
    if (checkedValue[Alloy.Globals.HVACUnitNames[i]]) {
        clickedItem.checkMark.image = "/refillChecked.png";
    } else {
        clickedItem.checkMark.image = "/refillUnchecked.png";
    }
    listItems[i]=clickedItem;
    var section = $.listView.sections[e.sectionIndex];
    //section.updateItemAt(i, clickedItem);
     e.section.updateItemAt(i,clickedItem);
    console.log(JSON.stringify(section.getItems()));
    // $.defaultSection.setItems(listItems);
    // $.defaultSection.setItems(listItems);
}

function submitForm(e) {
    if (checkedValue && (monday || tuesday || wednesday || thursday || friday || saturday || sunday)) {
        console.log(JSON.stringify(checkedValue));
        var selectedHVACs = [];
        for (var i = 0; i < Alloy.Globals.HVACUnitNames.length; i++) {
            if (checkedValue[Alloy.Globals.HVACUnitNames[i]]) {
                selectedHVACs.push(Alloy.Globals.HVACUnitNames[i]);
            }
        }
        if (_.isEmpty(selectedHVACs)) {
            alert("Please select day and HVAC to be programmed");
            return;
        }
        var windowController = Alloy.createController("hvacSettings", {
            title : "Multi-Select",
            singleSelect : false,
            hvacs : selectedHVACs,
            selectedDays : {
                monday : monday,
                tuesday : tuesday,
                wednesday : wednesday,
                thursday : thursday,
                friday : friday,
                saturday : saturday,
                sunday : sunday
            }
        }).getView();
        if (OS_IOS) {
            Alloy.Globals.navgroup.openWindow(windowController, {
                animated : false
            });
        }
        //For Android open Standard Window
        else if (OS_ANDROID) {
            windowController.open();
        }

    } else {
        alert("Please select day and HVAC to be programmed");
    }
}

function resetForm(e) {
    checkedValue = {};
    $.defaultSection.setItems(listItems);
    monday = false,
    tuesday = false,
    wednesday = false,
    thursday = false,
    friday = false,
    saturday = false,
    sunday = false;
    $.monday.backgroundColor = "white";
    $.tuesday.backgroundColor = "white";
    $.wednesday.backgroundColor = "white";
    $.thursday.backgroundColor = "white";
    $.friday.backgroundColor = "white";
    $.saturday.backgroundColor = "white";
    $.sunday.backgroundColor = "white";
}
