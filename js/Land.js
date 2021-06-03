// 大地类
const landDom=document.getElementsByClassName("land")[0];
const landStyles=getComputedStyle(landDom);
const landWidth=parseFloat(landStyles.width);
const landHeight=parseFloat(landStyles.height) ;
const landTop=parseFloat(landStyles.top)
class Land extends Rect{
    constructor(speed){
        super(landWidth,landHeight,0,landTop,speed,0,landDom)
    }
    reset(){
        if(this.left<=-this.width/2){
            this.left=0
        }
    }
}
