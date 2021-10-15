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
    d.rating = +d["5 star ratings"];
    d.game = d["title"];
    d.category = d["category"]

    return d;
    }, function(error, data) {
    if (error) throw error;

    var color = d3.scaleOrdinal()
    .domain(data.map(function(d){ return d.game;}))
    .range(['#6A66A3','#FFA372','#FFA372','#FFA372','#FFA372', "#FFA372", "#FFA372", "#FFA372", "#FFA372", "#FFA372"]);

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

        div.html("<label style = 'color: gray' >&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Game:&nbsp</label><label>"
        + d.data.game + "</label>"
        + "<br>" + "<label style = 'color: gray' >Number of 5 Star Ratings:&nbsp </label><label>" + d.data.rating + "</label>" + "<br>" 
        + "<label style = 'color: gray' >&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbspGenre:&nbsp</label><label>" + d.data.category )
            .style("left", (d3.event.pageX) + "px")	
            .style("top", (d3.event.pageY) + "px");
    })					

    .on("mouseout", function(d) {		
        div.transition()		
            .duration(500)		
            .style("opacity", 0);	
    }); 
    
    node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 3 || i == 4){
            return d.data.game;
        }       
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/4;
    })
    .attr("fill", "white");

    node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 9){
            return d.data.game;
        }       
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/3;
    })
    .attr("fill", "white");

    node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 1){
            return d.data.game;
        }       
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/4;
    })
    .attr("fill", "white");


    node.append("text")
    .attr("dy", "-5px")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 0){
            return d.data.game.substring(0, d.r / (d.r/16));
        }       
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

    node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 0){
            return d.data.game.substring(d.r / (d.r/16), (d.data.game).length);
        }    
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/5
    })
    .attr("fill", "white");

    node.append("text")
    .attr("dy", "-5px")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 2){
            return d.data.game.substring(0, d.r / (d.r/14));
        }    
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/4;
    })
    .attr("fill", "white");

    node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function(d, i) {
       if(i == 2){
            return d.data.game.substring(d.r / (d.r/14), (d.data.game).length);
        }      
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/4
    })
    .attr("fill", "white");
    
   
    node.append("text")
    .attr("dy", "-5px")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 6){
            return d.data.game.substring(0, d.r / (d.r/16));
        }    
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/4;
    })
    .attr("fill", "white");

    node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 6){
            return d.data.game.substring(d.r / (d.r/16), (d.data.game).length);
        }    
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/4;
    })
    .attr("fill", "white");

    node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function(d, i) {
        if(i == 5 || i == 7 || i == 8){
            return d.data.game.substring(0, d.r / (d.r/16));
        }       
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/3.2;
    })
    .attr("fill", "white");
});