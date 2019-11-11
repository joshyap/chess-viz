const chess_url = 'https://api.chess.com/pub/player/yosh713/stats';

async function getChessData() {
    const response = await fetch(chess_url);
    const data = await response.json();

    // let chessData = [
    //     String(data.chess_blitz.best.rating + " blitz "),
    //     String(data.chess_bullet.best.rating + " bullet "),
    //     String(data.lessons.highest.rating + " lessons "),
    //     String(data.puzzle_rush.best.score + " puzzle rush "),
    //     String(data.tactics.highest.rating + " tactics ")
    // ]

    let chessData = [
        data.chess_blitz.best.rating,
        data.chess_bullet.best.rating,
        data.lessons.highest.rating,
        // data.puzzle_rush.best.score,
        data.tactics.highest.rating
    ]

    console.log(chessData);
    
    d3.select(".d3_ratings").selectAll("p")
        .data(chessData)
        .enter()
        .append("p")
        .text((d) => d + " score");

    d3.select(".d3_chart").selectAll("div")
        .data(chessData)
        .enter()
        .append("div")
        .attr("class", "bar")        
        .style("height", (d) => d/5 + "px");                
}
