var width = window.innerWidth/4,
    j = 3,
    height = width;

var origin = [width/1.8, height/2], startAngle = Math.PI/4;

var z_svg = d3.select("#z").append("svg").attr("height", height).attr("width", height)
    .append("g");

z_svg.append("line")
    .attr("x1",height*20/277.5)
    .attr("y1",height*54/277.5)
    .attr("x2",height*275/277.5)
    .attr("y2",height*200/227.5)
    .attr("stroke","black");
z_svg.append("text")
    .attr("x",height*210/277.5)
    .attr("y",height*190/277.5)
    .text("Front");
tilt_text = z_svg.append("text")
    .attr("x",height*0.1)
    .attr("y",height*0.9)
    .text("Tilt of 0 on X and 0 on Y");


var surface = d3._3d()
    .scale(30)
    .x(function(d){ return d.x; })
    .y(function(d){ return d.z; })
    .z(function(d){ return d.y; })
    .origin(origin)
    .rotateZ(startAngle*0.2)
    .rotateY(startAngle)
    .rotateX(-startAngle)
    .shape('SURFACE', j*2);


function processData(data, tt){

    var planes = z_svg.selectAll('path').data(data, function(d){ return d.plane; });

    planes
        .enter()
        .append('path')
        .attr('class', '_3d')
        .attr('fill', colorize)
        .attr('opacity', 0)
        .attr('stroke-opacity', 0.1)
        .merge(planes)
        .attr('stroke', 'black')
        .transition().duration(tt)
        .attr('opacity', 1)
        .attr('fill', colorize)
        .attr('d', surface.draw);

    planes.exit().remove();

    d3.selectAll('._3d').sort(surface.sort);

}

function colorize(d){
    var _z = (d[0].z + d[1].z + d[2].z + d[3].z)/4;
    return d3.interpolateSpectral(_z+0.5);
}

function updateTilt(points, tilt){
    processData(surface(points), 1000);
    tilt_text.text(()=>{
        return "Tilt of " + tilt[0] + "° on X and " + tilt[1] + "° on Y";
    })
}

var pts = [
    {x: -3, y: -3, z:0},
    {x: -2, y: -3, z:0},
    {x: -1, y: -3, z:0},
    {x: 0, y: -3, z:0},
    {x: 1, y: -3, z:0},
    {x: 2, y: -3, z:0},
    {x: -3, y: -2, z:0},
    {x: -2, y: -2, z:0},
    {x: -1, y: -2, z:0},
    {x: 0, y: -2, z:0},
    {x: 1, y: -2, z:0},
    {x: 2, y: -2, z:0},
    {x: -3, y: -1, z:0},
    {x: -2, y: -1, z:0},
    {x: -1, y: -1, z:0},
    {x: 0, y: -1, z:0},
    {x: 1, y: -1, z:0},
    {x: 2, y: -1, z:0},
    {x: -3, y: 0, z:0},
    {x: -2, y: 0, z:0},
    {x: -1, y: 0, z:0},
    {x: 0, y: 0, z:0},
    {x: 1, y: 0, z:0},
    {x: 2, y: 0, z:0},
    {x: -3, y: 1, z:0},
    {x: -2, y: 1, z:0},
    {x: -1, y: 1, z:0},
    {x: 0, y: 1, z:0},
    {x: 1, y: 1, z:0},
    {x: 2, y: 1, z:0},
    {x: -3, y: 2, z:0},
    {x: -2, y: 2, z:0},
    {x: -1, y: 2, z:0},
    {x: 0, y: 2, z:0},
    {x: 1, y: 2, z:0},
    {x: 2, y: 2, z:0}
];

//updateTilt(pts, [0,0]);