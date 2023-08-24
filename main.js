var mouseEvent = "empty";
var lastX = 0;
var lastY = 0;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var color = "black";
var width = 1;
canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
    width = document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    currentX = e.clientX-canvas.offsetLeft;
    currentY = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastX,lastY);
        ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(currentX,currentY,40,0,2*Math.PI);
    ctx.stroke();
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

