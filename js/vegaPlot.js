var spec1 = "js/choropleth_symbol_map.vg.json";
vegaEmbed('#choropleth_symbol_map', spec1, {actions: false}).then(function(result) {
}).catch(console.error);

var spec2 = "js/bar_chart.vl.json";
vegaEmbed('#bar_chart', spec2, {actions: false}).then(function(result) {
}).catch(console.error);

var spec = "js/donut_chart/donut_chart_action.vg.json";
vegaEmbed('#donut_chart', spec, {actions: false}).then(function(result) {
}).catch(console.error);

function displayDonutChart(genre){

    var spec = "js/donut_chart/donut_chart_" + genre + ".vg.json";
    vegaEmbed('#donut_chart', spec, {actions: false}).then(function(result) {
    }).catch(console.error);

    var header = genre.substring(0,1).toUpperCase() + genre.substring(1);
    document.getElementById('selectedGenreDiv').innerHTML = "<h5>" + header + "</h5>";
}





// {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//      "params": [
//           {
//             "name": "Month_selection",
//             "value": "January",
//             "bind": {
//             "input": "select",
//             "options": [
//               "January",
//               "February",
//               "March",
//               "April",
//               "May",
//               "June",
//               "July",
//               "August",
//               "September",
//               "October",
//               "November",
//               "December"
//               ],
//             "labels":[
//               "January",
//               "February",
//               "March",
//               "April",
//               "May",
//               "June",
//               "July",
//               "August",
//               "September",
//               "October",
//               "November",
//               "December"
//               ],
//             "name": "Month "
//             }
//           }
//         ],
//     "data": {
//       "url": "https://raw.githubusercontent.com/MaryamPeer/VideoGames/main/data/Twitch_game_data.csv"
//     },
//     "transform": [
//       {"filter": "datum.Month == Month_selection"},
//       {"filter": "datum.Rank <= 5"}
//     ],
//     "hconcat": [
//       {
//         "vconcat": [
//         {
//           "width": 100,
//           "height": 100,
//           "mark": "bar",
//           "transform": [
//             {"filter": "datum.Year == 2016"}
//           ],
//           "encoding": {
//             "x": {
//               "field": "Game",
//               "type": "nominal",
//               "sort": {"field": "Hours_watched", "order":"descending"}
            
//             },
//             "y": {"field": "Hours_watched", "type": "quantitative"}
//           }
//         },
//         {
//           "width": 100,
//           "height": 100,
//           "mark": "bar",
//           "transform": [
//             {"filter": "datum.Year == 2018"}
//           ],
//           "encoding": {
//             "x": {
//               "field": "Game",
//               "type": "nominal",
//               "sort": {"field": "Hours_watched", "order":"descending"}
            
//             },
//             "y": {"field": "Hours_watched", "type": "quantitative"}
//           }
//         }
//       ]
//       },
//       {
//         "vconcat": [
//       {
//         "width": 100,
//         "height": 100,
//         "mark": "bar",
//         "transform": [
//           {"filter": "datum.Year == 2017"}
//         ],
//         "encoding": {
//           "x": {
//             "field": "Game",
//             "type": "nominal",
//             "sort": {"field": "Hours_watched", "order":"descending"}
           
//           },
//           "y": {"field": "Hours_watched", "type": "quantitative"}
//         }
//       },
//       {
//         "width": 100,
//         "height": 100,
//         "mark": "bar",
//         "transform": [
//           {"filter": "datum.Year == 2019"}
//         ],
//         "encoding": {
//           "x": {
//             "field": "Game",
//             "type": "nominal",
//             "sort": {"field": "Hours_watched", "order":"descending"}
           
//           },
//           "y": {"field": "Hours_watched", "type": "quantitative"}
//         }
//       }
//     ]
//       }
//     ]
      
  
    
//   }