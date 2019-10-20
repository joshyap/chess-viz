// https://api.chess.com/pub/player/yosh713
// https://api.chess.com/pub/player/yosh713/stats
// https://youtu.be/C4t6qfHZ6Tw?t=465
// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
//https://www.youtube.com/watch?v=uxf0--uiX0I

const chess_url = 'https://api.chess.com/pub/player/yosh713/stats';

async function getChessData() {
    const response = await fetch(chess_url);
    const data = await response.json();
    console.log(data);    

    document.getElementById('chess_blitz').textContent = data.chess_blitz.best.rating;
    document.getElementById('chess_bullet').textContent = data.chess_bullet.best.rating;
    document.getElementById('lessons').textContent = data.lessons.highest.rating;
    document.getElementById('puzzle_rush').textContent = data.puzzle_rush.best.score;
    document.getElementById('tactics').textContent = data.tactics.highest.rating;


    let chessData = [
        data.chess_blitz.best.rating,
        data.chess_bullet.best.rating,
        data.lessons.highest.rating,
        data.puzzle_rush.best.score,
        data.tactics.highest.rating
    ]
    
    console.log(chessData);
    
    for (var i = 0; i<chessData.length; i++) {
        d3.select("ul").append("li").text(chessData[i])
    };
}



// var data = ['d3 data will be loaded here'];
// let data = [
//     data.chess_blitz.best.rating,
//     data.chess_bullet.best.rating,
//     data.chess_blitz.best.rating,
//     data.chess_blitz.best.rating,
//     data.tactics.highest.rating
// ]

// console.log(data);

// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);

// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return d; });

// d3.select('.chart')
//     .selectAll('p')
//     .data(data)
//     .enter()
//     .append('p')
//     .text(function(d) { return d; });
