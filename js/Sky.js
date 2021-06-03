// 天空类
const skyDom=document.getElementsByClassName("sky")[0];
const skyStyles=getComputedStyle(skyDom);
const skyWidth=parseFloat(skyStyles.width);
const skyHeight=parseFloat(skyStyles.height) ;


class Sky extends Rect{
    constructor(){
        super(skyWidth,skyHeight,0,0,-50,0,skyDom)
    }
    reset(){
        if(this.left<=-this.width/2){
            this.left=0
        }
    }
}
