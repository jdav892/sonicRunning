import k from "../kaplayContext";
import { sonicMaker } from "../entities/sonic"

export default function mainMenu(){
    if (!k.getData("high-score")) k.setData("high-score", 0);
    k.onButtonPress("jumpKey", () => k.go("game"));

    const bgPieceWidth = 1920;
    //Game objects are how entities are created in kaplay
    //Passed as arrays
    const bgPieces = [
        k.add([
            k.sprite("chemical-bg"),
            k.pos(0, 0), 
            k.scale(2),
            k.opacity(0.8)]),
        k.add([
            k.sprite("chemical-bg"),
            //2nd image needs to be twice long 
            k.pos(bgPieceWidth * 2, 0), 
            k.scale(2),
            k.opacity(0.8)]),
    ];

    const platformWidth = 1280
    const platforms = [
        k.add([k.sprite("platforms"), k.pos(0, 450), k.scale(4)]),
        k.add([k.sprite("platforms"), k.pos(platformWidth * 4, 450), k.scale(4)]),
    ];

    k.add([
        k.text("RING RUNNING", {font: "mania", size:96}),
        k.pos(k.center().x, 200),
        k.anchor("center"),
    ]);
    
    k.add([
        k.text("Press Space/Left Click/Touch Screen to Play", {font: "mania", size:32}),
        k.anchor("center"),
        //Inverted cartesian plane so - 200 moves this up 200
        k.pos(k.center().x, k.center().y - 200),
    ]);

    sonicMaker(k.vec2(205,745))

    k.onUpdate(() => {
        if(bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
            bgPieces.push(bgPieces.shift());
        }
        bgPieces[0].move(-100, 0);
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);

        if(platforms[1].pos.x < 0){
            platforms[0].moveTo(platforms[1].pos.x + platforms[1].width * 4 , 450);
            platforms.push(platforms.shift())
        }
        platforms[0].move(-2000, 0);
        platforms[1].moveTo(platforms[0].pos.x + platforms[1].width * 4, 450)
    })

}