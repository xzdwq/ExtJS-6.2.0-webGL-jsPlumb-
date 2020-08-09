Ext.define('webGL.view.webGL.webGLCTRL', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.webglctrl',
  init: function() {
    this.control({
      '#webgld3': {
        afterrender: this.onRenderWebGLD3
      },
      '#webglthreejs': {
        afterrender: this.onRenderWebGLThree
      }
    });
  },
  onRenderWebGLD3: function(el) {
    // el.add(
    //     Ext.create('Ext.draw.Container', {
    //       height:305,
    //       width:305,
    //       sprites: [{
    //           type: 'rect',
    //           fillStyle: 'red',
    //           width: 100,
    //           height:100,
    //           scale: {
    //               x: 3,
    //               y: 3
    //           }
    //       }]
    //   })
    // );
    // el.add({
    //   html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="116.63905797255211 121.68230833975801 137.43633864514595 131.13225965403666" width="133.44" height="127.13"><defs><path class="svgcircle" d="M251.08 186.25C251.08 221.33 221.18 249.81 184.36 249.81C147.53 249.81 117.64 221.33 117.64 186.25C117.64 151.17 147.53 122.68 184.36 122.68C221.18 122.68 251.08 151.17 251.08 186.25Z" id="dypbYYLiz"></path></defs><g><g><use xlink:href="#dypbYYLiz" opacity="1" fill="#04765b" fill-opacity="1"></use></g></g></svg>',
    //   listeners: {
    //     render: function(c){
    //       Ext.Ajax.request({
    //         async:false,
    //         url: '/app/data/rate/otherrate.json',
    //         method: 'POST',
    //         callback: function(options,success,respond){
    //           if(success){
    //              var responseJson = Ext.JSON.decode(respond.responseText);
    //              endpointcoverrate = responseJson.data[0].value.toString()+ '%';
    //              endpointcoverrate_color = responseJson.data[0].value>95? '#000000' : '#ff0000';

    //              remoteuserate = responseJson.data[1].value.toString()+ '%';
    //              remoteuserate_color = responseJson.data[1].value>90? '#000000': '#ff0000';

    //              remotesuccessrate = responseJson.data[2].value.toString()+'%';
    //              remotesuccessrate_color = responseJson.data[2].value>98? '#000000': '#ff0000';

    //              remotecorrectrate = responseJson.data[3].value.toString()+ '%';
    //              remotecorrectrate_color = responseJson.data[3].value>95? '#000000': '#ff0000';

    //           }else{
    //             console.log("failure");
    //           }
    //         }
    //       });
    //       // const paths = document.querySelectorAll('.svgcircle');
    //       // c.getEl().on({
    //       //   click: function() {
    //       //     console.log(paths)
    //       //   }
    //       // });
    //     }
    //   }
    //   //Ext.getCmp('forgot_pwd').getEl().on('click', function() {alert('ok');});
    // //   xtype:'d3-svg',
    // //   listeners:{
    // //   scenesetup:function(comp,scene){

    // //   var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    // //   colors = d3.scale.category20(),
    // //   twoPi = 2 * Math.PI,
    // //   gap = twoPi / data.length,
    // //   r = 100;

    // //   scene.append('g')
    // //   .attr('transform', 'translate(150,150)')
    // //   .selectAll('circle')
    // //   .data(data)
    // //   .enter()
    // //   .append('circle')
    // //   .attr('fill', function (d) {
    // //   return colors(d);
    // //   })
    // //   .attr('stroke', 'black')
    // //   .attr('stroke-width', 3)
    // //   .attr('r', function (d) {
    // //   return d * 3;
    // //   })
    // //   .attr('cx', function (d, i) {
    // //   return r * Math.cos(gap * i);
    // //   })
    // //   .attr('cy', function (d, i) {
    // //   return r * Math.sin(gap * i);
    // //   }).attr('rx', function (d, i) {
    // //   return r * Math.cos(gap * i)-d;
    // //   })
    // //   .attr('ry', function (d, i) {
    // //   return r * Math.sin(gap * i)-d;
    // //   });

    // //   }
    // //   }
    // // })
    // // xtype: 'd3-canvas',
    // // listeners:{
    // // sceneresize: function (component, canvas, size) {
    // // var barCount = 10,
    // // barWidth = size.width / barCount,
    // // barHeight = size.height,
    // // context = canvas.getContext('2d'),
    // // colors = d3.scale.category20(),
    // // i = 0;

    // // for (; i < barCount; i++) {
    // // context.fillStyle = colors(i);
    // // context.fillRect(i * barWidth, 0, barWidth, barHeight);
    // // }
    // // }
    // })
  },
  onRenderWebGLThree: function(el) {
    renderer.setSize(300, 300);
    el.body.appendChild(renderer.domElement);
  }
});