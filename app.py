from flask import Flask, render_template, json, jsonify, request, redirect, url_for
import networkx as nx
from json import dumps

# first convert graph into cytoscape graph, with node weights = sum of all outgoing edge weights

file = "NELA_FullNetwork_2019.gexf"
#file = "InDegreeWeightedNormalizedFullNetwork.gexf"
#file = "RawWeightsJulyNetwork.gexf"
G = nx.read_gexf(file)

for node in G.nodes():
    G.nodes[node]['weight'] = G.out_degree(node, 'weight')

graph = nx.cytoscape_data(G)
graph = dumps(graph)
print(graph)

# Initialize Flask
app = Flask(__name__)

@app.route("/")
def index():
    global graph
    return render_template("index.html", graph=graph)

if __name__ == "__main__":
    app.run()
    
    # uncomment lines below to write graph with node weights = sum of all outgoing edge weights as json file
    # use this file with cytoscape desktop
    #a = open("graph.json", "w")
    #a.write(str(graph) + "\n")
    #a.close()
