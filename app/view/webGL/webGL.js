jsPlumb.Defaults.Container = $("#presentation");
jsPlumb.importDefaults({
    Endpoint: ["Dot", {
        radius: 1
    }],
    HoverPaintStyle: {
        strokeStyle: "#1e8151",
        lineWidth: 2
    },
    ConnectionOverlays: [
        ["Arrow", {
            location: 1,
            id: "arrow",
            length: 14,
            foldback: .8
        }]
    ]
});

Ext.define('webGL.view.webGL.webGL', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.webglpanel',
  region : 'center',
  width: '95%',
  bodyPadding: 5,
  scrollable: true,
  requires: [ ],
  controller: 'webglctrl',
  items: [
    {
      xtype: 'container',
      id: 'presentation',
      width: 950,
      constrain: true,
      height: 600,
      border: true,
      style: 'border: 1px solid #417fb8; background-color: #417fb8;',
      items: [
        {
          xtype: 'panel',
          cls: 'plmb',
          style: { position: 'absolute' },
          width: 400, height: 110,
          x: 30, y: 0,
          constrain: true,
          html: '<div class="svg"><svg><rect width="100%" height="100%" style="fill:rgb(0,0,255);stroke-width:43;stroke:rgb(0,0,0)" /></svg></div>',
          draggable: true,
          draggable: {
            startDrag: function(){
              var connections = jsPlumb.getConnections();
              Ext.each(connections, function(item){
                item.setVisible(false);
                var endpoints = item.endpoints;
                Ext.each(endpoints, function(ep){
                  ep.setVisible(false);
                });
              });
            },
            onMouseUp: function(){
              var connections = jsPlumb.getConnections();
              Ext.each(connections, function(item){
                item.setVisible(true);
                var endpoints = item.endpoints;
                Ext.each(endpoints, function(ep){
                  ep.setVisible(true);
                });
              });
            }
          },
          resizable: {
            pinned: true,
            dynamic: true,
            handles: 'all',
            listeners: {
              resize: jsPlumb.repaintEverything,
              move: jsPlumb.repaintEverything
            }
          }
        },
        {
          xtype: 'panel',
          cls: 'plmb',
          style: { position: 'absolute' },
          layout: 'fit',
          width: 200,
          x: 260, y: 340,
          draggable: true,
          resizable: {
            pinned: true,
            dynamic: true,
            handles: 'all',
            listeners: {
              resize: jsPlumb.repaintEverything,
              move: jsPlumb.repaintEverything
            }
          },
          title: 'textArea',
          items: [
            {
              xtype: 'textarea',
            }
          ]
        }
      ],
      listeners: {
        afterrender: function(el){
          var root = el.getEl().dom;
          var rows = Ext.query('.plmb', root);
          jsPlumb.makeSource($(rows), {
            anchor: ["Right","Left"],
            isSource: true,
            isTarget: true,
            connector: ["Bezier", {
              curviness: 50
            }],
            connectorStyle: {
              strokeStyle: "#5c96bc",
              lineWidth: 1,
              outlineColor: "transparent",
              outlineWidth: 1
            }
          });
          jsPlumb.makeTarget($(rows), {
            dropOptions: {
              hoverClass: "dragHover"
            },
            anchor: ["Right","Left"],
            isSource: true,
            isTarget: true,
            connector: ["Bezier", {
              curviness: 50
            }],
            connectorStyle: {
              strokeStyle: "#5c96bc",
              lineWidth: 1,
              outlineColor: "transparent",
              outlineWidth: 1
            },
          });
          jsPlumb.draggable($(".plmb"), {handle:'.x-panel-header'});
          jsPlumb.bind('click', function (connection, e) {
            jsPlumb.detach(connection);
        });
        }
      }
    },
    {
      xtype: 'panel',
      width: '100%',
      border: false,
      flex: 1,
      layout: {
        type: 'hbox',
        pack: 'center'
      },
      items: [
        {
          xtype: 'panel',
          layout : 'fit',
          itemId: 'webglthreejs',
          border: false,
          listeners: {
            render: function () {
              renderer = new THREE.WebGLRenderer();
            }
          }
        },
        {
          xtype: 'panel',
          width: 600,
          height: 200,
          border: true,
          layout: 'anchor',
          items: [
            {
              xtype: 'chart',
              anchor: '0 0',
              store: {
                fields: ['name', 'g1', 'g2'],
                data: [
                  {"name": "Item-0", "g1": 18.34,"g2": 0.04},
                  {"name": "Item-1", "g1": 2.67, "g2": 14.87},
                  {"name": "Item-2", "g1": 1.90, "g2": 5.72},
                  {"name": "Item-3", "g1": 21.37,"g2": 2.13},
                  {"name": "Item-4", "g1": 2.67, "g2": 8.53},
                  {"name": "Item-5", "g1": 18.22,"g2": 4.62},
                  {"name": "Item-6", "g1": 28.51, "g2": 12.43},
                  {"name": "Item-7", "g1": 34.43, "g2": 4.40},
                  {"name": "Item-8", "g1": 21.65, "g2": 13.87},
                  {"name": "Item-9", "g1": 12.98, "g2": 35.44},
                  {"name": "Item-10", "g1": 22.96, "g2": 38.70},
                  {"name": "Item-11", "g1": 0.49, "g2": 51.90},
                  {"name": "Item-12", "g1": 20.87, "g2": 62.07},
                  {"name": "Item-13", "g1": 25.10, "g2": 78.46},
                  {"name": "Item-14", "g1": 16.87, "g2": 56.80}
                ]
            },
            interactions: {
              type: 'panzoom'
            },
            legend: {
              docked: 'right'
            },
            axes: [{
              type: 'numeric',
              position: 'left',
              grid: true
            }, {
              type: 'category',
              position: 'bottom',
              visibleRange: [0, 0.4]
            }],
            series: [{
              type: 'area',
              xField: 'name',
              yField: ['g1', 'g2'],
              title: ['G1', 'G2'],
              style: {
                  stroke: '#666666',
                  fillOpacity: 0.8
              }
            }]
            }
          ]
        }
      ]
    },
    {
      xtype: 'panel',
      width: '100%',
      border: false,
      flex: 1,
      layout: {
        type: 'hbox',
        pack: 'center'
      },
        items: [
          {
            xtype: 'draw',
            width: 600,
            height: 400,
            sprites: [{
                type: 'line',
                fromX: 20,
                fromY: 20,
                toX: 120,
                toY: 120,
                strokeStyle: '#1F6D91',
                lineWidth: 3
            }]
          },
          {
            xtype: 'gauge',
            padding: 20,
            value: 55,
            minValue: 40,
            maxValue: 80
          }
        ]
    }



  ]
});