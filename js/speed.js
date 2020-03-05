var width_speed = window.innerWidth/4,
    height_speed = width_speed/2,
    radius_speed = Math.max(width_speed, height_speed) /4;

var speed_svg = d3v5.select("#speed").append("svg").attr("height", height_speed).attr("width", width_speed)
    .append("g")
  .attr("transform", "translate(" + width_speed / 2 + "," + height_speed/1.2+ ")");

var speedNum = speed_svg.append("text")
    .attr("x", -100)
    .attr("font-weight", 500)
    //.style("fill","black")
    //.style("fill",d3.interpolateRgb("blue","red")(d))
    .style("font-size","50")
    .text("0 MPH")

var prevSp = 0;

function updateSpeed(angSp){
    let changeSpeed = Math.min(angSp/90,1);
    //maxSpeed = Math.min(0,80);
    speedNum.transition()
      .duration(200)
      .style("fill",d3.interpolateTurbo(changeSpeed))
      .text((angSp).toFixed(2) + " MPH");
}

setInterval(() => {
  updateSpeed((Math.random())*90);
}, 1000);