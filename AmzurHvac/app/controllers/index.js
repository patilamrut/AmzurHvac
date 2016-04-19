if (OS_ANDROID) {
    var homeController = Alloy.createController('home').getView();
    homeController.open();
} else {
    Alloy.Globals.navgroup = $.homeNav;
    $.homeNav.open({
    });
}
