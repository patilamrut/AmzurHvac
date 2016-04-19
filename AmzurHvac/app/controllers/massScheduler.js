// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
$.window.title = args.title;
var monday = false, tuesday = false, wednesday = false, thursday= false, friday = false, saturday = false, sunday = false;

var listItems = [];
var checkedValue = {};
for(var i=0;i<Alloy.Globals.HVACUnitNames.length;i++){
	listItems.push({
		listLabel : {
			text :Alloy.Globals.HVACUnitNames[i] 
		},
		checkMark : {
			image : "/refillUnchecked.png"
		}
	});
	checkedValue[Alloy.Globals.HVACUnitNames[i]] = false;
}

$.defaultSection.setItems(listItems);

function dayClicked(e){
	if(e.source && e.source.backgroundColor =="white"){
		e.source.backgroundColor = "gray";
	}
	else{
		e.source.backgroundColor = "white";
	}
	changeValue(e.source.id);
}

function changeValue(id){
	switch(id){
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
	$.listView.deselectItem(0, e.itemIndex);
	var i = e.itemIndex;
	checkedValue[Alloy.Globals.HVACUnitNames[i]] = !checkedValue[Alloy.Globals.HVACUnitNames[i]];
	var clickedItem = $.listView.getSections()[0].getItemAt(i);
	console.log(JSON.stringify(clickedItem));
	if(checkedValue[Alloy.Globals.HVACUnitNames[i]]){
		clickedItem.checkMark.image = "/refillChecked.png";
	}
	else{
		clickedItem.checkMark.image = "/refillUnchecked.png";
		
	}
	$.listView.getSections()[0].updateItemAt(i,clickedItem);
}
