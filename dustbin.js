class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
        
		this.dustbinWidth=200;
		this.dustbinHeight=220;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png")

        this.bottomBody=Bodies.rectangle(this.x, this.y, 200, 20, {isStatic:true})

		this.leftWallBody=Bodies.rectangle(this.x-100, this.y-this.dustbinHeight/2, 20, 220, {isStatic:true})
		
		this.rightWallBody=Bodies.rectangle(this.x+100, this.y-this.dustbinHeight/2, 20, 220, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			
/*
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
*/
			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,200, 220)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}