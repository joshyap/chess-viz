// https://api.chess.com/pub/player/yosh713
// https://api.chess.com/pub/player/yosh713/stats
// https://youtu.be/C4t6qfHZ6Tw?t=465
// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
//https://www.youtube.com/watch?v=uxf0--uiX0I

// const url = 'https://api.chess.com/pub/player/yosh713/stats';

// const response = await fetch('https://api.chess.com/pub/player/yosh713/stat');
// const myJson = await response.json();
// console.log(JSON.stringify(myJson));

const chess_url = 'https://api.chess.com/pub/player/yosh713/stats';

async function getChessData() {
    const response = await fetch(chess_url);
    const data = await response.json();
    console.log(data);
    // console.log('chess blitz best rating is ' + data.chess_blitz.best.rating);
    // const { chess_blitz, chess_bullet, lessons, puzzle_rush, tactics } = data;
    // console.log(chess_blitz + '\n' + chess_bullet + '\n' + lessons + '\n' + puzzle_rush + '\n' + tactics);

    document.getElementById('chess_blitz').textContent = data.chess_blitz.best.rating;
    document.getElementById('chess_bullet').textContent = data.chess_bullet.best.rating;
    document.getElementById('lessons').textContent = data.chess_blitz.best.rating;
    document.getElementById('puzzle_rush').textContent = data.chess_blitz.best.rating;
    document.getElementById('tactics').textContent = data.tactics.highest.rating;
}

getChessData();


var data = ['d3 data will be loaded here'];
// let data = [
//     data.chess_blitz.best.rating,
//     data.chess_bullet.best.rating,
//     data.chess_blitz.best.rating,
//     data.chess_blitz.best.rating,
//     data.tactics.highest.rating
// ]

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
