define(["app",
        "apps/main/views/header",
        "apps/main/views/left_menu",
        "entities/collections/comprobantes",
        "entities/collections/json_comprobantes",
        "apps/comprobantes/views/comprobantes_list",
        "tpl!apps/main/templates/content_application.tpl"], function(App, HeaderView, LeftMenuView, ComprobantesCollection, Data, ComprobantesListCompositeView, ContenApplicationTemplate){
    var ContentApplicaionLayout = Marionette.LayoutView.extend({
      template: ContenApplicationTemplate,

      regions: {
        headerRegion: "#header-region", //Mostrara el menu del encabezado
        leftMenu:     "#left-menu",     //Mostrara las opciones disponibles (acciones) que el usuario puede elegir
        mainRegion:   "#main-region",   //Mostrara las diferentes vistas (acciones) que el usuario elija
        modalRegion:  "#modal-region"
        //footerRegion: "#footer-region"  //Mostrara el footer
        //alertsRegion: "#alerts-region", //Mostrara las notificaciones
        //dialogRegion: "#dialog-region"#Marionette.Region.Dialog.extend(el: "#dialog-region")
      },

      onRender: function(){
        var header_view = new HeaderView();      //Se crea la vista que contiene el menu del header
        var left_menu_view = new LeftMenuView(); //Se crea la vista que contiene el menu de la izquierda

        this.headerRegion.show(header_view);  //Mostramos en la region del header la vista
        this.leftMenu.show(left_menu_view);   //Mostramos en la region del menu de la izq la vista

        this.showComprobantes();
      },

      /* Esta funcion se debe ir a un controller ....*/
      showComprobantes: function(){
        var comprobantes_object = Data;
        /* [
          {status: "Cancelado", folio: "111111111", emisor: "ABC DE FGH", receptor: "dsdg fdgg"},
          {status: "Verificado", folio: "21111111", emisor: "FF DE FGH", receptor: "dsdg fdgg"},
          {status: "Cancelado", folio: "311111111", emisor: "HHC DE FGH", receptor: "dsdg fdgg"},
          {status: "Cancelado", folio: "411111111", emisor: "C DE FGH", receptor: "dsdg fdgg"},
          {status: "Verificado", folio: "511111111", emisor: "SSS DE FGH", receptor: "dsdg fdgg"},
          {status: "Cancelado", folio: "611111111", emisor: "DDDd DE FGH", receptor: "dsdg fdgg"},
          {status: "Verificado", folio: "711111111", emisor: "FFFFF DE FGH", receptor: "dsdg fdgg"},
          {status: "Cancelado", folio: "811111111", emisor: "HHHHH DE FGH", receptor: "dsdg fdgg"},
          {status: "Verficado", folio: "911111111", emisor: "TTTTTT DE FGH", receptor: "dsdg fdgg"},
          {status: "Cancelado", folio: "101111111", emisor: "ZZZZZZ DE FGH", receptor: "dsdg fdgg"},
          {status: "Cancelado", folio: "111111111", emisor: "WWWWW DE FGH", receptor: "dsdg fdgg"},
        ];*/
        var comprobantes_collection = new ComprobantesCollection( comprobantes_object );
        var comprobantes_list_composite_view = new ComprobantesListCompositeView({ collection: comprobantes_collection });
        this.mainRegion.show( comprobantes_list_composite_view );
      },

      onShow: function(){ 
        console.log("Show layout"); 
      },

    });

    return ContentApplicaionLayout;
});
