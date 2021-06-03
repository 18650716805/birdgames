// 矩形类
// 宽高、位置、速度、dom元素
// width\height、left\top、xSpeed\ySpeed、 dom
class Rect {
    constructor(width,height,left,top,xSpeed,ySpeed,dom){
        this.width=width;
        this.height=height;
        this.left=left;
        this.top=top;
        this.xSpeed=xSpeed;
        this.ySpeed=ySpeed;
        this.dom=dom;
    }
    render(){
        this.dom.style.width=this.width+"px";
        this.dom.style.height=this.height+"px";
        this.dom.style.left=this.left+"px";
        this.dom.style.top=this.top+"px";
    }
    move(duration){
        const disX=this.xSpeed*duration;
        const disY=this.ySpeed*duration;
        this.left+=disX;
        this.top+=disY;
        if(this.reset){
            this.reset(duration)
        }
        this.render()
    }
}