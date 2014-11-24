define(["app",
        "entities/models/comprobante"], function(App, ComprobanteModel){
  var ComprobantesCollection = Backbone.Collection.extend({
    model: ComprobanteModel
  });

  return ComprobantesCollection;
});
