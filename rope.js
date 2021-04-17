class rope{
    constructor(bodyA, bodyB, offsetx,offsety){
        this.offsetX=offsetx
        this.offsetY=offsety
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           pointB:{x:offsetx,y:offsety}
        }
        
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

   

    display(){
        
            var pA = this.rope.bodyA.position;
            var pB = this.rope.bodyB.position;
            strokeWeight(4);
            stroke(48,22,8);
            var pointAx=pA.x
            var pointAy=pA.y
            var pointBx=pB.x+this.offsetX
            var pointBy=pB.y+this.offsetY
            
            
                line(pointAx, pointAy, pointBx, pointBy);
               
            }

            
        }
    
    
