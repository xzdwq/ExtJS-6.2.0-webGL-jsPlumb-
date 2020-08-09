Ext.Loader.setConfig({
  enabled: true,
  disableCaching: false,
  paths: {
    'Ext.ux': '../ext-6.2.0/packages/ux/src',
    'Ext.chart': '../ext-6.2.0/packages/charts/src/chart',
    'Ext.chart.legend.LegendBase': '../ext-6.2.0/packages/charts/classic/src/chart/legend/LegendBase.js',
    'Ext.draw': '../ext-6.2.0/packages/charts/src/draw',
    'Ext.draw.Container': '../ext-6.2.0/packages/charts/src/draw/Container.js',
    'Ext.draw.ContainerBase': '../ext-6.2.0/packages/charts/classic/src/draw/ContainerBase.js',
    'Ext.chart.theme.BaseTheme': 'ext/packages/charts/src/chart/theme/Base.js',
    'Ext.draw.SurfaceBase': '../ext-6.2.0/packages/charts/classic/src/draw/SurfaceBase.js',
  }
});
Ext.application({
  name: 'webGL',
  appFolder: 'app',
  autoCreateViewport: true,
  models: [],
  views: [],
  stores: [],
  controllers: [],
  quickTips: false,
  platformConfig: {
    desktop: { quickTips: true }
  },
  launch: function () {},
  init: function() {
    var renderer;
  },
  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});