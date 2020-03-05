var width = window.innerWidth/4,
    height = width/2,
    radius = Math.max(width, height) /4;

var gear_svg = d3.select("#gear")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

var first = gear_svg.append("circle")
    .attr("r", 20)
    .style("color","gray")
    //.text("1")