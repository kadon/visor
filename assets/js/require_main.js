requirejs.config({
  baseUrl: "assets/js",
  paths: {
    backbone: "vendor/backbone",
    "backbone.picky": "vendor/backbone.picky",
    "backbone.syphon": "vendor/backbone.syphon",
    jquery: "vendor/jquery",
    "jquery-ui": "vendor/jquery-ui",
    json2: "vendor/json2",
    localstorage: "vendor/backbone.localstorage",
    marionette: "vendor/backbone.marionette",
    spin: "vendor/spin",
    "spin.jquery": "vendor/spin.jquery",
    text: "vendor/text",
    tpl: "vendor/underscore-tpl",
    underscore: "vendor/underscore",
    "bootstrap": "vendor/bootstrap.min"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    "bootstrap": ["jquery"],
    "backbone.picky": ["backbone"],
    "backbone.syphon": ["backbone"],
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    localstorage: ["backbone"],
    "spin.jquery": ["spin", "jquery"],
    tpl: ["text"]
  }
});

require(["app", "bootstrap"], function(App){
  App.start();
});
