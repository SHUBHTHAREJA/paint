var mouseevent="empty";
var last_position_of_x;
var last_position_of_y;
var canvas =document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var color="black";
var width=1;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown (e){
    mouseevent="mouseDown";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
  var current_position_of_x=e.clientX-canvas.offsetLeft;
  var current_position_of_y=e.clientY-canvas.offsetTop;
  if (mouseevent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    console.log("last_position_of_x_and_y=");
    console.log( last_position_of_x, last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("current_position_of_x_and_y=");
    console.log(current_position_of_x,current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y)
    ctx.stroke();
  }
  last_position_of_x=current_position_of_x;
  last_position_of_y=current_position_of_y;
}
canvas.addEventListener("mouseup",mymouseup);

function mymouseup (e){
mouseevent="mouseUp";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(){
    mouseevent="mouseLeave";  
}