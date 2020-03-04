var width = window.innerWidth/4,
    height = width-50;

var track_svg = d3.select("#track")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

// Below was produced using this code example: https://bl.ocks.org/basilesimon/f164aec5758d16d51d248e41af5428e4

var x = d3.scaleLinear().domain([0, 10]).range([0, width]);
var y = d3.scaleLinear().domain([0, 10]).range([10, height - 10]);

var line = d3.line()
    .x(function(d,i) {return x(i);})
    .y(function(d) {return y(d);})
    .curve(d3.curveNatural)

    let repeat = () => {
        var data = d3.range(11).map(function(){return Math.random()*10})
        console.log(data);
  
        track_svg.selectAll("path").remove();
  
        var path = track_svg.append("path")
          .attr("d", line(data))
          .attr("stroke", "black")
          .attr("stroke-width", "2")
          .attr("fill", "none");
  
        var totalLength = path.node().getTotalLength();
  
        path
          .attr("stroke-dasharray", totalLength + " " + totalLength)
          .attr("stroke-dashoffset", totalLength)
          .transition()
            .duration(9000)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0)
            .on("end", repeat);
      };
      repeat();

    
