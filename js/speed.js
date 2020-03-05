var width_speed = window.innerWidth/4,
    height_speed = width_speed/2 + 150,
    radius_speed = Math.max(width_speed, height_speed) /4;

var speed_svg = d3v5.select("#speed").append("svg").attr("height", height_speed).attr("width", width_speed)
    .append("g")
  .attr("transform", "translate(" + width_speed / 2 + "," + height_speed/1.2+ ")");

var ga2 = speed_svg.append("g")
  .attr("class", "a axis")
.selectAll("g")
  .data(d3v5.range(0, 181, 20))
.enter().append("g")
  .attr("transform", function(d) { return "rotate(" + (d+181) + ")"; });

ga2.append("line")
  .attr("x2", radius_speed)
  .style("stroke","#D3D3D3");
  

ga2.append("text")
  .attr("x", radius_speed + 6)
  .attr("dy", ".30em")
  .style("text-anchor", function(d) { return d < 181 && d > 90 ? "end" : null; })
  .attr("transform", function(d) { return d < 181 && d > 90 ? "rotate(180 " + (radius_speed+6) + ",0)" : null; })
  .text(function(d) {return d + "MPH" });

var vectorSp = speed_svg.append("line")
  .attr("stroke","red")
  .attr("stroke-width",5)
  .attr("x1", 0)
  .attr("y1",-radius_speed)
  .attr("x2", 0)
  .attr("y2",0);

var speedNum = speed_svg.append("text")
    .attr("x", -75)
    .attr("y", height_speed/2 - 325)
    .style("fill","red")
    .text("0 MPH")

var prevSp = 0;

function updateSpeed(angSp){
    let changeSpeed = prevSp-angSp;
    speedNum.text(()=>{
        return ((changeSpeed+90) + " MPH");
    })

    vectorSp.transition().duration(10000)
        .attr("transform",()=>{
            return "rotate("+changeSpeed+")";
        }).on("end",()=>{
            prevSp = angSp;
        })
}

setIntervalSp(() => {
  //updateSpeed((Math.random()*0.5)*90);
}, 1000);