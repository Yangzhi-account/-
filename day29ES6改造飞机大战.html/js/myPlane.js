
class MyPlane extends MoverObj{
	//构造函数
	constructor(obj){
		super(obj);//调用父类的构造函数
		this.bullets = [];//子弹数组，我方战机特有
		this.score = 0;
		this.name = obj.name;//玩家的名字		
		let defaultObj ={
			leftKey:37,
			topKey:38,
			rightKey:39,
			downKey:40
		};
		// 法一：	
		//for(let key in defaultObj){
		//		this[key] = obj[key] || defaultObj[key];
		//	}	
		//法二：
		for(let key in defaultObj){
			obj[key]&& (defaultObj[key]=obj[key]);
		}
		
		for(let key in defaultObj){
			this[key] = defaultObj[key];
		}
	}
	addEvent(){
		document.body.addEventListener("keydown",(event)=>{
			if(isPause){
				return;
			}
			let evt = event || window.event;
			//方向的判断
			switch(evt.keyCode){
				case 
					this.leftKey:this.directionLeft=-1;
					this.left = this.left+this.directionLeft*this.incLeft;
			
				break;
				case 
					this.rightKey:this.directionLeft=1;
					this.left = this.left+this.directionLeft*this.incLeft;
					break;
				case this.topKey:
					this.directionTop=-1;
					this.top = this.top+this.directionTop*this.incTop;
					break;
				case this.downKey:
					this.directionTop=1;
					this.top = this.top+this.directionTop*this.incTop;
					break;
			}		
			
			if(this.left<=0){
				this.left=0;
			}else if(this.left>=this.map.width-this.width){
				this.left=this.map.width-this.width;
			}
			
			if(this.top<=0){
				this.top=0;
			}else if(this.top>=this.map.height-this.height){
				this.top=this.map.height-this.height;
			}
			
			this.domObj.style.left = this.left+"px";
			this.domObj.style.top = this.top+"px";	
		},false);
		
	}
		
	//射击（发射子弹）
	shoot(){
		let ord = 0;
		//启动定时器创建子弹
		setInterval(()=>{
			if(isPause){
				return;
			}
			ord++;
			let b = new Bullet({
				map:this.map,
				myPlane:this,
				width : 6,
				height : 14,
				left : this.left+(this.width-6)/2,
				top : this.top-14,
				bgImg : "img/bullet1.png",
				directionTop : -1,
				incTop : 21,
				timeSpace : 200,
				ord:ord
			});
			b.go();
			this.bullets.push(b);
		},200);
	}
	
	addScore(inc){
		this.score+=inc;
		this.map.score.changeScore();
	}
	
}

