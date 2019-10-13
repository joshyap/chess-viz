// https://api.chess.com/pub/player/yosh713
// https://api.chess.com/pub/player/yosh713/stats
// https://youtu.be/C4t6qfHZ6Tw?t=465

var data = [1, 2, 3, 4, 5];

// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);

// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return d; });

d3.select('.chart')
    .selectAll('p')
    .data(data)
    .enter()
    .append('p')
    .text(function(d) { return d; });
