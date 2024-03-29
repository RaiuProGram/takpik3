var display = {};

display.x_squares = 9;
display.y_squares = 4;
display.square_width;
display.square_height;
display.table_x = 0;
display.table_y = 0;
display.table_width;
display.table_height;
display.canvas = function() {
    return document.getElementById("game-canvas");
}
display.resize = function() {
    display.canvas().width = window.innerWidth;
    display.canvas().height = window.innerHeight;
    display.canvas().style.width = window.innerWidth + "px";
    display.canvas().style.height = window.innerHeight + "px"; 
    display.table_width = window.innerWidth;
    display.table_height = window.innerHeight;
    display.square_width = display.table_width / display.x_squares;
    display.square_height = display.table_height / display.y_squares;
};
display.draw = function () {
    let ctx = display.canvas().getContext("2d");
    for (let i2 = 0; i2 <= display.y_squares; i2++) {
        for (let i1 = 0; i1 <= display.x_squares; i1++) {
            console.log(i1, i2);
            ctx.fillStyle = '#ffff00';
            ctx.fillRect(i1 * display.square_width, i2 * display.square_height, display.square_width, display.square_height); 
        }
    }
}
setTimeout(display.draw, 100);