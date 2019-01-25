/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    if(hero.left < window.innerWidth - hero.size){
      this.left += 100;
      setTimeout(this.moveRight,50); 
    }  
    console.log('ok: ' + this.left);
    //break;
  }
  this.movebottom = function(){
    if(hero.left >= window.innerWidth - hero.size && this.top < 500){
      this.top +=50;
      console.log('ok: ' + this.top);
    }
  }
  this.moveLeft = function(){
    if(hero.left >= window.innerWidth - hero.size && this.top >=500){
      this.left -=100;
      console.log('ok: ' + this.left);
    }
  }
}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
    hero.moveRight();
    hero.movebottom();
    hero.moveLeft();

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();