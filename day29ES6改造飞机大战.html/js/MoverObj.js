
class MoverObj{
	//构造函数
	constructor(obj){
		let defaultObj = {
			map:null,//所属的地图对象（JavaScript对象）
			width : 0,
			height : 0,
			left : 0,
			top : 0,
			bgImg :"",
			directionLeft : 0,
			directionTop : 0,
			incLeft : 0,
			incTop : 0,
			timeSpace : 16,
			domObj : null,//DOM对象	
			myTimer : null
		};
		//把传来的数据赋给defaultObj;
		for(let key in defaultObj){
			if(obj[key]){
				defaultObj[key] = obj[key]	
			}
		}
		
		for(let key in defaultObj){
			this[key] = defaultObj[key];
		}		
		this.createUI();
	}
	
	createUI(){
		this.domObj  = document.createElement("div");
		this.domObj.style.cssText = "position:absolute";
		this.domObj.style.width = this.width+"px";
		this.domObj.style.height = this.height+"px";
		this.domObj.style.left = this.left+"px";
		this.domObj.style.top = this.top+"px";
		this.domObj.style.backgroundImage = "url("+this.bgImg+")";
		this.domObj.style.backgroundSize=this.width+"px "+this.height+"px";
		this.domObj.setAttribute("ord",this.ord);	
		this.map.domObj.appendChild(this.domObj);
	}
	
	go(){
		this.myTimer = setInterval(()=>{		
			if(isPause){
				return;
			}
			//一、移动
			this.left = this.left+this.directionLeft*this.incLeft;
			this.top = this.top+this.directionTop*this.incTop;
			
			//此处由于不同的子类的边界处理不一样，所以，不能在父类里写（因为，父类写的是公共的代码）
			this.judgeEdge&&this.judgeEdge();//调用子类特有处理边界的函数
			
			this.domObj.style.left = this.left +"px";
			this.domObj.style.top = this.top +"px";
		
			//2、移动的同时要完成的事情。
			this.subDo&&this.subDo();
	
		},this.timeSpace);
	}	
}