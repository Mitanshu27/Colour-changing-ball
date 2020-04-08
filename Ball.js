class Ball
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.r = 50;
        this.col = color(255);
    }
    display()
    {
        ellipseMode(CENTER);
        fill(this.col);
        ellipse(this.x,this.y,100,100);
    }
    changeColor()
    {
        this.col = color(random(255),random(255),random(255));
    }
}