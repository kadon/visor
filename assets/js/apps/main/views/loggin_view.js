define(["app",
        "tpl!apps/main/templates/loggin.tpl"], function(App, LogginTemplate){
    var LogginView = Marionette.ItemView.extend({
      template: LogginTemplate
    });

  return LogginView;
});
