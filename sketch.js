var name1,button,gs=0;
var score=0;
var n,back1,back,s1,s2;
var bg
function preload(){
bg=loadImage("images/bg.jpg")
sewer=loadImage("images/sewer.jpg")
ocean=loadImage("images/ocean.jpg")
plants=loadImage("images/plants.jpg")
shower=loadImage("images/shower.jpg")
tap=loadImage("images/tap.jpg")
tapclose=loadImage("images/closetap2.jpg")
brushing=loadImage("images/brushing1.jpg")
bucket=loadImage("images/bucket.jpg")


}


function setup(){

    createCanvas(displayWidth-7,displayHeight-145)
    
    b=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    b.addImage("b",bg)
    b.scale=2.1
    b.visible=false;

    back1=createSprite(displayWidth/2+280,190,200,140)
    back1.shapeColor="lightgreen"
    back1.visible=false

    name1 = createInput("")
    name1.position(displayWidth/2+200,180)
    
    name1.hide()

    button = createButton("Play")
    button.position(displayWidth/2+260,210)
    button.hide()

    button1 = createButton("Replay")
    button1.position(displayWidth/2-60,680)
    button1.hide()

    d2 = loadAnimation("images/d1.png","images/d2.png")
    
    drop2 = createSprite(displayWidth/2,600,30,30)
    drop2.addAnimation("d2",d2)
    drop2.scale = 0.25;
    drop2.visible=false;
    //drop2.debug=true;
    drop2.setCollider("circle",0,0,230);

}

function draw(){

        background(0);
        drawSprites();
        n = name1.value()
        textFont('Georgia');
        textSize(30);
        fill("blue");
        
        if(gs!=0){
            back=createSprite(displayWidth/2,100,displayWidth,50)
            back.shapeColor="lightblue"
            

            text("SCORE  :  ",displayWidth/2-120,50);
            fill("RED");
            text(score,displayWidth/2+30,50);

            fill("green")
            text("Welcome "+ n,10,40)
        
        }

        fill("blue")
        textSize(25)
        if(gs!==4 && gs!==0){
        text("This is Splash! He is lost! Take him to his family of water bodies,",20,100)
        text("by making correct decisions.  Beware! A bad decision can cost you!", 20,125)}
        

        handler()

       if(gs===0.5){
        s1.addImage("s1",tap)
        s1.scale=0.1
        s2.addImage("s2",tapclose)
        s2.scale=1.7
       }
       else if(gs===1){
        s1.addImage("s1",brushing)
        s1.scale=0.65
        s2.addImage("s2",plants)
        s2.scale=0.257
       }
       else if(gs===1.5){
        s1.addImage("s1",elec)
        s1.scale=1.3
        s2.addImage("s2",tap)
        s2.scale=1.8
        
       }
       else if(gs===2){
        s1.addImage("s1",sea)
        s1.scale=0.09
        s2.addImage("s2",plants)
        s2.scale=0.06
       }
       else if(gs===2.5){
        s1.addImage("s1",tap)
        s1.scale=0.09
        s2.addImage("s2",ocean)
        s2.scale=0.06
       }
       else if(gs===3){
        s1.addImage("s1",sewer)
        s1.scale=0.09
        s2.addImage("s2",ocean)
        s2.scale=0.06
       }
       else if(gs===3.5){
        s1.addImage("s1",brushing1)
        s1.scale=0.09
        s2.addImage("s2",ocean)
        s2.scale=0.06
       }
       else if(gs===0){
        
        
       }
      
        
        

}

