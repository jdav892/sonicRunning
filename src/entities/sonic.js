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
        k.body({jumpForce: 1700}),
        {
            ringCollectionUI: null,
            setControls() {
                k.onButtonPress("jumpKey", () => {
                    if(this.isGrounded()) {
                        this.play("jump");
                        this.jump();
                        k.play("jump", {volume: 0.5});
                    }
                })
            },
            setEvents() {
                this.onGround(() => {
                    this.play("run");
                });
            },
        },
    ]);
    sonic.ringCollectionUI = sonic.add([
        k.text("", {font: "mania", size: 24}),
        k.color(255, 255, 0),
        k.anchor("center"),
        k.pos(30, -10),
    ]);
    return sonic;
}