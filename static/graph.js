$(document).ready(function () {
    var graph = $("#cy").data("graph");
	var cy = cytoscape({
		container: $('#cy'),
		data: graph.data,
	  	directed: graph.directed,
	  	multigraph: graph.multigraph,
	  	elements: graph.elements,

	  	layout: {
	    	name: 'cola'
	  	},

	  	 style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#666',
                    'width': 'mapData(weight, 0, 2, 10, 100)', //weights between 0 and 2 map to width between 10 and 100
                    'height': 'mapData(weight, 0, 2, 10, 100)'
                    // 'label': 'data(label)', //ADDS LABEL TO EACH NODE
                    // 'text-valign': 'center',
                    // 'padding': '1px',

                    //LAYOUT FCOSE FEATURES
                    // 'idealEdgeLength': '10000',
                    // 'nodeRepulsion': '100000',
                    // 'nodeSeparation': '1000000',
                    // 'edgeElasticity': '0.001'
                    
                    // 'minDist': 20000 // Minimum distance between nodes LAYOUT SPREAD FEATURE
                }
            },
            {
                selector: 'edge',
                style: {
                    // 'line-color': 'mapData(weight, 0, 0.01, white, blue)' //have edges be white or blue based off weight
                    'line-color': 'blue',
                    'opacity': 'mapData(weight, 0, 0.1, 0, .4)' //weights between 0 and 0.1 map to opactity between 0 and 0.4
                }
            }
        ]
	});

    //modified from https://stackoverflow.com/questions/35714899/change-edges-line-color-when-the-connected-node-clicked-in-cytoscape-js


    cy.$('node').on('tap', function (e) {
        var ele = e.target;
        var color = ele.connectedEdges().style('line-color');
        console.log(color);

        //toggle color on click
        if (color != "rgb(255,0,0)") {
            ele.connectedEdges().style({ 'line-color': 'red' });
        } else {
            ele.connectedEdges().style({ 'line-color': 'blue' });
        }
    });


    // Can alternatively have color change back when node is not being actively clicked/held
    // cy.$('node').on('free', function (e) {
    //     var ele = e.target;
    //     ele.connectedEdges().style({ 'line-color': 'blue' });
    // });
});