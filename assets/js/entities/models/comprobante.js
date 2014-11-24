define(["app"], function(App){
  console.log(Backbone);
  var ComprobanteModel = Backbone.Model.extend({
    defaults: {
      emisor:        null,
      receptor:      null,
      fecha_emision: null,
      folio:         null,
      sello:         null
    }
  });

  return ComprobanteModel;
});
