import kaplay from "kaplay";

const k = kaplay ({
    width: 1920,
    height: 1080,
    letterbox: true,
    //color values in rgb values in an array
    background: [0, 0, 0],
    global: false,
    //touch screen to mouse inputs boolean
    touchToMouse: true,
    buttons : {
        jumpKey: {
            keyboard: ["space"],
            mouse: "left",
        },
    },
    debugKey: "g",
    debug: true,
});

    export default k;

