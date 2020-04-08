var ball1;
var ball2;
function setup()
{
    createCanvas(400,400);
    ball1 = new Ball(200,200);
    ball2 = new Ball(300,200);
}
function draw()
{
    background(0);
    ball1.display();
    ball2.display();
    ball2.x = mouseX;
    ball2.y = mouseY;
    d= dist(ball1.x,ball1.y,ball2.x,ball2.y);
    if(d<ball1.r + ball2.r)
    {
        ball2.changeColor();
        ball1.changeColor();
    }
}