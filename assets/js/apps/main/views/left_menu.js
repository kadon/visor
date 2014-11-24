define(["app",
        "tpl!apps/main/templates/left_menu.tpl"], function(App, LeftMenuTemplate){
    var LeftMenuView = Marionette.ItemView.extend({
      template: LeftMenuTemplate
    });

    return LeftMenuView;
});
