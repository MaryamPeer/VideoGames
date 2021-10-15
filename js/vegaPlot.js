var spec = "js/choropleth_symbol_map.vl.json";
vegaEmbed('#mapChart', spec, {actions: false}).then(function(result) {
}).catch(console.error);

spec = "js/radial_plot.vg.json";
vegaEmbed('#radialChart', spec, {actions: false}).then(function(result) {
}).catch(console.error);

spec = "js/bar_chart/bar_chart_action.vl.json";
vegaEmbed('#barChart', spec, {actions: false}).then(function(result) {
}).catch(console.error);

spec = "js/donut_chart/donut_chart_action.vg.json";
vegaEmbed('#donutChart', spec, {actions: false}).then(function(result) {
}).catch(console.error);

function displayDonutChart(genre){

    var spec_bar = "js/bar_chart/bar_chart_" + genre + ".vl.json";
    vegaEmbed('#barChart', spec_bar, {actions: false}).then(function(result) {
    }).catch(console.error);

    var spec_donut = "js/donut_chart/donut_chart_" + genre + ".vg.json";
    vegaEmbed('#donutChart', spec_donut, {actions: false}).then(function(result) {
    }).catch(console.error);    

    var header = genre.substring(0,1).toUpperCase() + genre.substring(1);
    document.getElementById('selectedGenreDiv1').innerHTML = "<h5>" + header + "</h5>";
    document.getElementById('selectedGenreDiv2').innerHTML = "<h5>" + header + "</h5>";
}