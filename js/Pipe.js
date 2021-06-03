const gameDom=document.getElementsByClassName("game")[0];
const gameWidth=gameDom.clientWidth;
class Pipe extends Rect{
    constructor(height,top,xSpeed,dom){
        super(52,height,gameWidth,top,xSpeed,0,dom)
    }
    reset(){
        if(this.left<-this.width){
            this.dom.remove();
            
        }
    }
}
function getRandomHeight(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
class PipePare{
    constructor(speed){
        this.spaceHeight=150;
        this.minHeight=80;
        this.maxHeight=landTop-this.spaceHeight-this.minHeight;
        const upHeight=getRandomHeight(this.minHeight,this.maxHeight);
        const downHeight=landTop-upHeight-this.spaceHeight;
        const upDom=document.createElement("div")
        upDom.className="pipe pipeDown";
        this.upPipe=new Pipe(upHeight,0,speed,upDom);
        const downDom=document.createElement("div");
        downDom.className="pipe pipeUp";
        this.downPipe=new Pipe(downHeight,landTop-downHeight,speed,downDom);
        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom)

    }
    get useless(){
        return this.upPipe.left<-this.upPipe.width
    }
    move(duration){
        this.upPipe.move(duration);
        this.downPipe.move(duration);

    }
}
class PipeProduce{
    constructor(speed){
        this.speed=speed;
        this.pairs=[];
        this.timer=null;
        this.tick=1500
    }
    startProduce(){
        if(this.timer){
            return
        }
        this.timer=setInterval(()=>{
            let pipepare=new PipePare(this.speed)
            this.pairs.push(pipepare);
            for (let i = 0; i < this.pairs.length; i++) {
                let pair=this.pairs[i];
                if(pair.useless){
                    this.pairs.splice(i,1);
                    i--
                }
                
            }
            console.log( this.pairs)
        },this.tick)
    }
    stopProduce(){
        clearInterval(this.timer);
        this.timer=null
    }

}
