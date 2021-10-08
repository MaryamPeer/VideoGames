var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var div = d3.select("body").append("div")	
.attr("class", "tooltip")				
.style("opacity", 0);

var pack = d3.pack()
.size([width, height])
.padding(6);

d3.csv("data/google-play-store-games.csv", function(d) {
    d.rating = +d["total ratings"];
    d.game = d["title"]

    return d;
    }, function(error, data) {
    if (error) throw error;

    var color = d3.scaleOrdinal()
    .domain(data.map(function(d){ return d.game;}))
    .range(['#fbb4ae','#b3cde3','#ccebc5','#decbe4','#fed9a6','#ffe9a8','#b9bfe3','#fddaec','#cccccc']);

    var root = d3.hierarchy({children: data})
    .sum(function(d) { return d.rating; })
    .sort(function(a, b) { return b.rating - a.rating; });

    var node = svg.selectAll(".node")
    .data(pack(root).leaves())
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    node.append("circle")
    .attr("id", function(d) { return d.id; })
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return color(d.data.game); })
    
    .on("mouseover", function(d) {		
        div.transition()		
            .duration(1200)		
            .style("opacity", 1);	
        
        var duration = 800;
            data.forEach(function(d, i) {
                node.transition().duration(duration).delay(i * duration)
                    .attr("r", d.rating);
            });

        div.html("Game: " + d.data.game + "<br>" + "Ratings: " + d.data.rating  )
            .style("left", (d3.event.pageX) + "px")	
            .style("top", (d3.event.pageY) + "px");	
    })					

    .on("mouseout", function(d) {		
        div.transition()		
            .duration(500)		
            .style("opacity", 0);	
    });   

    // node.append("text")
    //     .attr("dx", 0)
    //     .text(function(d){return  d.data.game})


    // node.append("text")
    // .attr("width", function(d){return  2*d.r*Math.cos(Math.PI/4)})
    // .attr("height", function(d){return  2*d.r*Math.cos(Math.PI/4)})
    // .append("xhtml:body")
    // .style("font", "14px 'Helvetica Neue'")
    // .html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, excepturi veniam veritatis quaerat itaque eius voluptate! Fugit, est dolorum tenetur!");

    // svg.selectAll("mydots")
    // .data(data)
    // .enter()
    // .append("circle")
    // .attr("cx", 370)
    // .attr("cy", function(d,i){ return 20 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    // .attr("r", 5)
    // .style("fill", function(d){ return color(d.game)})

    // svg.selectAll(".legend")
    // .data(data)
    // .enter()
    // .append("text")
    // .attr("x", 380)
    // .attr("y", function(d,i){ return 20 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    // .style("overflow", "visible")
    // .style("fill", function(d){ return color(d.game)})
    // .text(function(d){ return d.game})
    // .attr("text-anchor", "start")
    // .attr("font-size", 12 + "px")
    // .style("alignment-baseline", "middle")
    
});

