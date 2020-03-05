var width_thr = window.innerWidth/4,
    height_thr = width_thr/2,
    radius_thr = Math.max(width_thr, height_thr) /4;

var thr_svg = d3v5.select("#thr").append("svg").attr("height", height_thr).attr("width", width_thr)
    .append("g")
  .attr("transform", "translate(" + width_thr / 2 + "," + height_thr/1.2+ ")");

var ga3 = thr_svg.append("g")
  .attr("class", "a axis")
.selectAll("g")
  .data(d3v5.range(0, 181, 45))
.enter().append("g")
  .attr("transform", function(d) { return "rotate(" + (d+181) + ")"; });

ga3.append("line")
  .attr("x2", radius_thr)
  .style("stroke","#D3D3D3");
  

ga3.append("text")
  .attr("x", radius_thr + 6)
  .attr("dy", ".30em")
  .style("text-anchor", function(d) { return d < 181 && d > 90 ? "end" : null; })
  .attr("transform", function(d) { return d < 181 && d > 90 ? "rotate(180 " + (radius_thr+6) + ",0)" : null; })
  .text(function(d) {
      if (d === 0){
        return "0°";
      }
    else if (d === 45) {
        return "22.5°";
    } else if (d === 90){
        return "45°"
    } else if (d === 135){
        return "67.5°"
    } else {
        return "90°" }
    });

var vectorThr = thr_svg.append("line")
  .attr("stroke","red")
  .attr("stroke-width",5)
  .attr("x1", 0)
  .attr("y1",-radius_thr)
  .attr("x2", 0)
  .attr("y2",0);

var prevThr = 0;

function updateThr(angThr){
  let changeThr = prevThr-angThr;

  vectorThr.transition().duration(200)
    .attr("transform",()=>{
      return "rotate("+changeThr+")";
    }).on("end",()=>{
      prevThr = angThr;
    })
}

setInterval(() => {
  updateThr((Math.random()*0.5)*90);
}, 1000);