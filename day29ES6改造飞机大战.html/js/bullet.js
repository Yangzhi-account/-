class Bullet extends MoverObj{	
	//子弹
	constructor(obj){
		super(obj);
		this.myPlane = obj.myPlane;//子弹所属的战机
	}
		
	judgeEdge(){
		if(this.top<=-this.height){
			this.die();
		}
	}
	
	//子弹消失
	die(){
		//删除（停定时器，删数组，删外观）
		window.clearInterval(this.myTimer);
		//1)、删数组（在我方战机的子弹数组里删除）
		let index = this.myPlane.bullets.indexOf(this);
		this.myPlane.bullets.splice(index,1);
		
		//2)、删外观
		this.domObj.parentNode&&this.domObj.parentNode.removeChild(this.domObj);
	
	}
	
	subDo(){
		this.isHited();
	}
	
	//是否击中敌机
	isHited(){
		
		//循环所有敌机
		let enemyPlanes = this.map.enemyPlanes;
		for(let i in enemyPlanes){
			//子弹的位置
			let bLeft = this.left;
			let bRight = this.left+this.width;
			let bTop = this.top;
			let bBottom = this.top+this.height;
			//敌机的位置
			let eLeft = enemyPlanes[i].left;
			let eRight = enemyPlanes[i].left+enemyPlanes[i].width;
			let eTop = enemyPlanes[i].top;
			let eBottom= enemyPlanes[i].top+enemyPlanes[i].height;
			
			//横向：子弹右边大于等于敌机的左边，子弹左边小于等于敌机的右边
			//纵向：子弹的上边小于等于敌机下边，子弹下边大于等于敌机的上边
			if((bRight>=eLeft && bLeft<=eRight)
				&&
				(bTop<=eBottom && bBottom>=eTop)
				&&
				(eTop>=0)
			){
				//子弹消失
				this.die();
				//敌机消失
				enemyPlanes[i].boom();
				//我方战机的积分增加
				this.myPlane.addScore(enemyPlanes[i].level);
				break;
			}		
		}
	}
}