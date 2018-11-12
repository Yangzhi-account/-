//地图类，移动的物体（敌机类，我方战机类，子弹类）

let singlton = (function(){	
	class Map{
		constructor(obj){
			this.domObj = null;//地图的dom对象，是JavaScript对象对应的dom对象
			this.width = obj.width;
			this.height = obj.height;
			this.bgImg = obj.bgImg;	
			this.myPlanes = [];//我方战机数组
			this.enemyPlanes = [];//敌方战机数组
			this.score = null;//积分板。
			this.createUI();
		}
		
		createUI(){
			this.domObj  = document.createElement("div");
			this.domObj.style.cssText = "position:relative;overflow:hidden";
			//this.domObj.style.cssText = "position:relative";
			this.domObj.style.width = this.width+"px";
			this.domObj.style.height = this.height+"px";
			this.domObj.style.backgroundImage = "url("+this.bgImg+")";
			document.body.appendChild(this.domObj);
		}
	}

	let instance;
	
	return {
		getInstance:function(obj){
			if(instance==undefined){
				instance = new Map(obj);
			}else{
				for(let key in obj){
					instance[key]  = obj[key];	
				}
			}
			return instance;
		}
	}
	
})();

