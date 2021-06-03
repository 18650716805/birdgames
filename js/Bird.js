// 鸟类
const birdDom=document.getElementsByClassName("bird")[0];
const birdStyles=getComputedStyle(birdDom);
const birdWidth=parseFloat(birdStyles.width);
const birdHeight=parseFloat(birdStyles.height) ;
const birdLeft=parseFloat(birdStyles.left);
const birdTop=parseFloat(birdStyles.top) ;

class Bird extends Rect{
    constructor(){
        super(birdWidth,birdHeight,birdLeft,birdTop,0,0,birdDom)
        this.g=1000;
        this.maxY=skyHeight-landHeight-this.height;
        this.swingStatus=1;
        this.timer=null;
    }
    startSwing(){
        this.timer=setInterval(()=>{
            this.swingStatus++
            if(this.swingStatus>=4){
                this.swingStatus=1
            }
            this.dom.className=`bird swing${this.swingStatus%3+1}`
        },50)
      
    }
    stopSwing(){
        clearInterval(this.timer);
        this.timer=null;
    }
    reset(duration){
        this.ySpeed+=this.g*duration;
        if(this.top<0){
            this.top=0
        }else if(this.top>this.maxY){
            this.top=this.maxY
            this.stopSwing()
        }
    }
    jump(){
        this.ySpeed=-450
    }
}
