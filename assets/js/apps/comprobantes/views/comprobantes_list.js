define(["app",
        "marionette",
        "apps/comprobantes/views/comprobante",
        //"tpl!apps/comprobantes/templates/comprobantes_empty.tpl"
        "tpl!apps/comprobantes/templates/comprobantes_list.tpl"], function(App, Marionette, ComprobanteView, ComprobantesListTemplate){

  /*var NoContactsView = Marionette.ItemView.extend({
    template: ComprobantesEmptyTemplate,
    tagName: "tr",
    className: "alert",
  }); */ 

  console.log(Marionette);
  var ComprobantesListCompositeView = Marionette.CompositeView.extend({
    tagName:          "div",
    template:         ComprobantesListTemplate,
    //emptyView:        NoContactsView,
    childView:         ComprobanteView,
    childViewContainer:"div",

    /*initialize: function(){
      this.listenTo(this.collection, "reset", function(){
        this.appendHtml = function(collectionView, itemView, index){
          collectionView.$el.append(itemView.el);
        }
      });
    },*/


    /*onCompositeCollectionRendered: function(){
      this.appendHtml = function(collectionView, itemView, index){
        collectionView.$el.prepend(itemView.el);
      }
    }*/

  });

  return ComprobantesListCompositeView;
});
