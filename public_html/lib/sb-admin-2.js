$(document).ready(function (){
        
    $( "#upspeedSlider" ).slider({
      range: "min",
      value: 500,
      min: 1,
      max: 700,
      slide: function( event, ui ) {
        $( "#_upspeed" ).val( ui.value +" Mbps");
      }
    });
    $( "#_upspeed" ).val( $( "#upspeedSlider" ).slider( "value" ) +" Mbps" );


    $( "#downspeedSlider" ).slider({
      range: "min",
      value: 700,
      min: 1,
      max: 700,
      slide: function( event, ui ) {
        $( "#_downspeed" ).val( ui.value+" Mbps" );
      }
    });
    $( "#_downspeed" ).val( $( "#downspeedSlider" ).slider( "value" ) +" Mbps" );

    $( "#ddupspeed" ).slider({
      range: "min",
      value: 50,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#ddupspeedval" ).val( ui.value +" Mbps");
      }
    });
    $( "#ddupspeedval" ).val( $( "#ddupspeed" ).slider( "value" ) +" Mbps" );
    
    $( "#ddownspeed" ).slider({
      range: "min",
      value: 50,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#ddownspeedval" ).val( ui.value +" Mbps");
      }
    });
    $( "#ddownspeedval" ).val( $( "#ddownspeed" ).slider( "value" ) +" Mbps" );

    //data dataTable
    $('#tableDevice').DataTable({
        "lengthMenu": [ 5, 10, 25, 50 ]
    });

    
$(function() {
        $(".sfilter").tooltip({trigger: 'manual'});
        $(".blink").on("focusout",function(){
            if($(".isabell")[0]){
                $(".isabell").removeClass("isabell");
            }
        });
        var btn = $(".ani")[0];
        btn.onclick = function (){ if($(this).hasClass("open")){ $(this).find(".fa-bell").addClass("isabell")}else{  $(this).find(".fa-bell").removeClass("isabell") } }
    
   
	$(".view").on("click",function (){
        var eleId = this.id;
            
        menuHilighter(eleId);
        handleMenuMode(eleId);
    });
    $('#_settingsContainer, #_profileContainer').css('display','none');
        
    $("#rsetting").on("click", showSettings);

    $("#view_profile").on("click", showProfile);

    $("#tableDevice").on("click",".deviceName", showDeviceDetails);

    $(".sfilter").on("click",function (){
        $("#_searchFields").toggle();
    });

//display profile 
    function showProfile(){
             $("#_profileContainer tr").css("display","table-row")
           $('#_profileContainer').popup('show');
    }

//display settings overlay
    function showSettings (){
           $('#_settingsContainer').popup('show');
    }    

//highlight selected view 
    function menuHilighter(elementId/*string*/){
        $(".view").removeClass("selected");
        $("#"+elementId).addClass("selected");
    }
 //display device details
 function showDeviceDetails(){
     $(".device-name").text(this.textContent);
     $("#deviceDetail").css("right",'0');
 }
 
 //Total consumption update
 (function updateUsage(){
     setInterval(function (){ 
         var _random = Math.round(Math.random()*.8), 
         ele =$("._cons") , 
         _usage = (ele.text().split(" ")[1] === " TB"? parseInt(ele.text()*1024) : parseInt(ele.text())) + _random,
         _unit = _usage >1024? " TB" : " GB";
        if(_unit==" TB"){
            _usage = _usage/1024;
        }
        ele.text( _usage+ _unit);
     }, 1200);
 }());

 //show tree or list view
    function handleMenuMode(elementId/*string*/){
        var animDur = 800; //milliseconds
        if(elementId === "tree_view"){
            $("#list_view_panel").hide().css("opacity",0);
            $("#tree_view_panel").fadeTo(animDur,1).show();             
        }else if(elementId === "list_view"){
            $("#tree_view_panel").hide().css("opacity",0);
             $("#list_view_panel").fadeTo(animDur,1).show();            
        }else{console.log("id is not valid");}
    }
	
});
			
var chart = AmCharts.makeChart( "devicePie", {
  "type": "pie",
  "theme": "light",
  "legend":{
   "position":"bottom",
    "autoMargins":false,
    "marginRight":100,
    "valueWidth": 30
  },
  "dataProvider": [ {
    "Devices": "Mobile",
    "Percent": 40.3
  }, {
    "Devices": "Desktop",
    "Percent": 30.1
  }, {
    "Devices": "Laptop",
    "Percent": 20.6
  }, {
    "Devices": "iPad",
    "Percent": 9.0
  }],
  "valueField": "Percent",
  "titleField": "Devices",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );

            /* Donut 
            var donut = new d3pie("top_apps", {

                            size: {
                                pieInnerRadius: "70%",
                                canvasHeight: 250,
                                canvasWidth: 300
                            },
                            data: {
                                sortOrder: "label-asc",
                                content: [
                                { label: "Youtube", value: 16.6}, 
                                { label: "Gmail", value: 12.8}, 
                                { label: "Facebook", value: 12.3}, 
                                { label: "Twitter", value: 11.9}, 
                                { label: "Cricbuzz", value: 9.0}, 
                                { label: "Hotstar", value: 7.7}, 
                                { label: "Clash of clans", value: 29.7} 
                                ]
                            }
                    }); */
					
					var chart = AmCharts.makeChart( "top_apps", {
  "type": "pie",
  "theme": "light",
  "titles": [ {
    "text": "App Usage",
    "size": 16
  } ],
  "dataProvider": [ {
    "app": "Youtube",
    "MB": 200
  }, {
    "app": "Chrome",
    "MB": 500
  }, {
    "app": "Facebook",
    "MB": 100
  }, {
    "app": "Instagram",
    "MB": 50
  },{
    "app": "WhatsApp",
    "MB": 55
  },{
    "app": "Gmail",
    "MB": 20
  },{
    "app": "Zomato",
    "MB": 10
  },{
    "app": "Google play",
    "MB": 57
  } ],
  "valueField": "MB",
  "titleField": "app",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[MB]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }
					});


var dataValue = [{
    "category": "",
    "value1": 20,
    "value2": 10
  }, {
    "category": "",
    "value1": 35,
    "value2": 15
  }, {
    "category": "",
    "value1": 50,
    "value2": 10
  }, {
    "category": "",
    "value1": 90,
    "value2": 50
  }, {
    "category": "",
    "value1": 40,
    "value2": 46
  }, {
    "category": "",
    "value1": 10,
    "value2": 14
  }, {
    "category": "",
    "value1": 5,
    "value2": 19
  }];

  var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": dataValue,
  "valueAxes": [{
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  }],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [{
    "title": "Download Speed (Mbps)",
    "balloonText": "[[title]]: <b>[[value]]</b>",
    "bullet": "round",
    "bulletSize": 10,
    "bulletBorderColor": "#ffffff",
    "bulletBorderAlpha": 1,
    "bulletBorderThickness": 2,
    "valueField": "value1"
  }, {
    "title": "Upload Speed (Mbps)",
    "balloonText": "[[title]]: <b>[[value]]</b>",
    "bullet": "round",
    "bulletSize": 10,
    "bulletBorderColor": "#ffffff",
    "bulletBorderAlpha": 1,
    "bulletBorderThickness": 2,
    "valueField": "value2"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "category",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0
  },
  "export": {
    "enabled": false
  },
  "legend": {}
}); 

setInterval(function() {
    dataValue.shift();
    dataValue.push({
    "category": "",
    "value1": Math.floor((Math.random() * 50) + 1),
    "value2": Math.floor((Math.random() * 90) + 1)
  });
    var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": dataValue,
  "valueAxes": [{
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  }],
  "gridAboveGraphs": true,
  "startDuration": 0,
  "graphs": [{
    "title": "Download Speed (Mbps)",
    "balloonText": "[[title]]: <b>[[value]]</b>",
    "bullet": "round",
    "bulletSize": 10,
    "bulletBorderColor": "#ffffff",
    "bulletBorderAlpha": 1,
    "bulletBorderThickness": 2,
    "valueField": "value1"
  }, {
    "title": "Upload Speed (Mbps)",
    "balloonText": "[[title]]: <b>[[value]]</b>",
    "bullet": "round",
    "bulletSize": 10,
    "bulletBorderColor": "#ffffff",
    "bulletBorderAlpha": 1,
    "bulletBorderThickness": 2,
    "valueField": "value2"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "category",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0
  },
  "export": {
    "enabled": false
  },
  "legend": {
      "periodValueText": "[[value.close]]" 
  }
}); 
}, 2000);

             
            /*tree view*/ 
            var margin = {top: 20, right: 120, bottom: 20, left: 120},
                width = $("#list_view_panel")[0].clientWidth - margin.right - margin.left,
                height = $("#list_view_panel")[0].clientHeight - margin.top - margin.bottom;

            var i = 0,
                duration = 750,
                root;

            var tree = d3.layout.tree()
                .size([height, width]);

            var diagonal = d3.svg.diagonal()
                .projection(function(d) { return [d.y, d.x]; });

            var svg = d3.select("#tree_view_panel").append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + 100 + "," + 0 + ")");

            d3.json("data.json", function(error, flare) {
            if (error) throw error;

            root = flare[0];
            root.x0 = height / 2;
            root.y0 = 0;

            function collapse(d) {
                if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
                }
            }

            root.children.forEach(collapse);
            update(root);
            });

            d3.select(self.frameElement).style("height", "800px");

            function update(source) {

            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach(function(d) { d.y = d.depth * 180; });

            // Update the nodes…
            var node = svg.selectAll("g.node")
                .data(nodes, function(d) { return d.id || (d.id = ++i); });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                .on("click", click);

            nodeEnter.append("circle")
                .attr("r", 10)
                .style("fill", function(d) { return d._children ? "#FDD81A" : "#fff"; })
                .style("stroke-dasharray",function(d) { return d._children ? "6,10" : "none"; });
                


            nodeEnter.append("text")
                .attr("x", function(d) { return d.children || d._children ? -20 : 20; })
                .attr("dy", ".35em")
                .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
                .text(function(d) { return d.name; })
                .style("fill-opacity", 1e-6)
                .on("mouseover",function (txtNode){
                    var cir = d3.select(this.parentNode);
                //return if node end node    
                    if( txtNode.depth !== 2){return;}

                    cir.append("rect").classed("ddata", true).attr("x","20").
                    attr("y","20").
                    attr("rx", "6").
                    attr("ry", "6").
                    attr("height", "140").
                    attr("width","150").
                    attr("class", "ddata").
                    attr("stroke","lightsteelblue").
                    attr("fill","#fff").
                    attr("stroke-width","1.5");
//<text x="20" dy=".35em" text-anchor="start" style="fill-opacity: 1;">Lenovo A801</text>
                    cir.append("text").classed("ddata",true).attr("x","30")
                    .attr("y","40")
                    .attr("text-anchor","start")
                    .style("fill-opacity",1)
                    .text(function (){return "Device: "+txtNode.name});

                    cir.append("text").classed("ddata",true).attr("x","30")
                    .attr("y","60")
                    .attr("text-anchor","start")
                    .style("fill-opacity",1)
                    .text(function (){return "Router: "+txtNode.parent.name});

                    cir.append("text").classed("ddata",true).attr("x","30")
                    .attr("y","80")
                    .attr("text-anchor","start")
                    .style("fill-opacity",1)
                    .text(function (){return "Connection: Wireless"});

                    cir.append("text").classed("ddata",true).attr("x","30")
                    .attr("y","100")
                    .attr("text-anchor","start")
                    .style("fill-opacity",1)
                    .text(function (){return "Usage: Low"});

                    cir.append("text").classed("ddata",true).attr("x","30")
                    .attr("y","120")
                    .attr("text-anchor","start")
                    .style("fill-opacity",1)
                    .text(function (){return "Sent: 1 Mbps"});

                    cir.append("text").classed("ddata",true).attr("x","30")
                    .attr("y","140")
                    .attr("text-anchor","start")
                    .style("fill-opacity",1)
                    .text(function (){return "Received: 12 Mbps"});
                    
                })
                .on("mouseout",treepopupHide);

            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

            nodeUpdate.select("circle")
                .attr("r", 10)
                .style("fill", function(d) { return d._children ? "#FDD81A" : "#fff"; })
                .style("stroke-dasharray",function(d) { return d._children ? "6,10" : "none"; });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
                .remove();

            nodeExit.select("circle")
                .attr("r", 1e-6);

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the links…
            var link = svg.selectAll("path.link")
                .data(links, function(d) { return d.target.id; });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function(d) {
                    var o = {x: source.x0, y: source.y0};
                    return diagonal({source: o, target: o});
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function(d) {
                    var o = {x: source.x, y: source.y};
                    return diagonal({source: o, target: o});
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function(d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
            }

            // Toggle children on click.
            function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
            }
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

$(".closeicon-device").on("click",function (){
    $("#deviceDetail").css({right:"-40%"});
});

function treepopup(a,b,c){
var rects = document.createElement('rect');
    rects.rx = "6";
    rects.ry = "6";
    rects.height = "100";
    rects.width = "100";
    rects.class = "ddata";
    rects.style = "stroke:#006600;fill:#00cc00";
 this.parentNode.appendChild(rects)
}

function treepopupHide(a,b,c){
    $("#tree_view_panel svg").find(".ddata").remove();
}

    
var findIP = new Promise(function (r){
				var w=window, a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}), b=()=>{}; 

				a.createDataChannel(""); 
				a.createOffer(c=>a.setLocalDescription(c,b,b),b);
				a.onicecandidate= function (c){ 
					try{
						c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)
					} catch(e){
					}
				}
			});

function findIp(){
    findIP.then(ip => $("._yourip").text(ip) )
    .catch(e => console.error(e));    
}
findIp();

/*  */
var chart = AmCharts.makeChart("weeklyUsage", {
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
        "week": "Tue",
        "year2004": 200,
        "year2005": 10 //upload
    }, {
        "week": "Wed",
        "year2004": 120,
        "year2005": 20
    }, {
        "week": "Thu",
        "year2004": 940,
        "year2005": 74
    }, {
        "week": "Fri",
        "year2004": 200,
        "year2005": 20
    }, {
        "week": "Sat",
        "year2004": 1400,
        "year2005": 210
    }, {
        "week": "Sun",
        "year2004": 998,
        "year2005": 40
    }, {
        "week": "Mon",
        "year2004": 10,
        "year2005": 4
    }],
    "valueAxes": [{
        "unit": "MB",
        "position": "left",
        "title": "Upload/Download",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "Download ([[category]]) : <b>[[value]] MB</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2004",
        "type": "column",
        "valueField": "year2004"
    }, {
        "balloonText": "Upload ([[category]]) : <b>[[value]] MB</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "clustered":false,
        "columnWidth":0.5,
        "valueField": "year2005"
    }],
    "plotAreaFillAlphas": 0.1,
    "categoryField": "week",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
    	"enabled": true
     }

});

});