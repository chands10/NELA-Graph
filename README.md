# NELA-Graph

JavaScript Dynamic Graph of NELA Data

## Requirements
* Run the flask app using  `python app.py`
* Included Layouts: cola, euler, fcose, spread (cola currently in use)

## Current Features
* Takes a gexf file as input, adds node weights (= sum of outgoing edge weights) to the graph, and converts this graph into Cytoscape data that is then displayed
* Edges are highlighted red when a node is clicked, and back to blue when the same node is clicked again
* Edges with relatively greater weights contain a greater opacity than those with lesser weights
* Nodes with relatively greater weights are bigger than those with lesser weights
* Currently uses the cola Cytoscape layout (included in static folder)

## To Use Hardcoded Values
* Note: Running the application with this modified javascript file may not use the hardcoded values correctly, and may default to using some layout
* Create graph.json by uncommenting the lines in app.py and then running it
* graph.json represents a cytoscape graph created from app.py using with node weights = sum of outgoing edge weights
* Feed this graph into Cytoscape Desktop and use the AllegroLayout
* Export Network to File with .cyjs extension (Export Network to Web Page may work better?)
* Copy the "elements" section from the .cyjs file and paste into the elements section of the javascript file
* Remove the layout section from the .js file
