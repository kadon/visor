define(["app",
        "marionette",
        "tpl!apps/comprobantes/templates/comprobante_option.tpl",
        "tpl!apps/comprobantes/templates/comprobante.tpl"], function(App, Marionette, ComprobanteOptionTemplate, ComprobanteTemplate){

  ACTIONS = [
    {name: 'edit', cancan_name: 'edit', icon: 'glyphicon glyphicon-pencil'},
    {name: 'see_details', cancan_name: 'read', icon: 'glyphicon glyphicon-eye-open'},
    {name: 'remove', cancan_name: 'remove', icon: 'glyphicon glyphicon-remove-circle'},
    {name: 'take', cancan_name: 'read', icon: 'glyphicon glyphicon-hand-up'},
    {name: 'release', cancan_name: 'read',  icon: 'glyphicon glyphicon-hand-down'}
  ];

  var ComprobanteView = Marionette.ItemView.extend({
    tagName: "div",
    className: "col-sm-4 col-md-2 device",
    template: ComprobanteTemplate, //"devices/list_item"
    //templateItemListOptions: ItemListOptionsTemplate, //"devices/list_option_item"

    events: {
      click: "highlightName",
      "click td a.js-show": "showClicked",
      "click td a.js-edit": "editClicked",
      "click button.js-delete": "deleteClicked",
      "click i.edit": "editDevice",
      "click i.see_details": "showDevice",
      "click i.remove": "removeDevice",
      "click i.take": "useDevice",
      "click i.release": "relaseDevice"
    },

    ui: {
      thumbnails: '.thumbnail',
      statusLabel: 'span.label',
      optionsList: 'ul.options',
    },

    onRender: function(){
      self = this
      this.ui.statusLabel.addClass('active');//( this.model.getStatusLabelClass() );
      this.renderOptions();
      this.ui.thumbnails.find('.wrapper-hint').tooltip() //Show hint about each option
    },

    renderOptions: function(){
      for(action in ACTIONS){
        console.log(action);
        this.ui.optionsList.append( ComprobanteOptionTemplate( ACTIONS[action] ) );
      }
    }

  });

  return ComprobanteView;
});
