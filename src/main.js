import k from "./kaplayContext"

k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms", "graphics/platforms.png");
k.loadSprite("sonic", "graphics/sonic.png", {
    //Slicing sprite graphics by row/column
    sliceX: 8,
    sliceY: 2,
    animations: {
        run: {from: 0, to: 7, loop: true, speed: 30},
        jump: {from: 8, to : 15, loop: true, speed: 100},
    }
});

k.loadSprite("ring", "graphics/ring.png", {
    sliceX: 16,
    sliceY: 1,
    animations: {
        rotation: {from: 0, to: 15, loop: true, speed: 20},
    }
});

k.loadSprite("motobug", "graphics/motobug.png", {
    sliceX: 5,
    sliceY: 1,
    animations: {
        run: {from: 0, to: 4, loop: true, speed: 8}
    }
});