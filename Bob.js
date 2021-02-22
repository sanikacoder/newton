class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':1,
          'friction':0,
          'density':7.8
      }
      this.body = Bodies.circle(x, y, 35, options);
     // this.radius = radius;
     
      
      World.add(world, this.body);

  

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
    
      strokeWeight(1) ;
      stroke("black");
      fill("purple");
      circle(0, 0, 35);
      pop();
    }
  }
  