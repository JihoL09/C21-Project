class Ground{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var ground_options = {
            isStatic : true
        }
       
        this.prop = Bodies.rectangle(x,y,w,h,ground_options);
        World.add(world,this.prop);

    
    }
    display(){
        push();
        translate(this.prop.position.x,this.prop.position.y);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}