const chess_url = 'https://api.chess.com/pub/player/yosh713/stats';

// let date = new Date();
// console.log(date);

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

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
        "blitz: " + data.chess_blitz.last.rating,
        "bullet: " + data.chess_bullet.last.rating,
        "lessons: " + data.lessons.highest.rating,
        // data.puzzle_rush.best.score, " puzzle rush ",
        "tactics: " + data.tactics.highest.rating
    ]

    console.log(chessData);
    
    d3.select(".d3_ratings").selectAll("p")
        .data(chessData)
        .enter()
        .append("p")
        .text((d) => d /* + " score" */);

    d3.select(".d3_chart").selectAll("div")
        .data(chessData)
        .enter()
        .append("div")
        .attr("class", "bar")        
        .style("height", (d) => d/5 + "px");         
    

        const w = 100;
        const h = 100;

    const chess_svg = d3.select(".d3_svg")
                        .data(chessData)
                        .enter()
                        .append("svg")
                        .append("rect")
                        .attr("height", "30vh")
                        .attr("width", "100vw")
                        .attr("x", 50)
                        .attr("y", 0)
        
}
