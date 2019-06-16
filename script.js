var canvas;
  var ctx;
  var game;
  var x=300 ;
  var y = 400;
  var theeta = 0;
  var X = 200;
  var Y = 400;
  var phi = Math.PI;
  var i;
  var leaderBoard =[];
  var count =0;
  var speed = 0;
  var s = false;
  var score =0;
  var pause = true;
  var hy = 1000;
  var hy1 = 1040;
  var rat = 2000;
  var timer = 0;
  var radius=50;
  var horlicks=true;
  var horlickscount=0;
  var horlicks1=false;
  var horlickscount1=0;
  
  var timer1=0;
  var spinspeed = 20;
  var horlickspic = new Image();
  horlickspic.src = 'horlickspic.jpg';
  var horlickspic1 = new Image();
  horlickspic1.src = 'horlickspic1.jpg';
  
 
 class Obstacle{
     constructor(m,position,width,height){
         this.m = m;
         this.position = position;
         this.width = width;
         this.height = height;

     }
 }
 var block=[];
 block[0] = new Obstacle(250,0,20,50);
 block[1] = new Obstacle(260,-300,50,30);
 block[2] = new Obstacle(190,-600,50,20);
 block[3] = new Obstacle(160,-900,30,10);
 block[4] = new Obstacle(290,-900,30,10);

 function handleMouseClick(evt){
    if(s){
           var temp =0;
      for(i=0;i<4;i++){
        block[i].position = temp;
        temp = temp - 300;
      }
      block[4] = -900;
  
        
score = 0; 
timer = 0; 
timer1 =0;  
         s = false; 
  }
  }
 
  window.onload = function(){
window.addEventListener('keydown',pressKeyArrows,true);
window.addEventListener('mousedown',handleMouseClick,true);
window.addEventListener('keydown',keyPress,true);
 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
game = setInterval(blocks,50);

 
  }
  function keyPress(e){
    if (e.keyCode == 32){
      pauseGame();
    }
    }
    function pauseGame(){
        if(pause){
          game = clearInterval(game);
          ctx.fillStyle = 'white';
          ctx.font = "50 px Arial";
          ctx.fillText("Waiting :|",200,200);
          pause = false;
        }
        else if(!pause){
          game = setInterval(blocks,50);
          pause = true;
        }
    }

  
  function pressKeyArrows(event){
    switch(event.keyCode)
    {
      case 39:
      theeta = theeta +Math.PI/spinspeed;
  x = (radius* Math.cos(theeta)) + 250;
  y = (radius* Math.sin(theeta)) + 400;
  phi = phi + Math.PI/spinspeed;
  X = (radius* Math.cos(phi)) + 250;
   Y = (radius* Math.sin(phi)) + 400;
  break;

  case 37:
  theeta = theeta - Math.PI/spinspeed;
  x = (radius* Math.cos(theeta)) + 250;
  y = (radius* Math.sin(theeta)) + 400;
  phi = phi - Math.PI/spinspeed;
  X = (radius* Math.cos(phi)) + 250;
   Y = (radius* Math.sin(phi)) + 400;
  break;

    }
  }

function blocks(){
  timer += 1;
  timer1 += 1;
  if(s){
    ctx.fillStyle='white';
    ctx.font= '20px Arial';
     
    ctx.fillText("We are done:(",100,100);
    ctx.fillText("Click to Start again :)",70,130);
    ctx.fillStyle='pink';
    ctx.font= '20px verdona';
    
    ctx.fillText("Your Score" + score , 20 ,200);
    ctx.fillStyle='Red';
    ctx.font= '20px verdona';
    ctx.fillText("Leader Board", 20,220);
    for(i=0;i<leaderBoard.length;i++){
          ctx.fillStyle='yellow';
          ctx.font ='20px verdona';
          ctx.fillText((i+1) +")" + " "+ leaderBoard[i] , 35 , 260+ 30*i);
        
      }
    
    return;
    
  }
 
  if(timer%1000 ==0){
    
    hy=0; 
  }
  if(hy< 740){
    
  hy+=10;
  }
  if(timer1%700 ==0){
    
    hy1=0; 
  }
  if(hy1< 740){
    
  hy1+=10;
  }
 
 

  for(i=0;i<5;i++){
    if(block[i].position>480){
      score+=10;
      block[i].position = -300;
      block[i].m = Math.random()*250 + 120; 
      block[i].height = Math.random()*40 + 10;
    block[i].width = Math.random()*40 + 20;
    }
  }
    speed = speed + 0.01;
    for(i=0;i<5;i++){
      block[i].position = block[i].position+ 6 + speed;
    }
    if(horlicks) {
      radius = 50;
    
   for(i=0;i<5;i++){
     if( ((block[i].m < x)&&(x<(block[i].m + block[i].width))) &&((block[i].position<y)&&(y<(block[i].position+block[i].height)))||((block[i].m< X)&&(X<(block[i].m+block[i].width))) &&((block[i].position<Y)&&(Y<(block[i].position+block[i].height)))    ){
     s = true;
     count+=1;
     
     leaderBoard.push(score);
       
      leaderBoard.sort(function(a, b){return b - a});
        
     
   }
    }
    }
    else{
     radius = 80;
     horlickscount+=1
      
      if(horlickscount>100){
        horlicks=true;
        horlickscount=0;
      }
        

    }
    if(horlicks1){
     spinspeed=5;
      horlickscount1+=1;
      if(horlickscount1>100){
        horlicks1=false;
        horlickscount1=0;
        spinspeed=20;

      }
    }

   if  ((220 < x)&&(x<270) &&((hy<y)&&(y<(hy+30)))) {
     horlicks = false;
   }
   if ( ((220 < x)&&(x<300) &&((hy1<y)&&(y<(hy1+30)))) || ((220 < x)&&(x<300) &&((hy1<y)&&(y<(hy1+30)))) ) {
    horlicks1 = true;
  }
    
    

      
   drawAll();
   
}
  
 function drawAll(){
  
  ctx.fillStyle='black';
  ctx.fillRect(0,0,canvas.width,canvas.height);
 
  ctx.fillStyle='gray';
  ctx.beginPath();
  ctx.arc(250,400,radius,0,2*Math.PI,true);
  ctx.stroke();
  ctx.fillStyle='black';
  ctx.fillRect(220,hy,50,30);
  ctx.drawImage(horlickspic,250,hy,50,30);
 
  ctx.fillStyle='black';
  ctx.fillRect(250,hy1,50,30);
  ctx.drawImage(horlickspic1,250,hy1,50,30)
  
  

  ctx.beginPath();
  ctx.fillStyle = 'blue';
  ctx.arc(x ,y,5,0,2*Math.PI,false);
  ctx.fill();
  
  for(i=0;i<5;i++){
  ctx.fillStyle = 'white';
  ctx.fillRect(block[i].m ,block[i].position,block[i].width,block[i].height);
  
  }
  

  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc( X,Y,5,0,2*Math.PI,false);
  ctx.fill();
  ctx.fillStyle ='red';
  ctx.font = "20px Arial";
  ctx.fillText("Closeness Meter :P",250,50);
  ctx.fillText(score,450,50);
  for(i=0;i<leaderBoard.length;i++){
    localStorage.setItem((i+1), leaderBoard[i]);
   // console.log(localStorage.getItem((i+1)));
  }

 }
  