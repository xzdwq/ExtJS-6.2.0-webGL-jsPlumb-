Ext.define('webGL.view.Viewport', {
  extend:'Ext.container.Viewport',
  layout: 'border',
  requires: [
    'webGL.view.webGL.webGLCTRL',
    'webGL.view.webGL.webGL'
  ],
  controller: 'webglctrl',
  items: [ { xtype: 'webglpanel' } ]
});