import k from "../kaplayContext"

//pos parameter is a data structure offered by kaplay that allows x, y value at once
export function sonicMaker(pos){
    const sonic = k.add([
        k.sprite("sonic", { anim: "run" }),
        k.scale(4),
        //automatically generates area information from the shape of render
        k.area(),
        //anchor changes where entity is drawn from
        k.anchor("center"),
        k.pos(pos),
    ]);
    return sonic
}