function handler(){
    
  if (keyDown(LEFT_ARROW)){
      drop2.x -= 50;
  }
  if (keyDown(RIGHT_ARROW)){
      drop2.x += 50;
  }
  if (keyDown(UP_ARROW)){
      drop2.y -= 50;
  }
  if (keyDown(DOWN_ARROW)){
      drop2.y += 50;
  }
  
  
  if(gs===0){
      back1.visible=true
      b.visible=true;
      textFont('Georgia');
      textSize(20);
      text("Enter your name",displayWidth/2+205,170);
      textSize(50);
      fill("blue");
      text("SAVE WATER Q-GAME",displayWidth/2,50);
      //replay
      button1.hide()
      button.show()
      name1.show()

      button.mousePressed(()=>{
          button.hide()
          name1.hide()
          gs=0.5
      })
  }
   
  if(gs===0.5){
      b.visible=false;
      back1.visible=false
      s1=createSprite(500,290,300,300);
      s1.shapeColor="yellow";
      s2=createSprite(1000,290,300,300);
      s2.shapeColor="lightyellow";
     
      drop2.visible=true
      
      
      if (drop2.isTouching(s1)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score+=10
          gs=1  
          s1.lifetime=0
          s2.lifetime=0
      }
      else if(drop2.isTouching(s2)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score-=10
          gs=1 
          s1.lifetime=0
          s2.lifetime=0
         
      }
                  
  }

  if(gs==1){

      s1=createSprite(500,290,300,300);
      s1.shapeColor="PINK";
      s2=createSprite(1000,290,300,300);
      s2.shapeColor="purple";
      

      drop2.visible=true
      
      
      if (drop2.isTouching(s1)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score+=10
          gs=1.5 
          s1.lifetime=0
          s2.lifetime=0

      }
      else if(drop2.isTouching(s2)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score-=10
          gs=1.5 
          s1.lifetime=0
          s2.lifetime=0
      }
  }
      if(gs==1.5){

      s1=createSprite(500,290,300,300);
      s1.shapeColor="yellow";
      s2=createSprite(1000,290,300,300);
      s2.shapeColor="brown";

      drop2.visible=true
      
      
      if (drop2.isTouching(s1)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score+=10
          gs=2 
          s1.lifetime=0
          s2.lifetime=0 
      }
      else if(drop2.isTouching(s2)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score-=10
          gs=2
          s1.lifetime=0
          s2.lifetime=0
      }
  }
      if(gs==2){

          s1=createSprite(500,290,300,300);
          s1.shapeColor="green";
          s2=createSprite(1000,290,300,300);
          s2.shapeColor="lightgreen";

          drop2.visible=true
          
          
          if (drop2.isTouching(s1)){
              drop2.x=displayWidth/2;
              drop2.y=600;
              score+=10
              gs=2.5
              s1.lifetime=0
              s2.lifetime=0
          }
          else if(drop2.isTouching(s2)){
              drop2.x=displayWidth/2;
              drop2.y=600;
              score-=10
              gs=2.5
              s1.lifetime=0
              s2.lifetime=0
          }  
      }

          if(gs==2.5){

              s1=createSprite(500,290,300,300);
              s1.shapeColor="yellow";
              s2=createSprite(1000,290,300,300);
              s2.shapeColor="orange";
  
              drop2.visible=true
              
              
              if (drop2.isTouching(s1)){
                  drop2.x=displayWidth/2;
                  drop2.y=600;
                  score+=10
                  gs=3
                  s1.lifetime=0
                  s2.lifetime=0
              }
              else if(drop2.isTouching(s2)){
                  drop2.x=displayWidth/2;
                  drop2.y=600;
                  score-=10
                  gs=3
                  s1.lifetime=0
                  s2.lifetime=0
              }    
          } 
          if(gs==3){

          s1=createSprite(500,290,300,300);
          s1.shapeColor="green";
          s2=createSprite(1000,290,300,300);
          s2.shapeColor="lightgreen";

          drop2.visible=true
          
          
          if (drop2.isTouching(s1)){
              drop2.x=displayWidth/2;
              drop2.y=600;
              score+=10
              gs=3.5
              s1.lifetime=0
              s2.lifetime=0
          }
          else if(drop2.isTouching(s2)){
              drop2.x=displayWidth/2;
              drop2.y=600;
              score-=10
              gs=3.5
              s1.lifetime=0
              s2.lifetime=0
          } 
      }   
          if(gs==3.5){

              s1=createSprite(500,290,300,300);
              s1.shapeColor="red";
              s2=createSprite(1000,290,300,300);
              s2.shapeColor="pink";
  
              drop2.visible=true
              
              
              if (drop2.isTouching(s1)){
                  drop2.x=displayWidth/2;
                  drop2.y=600;
                  score+=10
                  gs=4
                  s1.lifetime=0
                  s2.lifetime=0
                  
              }
              else if(drop2.isTouching(s2)){
                  drop2.x=displayWidth/2;
                  drop2.y=600;
                  score-=10
                  s1.lifetime=0
                  s2.lifetime=0
                  gs=4
                  
              }    
                                

  }

          if(gs===4){
            
            s1.lifetime=0
            s2.lifetime=0
              button1.show()

              textFont('Georgia');
              textSize(30);
              
              var back2=createSprite(displayWidth/2,100,displayWidth,50)
              back2.shapeColor="black"

              fill("yellow");
             
              if(score===10)
              text("Ohno! YOu need to make better decisions", 20,110)

              if(score===20)
              text("Work Hard! Make some better choices ", 20,110)

              if(score===30)
              text("Not bad!", 20,110)

              if(score===40)
              text("Good! Although make better choices", 20,110)

              if(score===50)
              text("Very Good!", 20,110)

              if(score===60)
              text("Excellent! Just a small change and you'll be good", 20,110)

              if(score===70)
              text("Tremendous! The future is in good hands", 20,110)

              
              if(score<=0)
              text("You need to work very hard to save water. Remember the future is in your hands.", 20,110)

              button1.mousePressed(()=>{
                button1.hide()
                back2.visible=false
                drop2.visible=false
                gs=0
                score=0
                drop2.x=displayWidth/2;
                drop2.y=600;
                s1.lifetime=0
                s2.lifetime=0
                

            })

          }

  
}