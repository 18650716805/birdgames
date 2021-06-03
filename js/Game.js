class Game {
    constructor() {
        this.sky = new Sky();
        this.land = new Land(-100);
        this.bird = new Bird();
        this.pipeProduce = new PipeProduce(-100);
        this.tick = 16;
        this.timer = null;
        this.gameStatus = false
    }
    isGameOver() {
        if(this.bird.top===this.bird.maxY){
            return true;
        }
        for(let i=0;i<this.pipeProduce.pairs.length;i++){
            let pairs=this.pipeProduce.pairs[i];
            if(this.isHit(this.bird,pairs.upPipe)||this.isHit(this.bird,pairs.downPipe)){
                return true;
            }
        }
        return false
    }
    isHit(rect1,rect2){
        const centerX1=rect1.width/2+rect1.left;
        const centerY1=rect1.height/2+rect1.top;
        const centerX2=rect2.width/2+rect2.left;
        const centerY2=rect2.height/2+rect2.top;
        const disX=Math.abs(centerX1-centerX2);
        const disY=Math.abs(centerY1-centerY2);
        if(disX<(rect1.width+rect2.width)/2&&disY<(rect1.height+rect2.height)/2){
            return true
        }
        return false
    }
    startGame() {
        if (this.timer) {
            return
        }
        if (this.gameStatus) {
            window.location.reload();
        }
        this.pipeProduce.startProduce()
        this.bird.startSwing()

        this.timer = setInterval(() => {
            this.sky.move(this.tick / 1000);
            this.land.move(this.tick / 1000);
            this.bird.move(this.tick / 1000);
            this.pipeProduce.pairs.forEach(pair => {
                pair.move(this.tick / 1000)
            })
            if(this.isGameOver()){
                this.stopGame();
                this.gameStatus=true
            }
        }, this.tick)

    }
    stopGame() {
        clearInterval(this.timer);
        this.timer = null;
        this.bird.stopSwing();
        this.pipeProduce.stopProduce()
    }
    regEvent() {
        window.onkeydown = (e) => {
            if (e.key == "Enter") {
                if (this.timer) {
                    this.stopGame()
                } else {
                    this.startGame()
                }
            }
            if (e.key == " ") {
                this.bird.jump()

            }
        }
    }
}
let game = new Game();
game.regEvent()