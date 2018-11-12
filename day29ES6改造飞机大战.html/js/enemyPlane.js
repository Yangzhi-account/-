
class EnemyPlane extends MoverObj{	
	constructor(obj){
		super(obj);
		this.bullets=[];//子弹数组	
		this.boomImgs = obj.boomImgs;
		this.level = obj.level;//敌机的等级（就是击中该敌机可以赚取多少分）
	}
	
	//方法：
	//处理边界
	judgeEdge(){
		if(this.top>=this.map.height){
			//删除（停定时器，删数组，删外观）
			window.clearInterval(this.myTimer);
			//1)、删数组（敌机数组里删除）
			let index = this.map.enemyPlanes.indexOf(this);
			this.map.enemyPlanes.splice(index,1);
			
			//2)、删外观
			this.domObj.parentNode&&this.domObj.parentNode.removeChild(this.domObj);		
		}
	}
	
	//敌机爆炸
	boom(){
		//删除（停定时器，删数组，删外观）
		window.clearInterval(this.myTimer);
		//1)、删数组（敌机数组里删除）
		let index = this.map.enemyPlanes.indexOf(this);
		this.map.enemyPlanes.splice(index,1);
		
		//2)、删外观
		index = -1;
		let boomTimer = setInterval(()=>{
			//改变下标
			index++;
			if(index>=this.boomImgs.length){
				window.clearInterval(boomTimer);
				this.domObj.parentNode&&this.domObj.parentNode.removeChild(this.domObj);
			}
			//根据下标，改变敌机的背景图片。
			this.domObj.style.backgroundImage = "url("+this.boomImgs[index]+")";
		},100);
	}
}