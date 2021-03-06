import React, { Component } from 'react';

export default class LinkageChart extends Component {
    constructor(props) {
        super(props) ;
    }

    render() {
        return (
            <div>
                <svg width="960" height="500"></svg>            
            </div>
        );
    }

    componentDidMount() {
        var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");
    
        var formatNumber = d3.format(",.0f"),
            format = function(d) { return formatNumber(d) ; },
            color = d3.scaleOrdinal(d3.schemeCategory10);
        
        var sankey = d3.sankey()
            .nodeWidth(10)
            .nodePadding(20)
            .extent([[1, 1], [width - 1, height - 6]]);
        
        var link = svg.append("g")
            
            .attr("fill", "none")
            
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.2)
        .selectAll("path");
        
        var node = svg.append("g")
            .attr("class", "nodes")
            .attr("font-family", "sans-serif")
            .attr("font-size", 14)
        .selectAll("g");
        
        d3.json("../sampleObject.json", function(error, energy) {
        if (error) throw error;
        
        sankey(energy);
        
        link = link
            .data(energy.links)
            .enter().append("path")
            .attr("d", d3.sankeyLinkHorizontal())
            .attr("class", "link")
            .attr("stroke-width", function(d) { return Math.max(1, d.width); });
        //tooltip value
        link.append("title")
            .text(function(d) { return d.source.name + " → " + d.target.name; });
        
        node = node
            .data(energy.nodes)
            .enter().append("g");
        
        node.append("rect")
            .attr("x", function(d) { return d.x0; })
            .attr("y", function(d) { return d.y0; })
            .attr("height", function(d) { return d.y1 - d.y0; })
            .attr("width", function(d) { return d.x1 - d.x0; })
            .attr("fill", function(d) { return color(d.name.replace(/ .*/, "")); })
            .attr("stroke", "#000");
        
        node.append("text")
            .attr("x", function(d) { return d.x0 - 6; })
            .attr("y", function(d) { return (d.y1 + d.y0) / 2; })
            .attr("dy", "0.35em")
            .attr("text-anchor", "end")
            .text(function(d) { return d.name; })
            .filter(function(d) { return d.x0 < width / 2; })
            .attr("x", function(d) { return d.x1 + 6; })
            .attr("text-anchor", "start");
        
        node.append("title")
            .text(function(d) { return d.name + "\n" + format(d.value); });
            
        });
        
    }
}