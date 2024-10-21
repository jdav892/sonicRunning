import k from "../kaplayContext"

export function ringMaker(pos){
    return k.add([
        k.sprite("ring", { anime: "spin"}),
        k.area(),
        k.scale(4),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        "ring",
    ]);
}