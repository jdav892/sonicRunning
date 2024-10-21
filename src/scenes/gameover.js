import k from "../kaplayContext"

export default function gameover(citySfx){
    citySfx.paused = true;
    let bestScore = k.getData("best-score");
    const currentScore = k.getData("current-score");

    const ranks = ["F", "D", "C", "B", "A", "S", "SSS"];
    const rankScores = ["50", "80", "100", "200", "300", "400", "500"]; 

    let currentRank = "F";
    let bestRank = "F";

    for(let i = 0; i < rankScores.length; i++){
        if(rankScores[i] < currentScore){
            currentRank = ranks[i];
        }
        if(rankScores[i] < bestScore){
            bestRank = ranks[i];
        }
        if(bestScore < currentScore){
            k.setData("best-score", currentScore);
            bestScore = currentScore;
            bestRank = currentRank;
        }

        k.add([
            k.text("Game Over", {font: "mania", size: 96}),
            k.anchor("center"),
            k.pos(k.center().x, k.center().y - 300),
        ]);
        k.add([
            k.text(`Best Score: ${bestScore}`, {
                font: "mania",
                size: 64,
            }),
            k.anchor("center"),
            k.pos(k.center().x - 400, k.center().y - 200),
        ]);
        k.add([
            k.text(`Current Score: ${currentScore}`, {
                font: "mania",
                size: 64,
            }),
            k.anchor("center"),
            k.pos(k.center().x + 400, k.center().y - 200),
        ]);
    }
    const bestRankBox = k.add([
        k.rect(400, 400, {radius: 4}),
        k.color(0, 0, 0),
        k.area(),
        k.anchor("center"),
        k.outline(6, k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x - 400, k.center().y + 50),
    ]);
    bestRankBox.add([
        k.text(bestRank, {font: "mania", size: 100}),
        k.anchor("center"),
    ]);

    const currentRankBox = k.add([
        k.rect(400, 400, {radius: 4}),
        k.color(0, 0, 0),
        k.area(),
        k.anchor("center"),
        k.outline(6, k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x + 400, k.center().y + 50),
    ]);
    currentRankBox.add([
        k.text(currentRank, {font: "mania", size: 100}),
        k.anchor("center")
    ])

    k.wait(1, () => {
        k.add([
            k.text("Press Space/Left Click/Touch Screen to Play Again", {
                font: "mania",
                size: 64,
            }),
            k.anchor("center"),
            k.pos(k.center().x, k.center().y + 350),
        ]);
        k.onButtonPress("jumpKey", () => k.go("game"));
    });
}