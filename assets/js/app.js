define(["marionette", 
        "apps/main/views/content_application_layout",
        "apps/main/views/loggin_view"], function(Marionette, ContentApplicationLayout, LogginView){

  /* En la variable App es donde se crea la aplicacion */
  var App = new Marionette.Application();

  /* Agregamos regiones a la aplicacion, estas regiones son "contenedores" en los cuales podemos
   * mostrar (show) o quitar (empty) vistas
  */
  App.addRegions({
    contentApplicationRegion: "#content-application-region",
    logginRegion:             "#loggin-region"
  });


  App.navigate = function(route, options){
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  App.getCurrentRoute = function(){
    Backbone.history.fragment;
  };

  App.isLogged = function(){
    /*TODO
     * Aca verificaremos si el usuario esta logueado, por el momento retornamos true
    */

    return true;
  };

  App.on("home:index", function(){
    if( App.isLogged ){
      var content_application_layout = new ContentApplicationLayout();
      App.contentApplicationRegion.show(content_application_layout);
      App.navigate("home"); //Le decimos a backbone que estamos en el home
    }else{
      var loggin_view = new LogginView();
      App.logginRegion.show(loggin_view);
      App.navigate("loggin"); //Le decimos a backbone que estamos en el loggin
    }
  });

  /* Una vez que la aplicacion se inicia, este callback (initialize:after) es llamado
   * aca es donde iniciamos el history de backbone y disparamos un triger (home:index)
   * el cual muestra las vistas de la accion home
  */
  App.on("start", function(){
    if(Backbone.history){
      Backbone.history.start();
      //if(this.getCurrentRoute() === ""){
        App.trigger("home:index");
      //}
    }
  });

  /*TODO
   *Implementar para mostrar mensajes (success, alert, error, info, etc.) en la aplicacion
  App.on("show:alert", function(message, type){
    var model = new Backbone.Model({ type: type, message: message });
    App.alertsRegion.show(new App.Common.Views.Alert({model: model}) );
  });
  */


  return App;
});
