var width = window.innerWidth/4,
    height = width/2 + 150,
    radius = Math.max(width, height) /4;

var speed_svg = d3v5.select("#speed").append("svg").attr("height", height).attr("width", width)
    .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height/1.2+ ")");

var ga2 = speed_svg.append("g")
  .attr("class", "a axis")
.selectAll("g")
  .data(d3v5.range(0, 181, 20))
.enter().append("g")
  .attr("transform", function(d) { return "rotate(" + (d+181) + ")"; });

ga2.append("line")
  .attr("x2", radius)
  .style("stroke","#D3D3D3");
  

ga2.append("text")
  .attr("x", radius + 6)
  .attr("dy", ".30em")
  .style("text-anchor", function(d) { return d < 181 && d > 90 ? "end" : null; })
  .attr("transform", function(d) { return d < 181 && d > 90 ? "rotate(180 " + (radius+6) + ",0)" : null; })
  .text(function(d) {return d + "MPH" });

var vector = speed_svg.append("line")
  .attr("stroke","red")
  .attr("stroke-width",5)
  .attr("x1", 0)
  .attr("y1",-radius)
  .attr("x2", 0)
  .attr("y2",0);

var speedNum = speed_svg.append("text")
    .attr("x", -75)
    .attr("y", height/2 - 325)
    .style("fill","red")
    .text("0 MPH")

var prev = 0;

function updateSpeed(angS){
    let change = prev-angS;
    speedNum.text(()=>{
        return ((change+90) + " MPH");
    })

    vector.transition().duration(10000)
        .attr("transform",()=>{
            console.log(change)
            return "rotate("+change+")";
        }).on("end",()=>{
            prev = angS;
        })
}

setInterval(() => {
  updateSpeed((Math.random()*0.5)*90);
}, 1000);