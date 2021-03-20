canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");


color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(190,60,40,0,2*Math.PI);
ctx.stroke();


color1="black";

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=4;
ctx.arc(300,60,40,0,2*Math.PI);
ctx.stroke();


color2="red";

ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=4;
ctx.arc(410,60,40,0,2*Math.PI);
ctx.stroke();

color3="yellow";

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=4;
ctx.arc(250,100,40,0,2*Math.PI);
ctx.stroke();

color4="green";

ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=4;
ctx.arc(360,100,40,0,2*Math.PI);
ctx.stroke();