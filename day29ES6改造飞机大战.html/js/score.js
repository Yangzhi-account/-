
function Score(obj){
	this.map = obj.map;
	this.map.score = this;//把积分板赋给所在的地图
	this.domObj = null;
	this.width = obj.width;
	this.height = obj.height;
	//this.border = obj.border;
	this.bgColor = obj.bgColor;
	this.fontSize = obj.fontSize;
	this.color = obj.color;
	this.createUI();
	this.changeScore();
}

Score.prototype.createUI = function(){
	this.domObj = document.createElement("div");
	this.domObj.style.cssText = "position:absolute";
	this.domObj.style.left = "0px";
	this.domObj.style.top= "0px";
	this.domObj.style.width = this.width+"px";
	this.domObj.style.height = this.height+"px";
	this.domObj.style.border = "1px solid black";
	this.domObj.style.backgroundColor = this.bgColor;
	this.domObj.style.fontSize = this.fontSize;
	//this.domObj.innerHTML =  ;
	this.domObj.style.color = this.color;
	this.map.domObj.appendChild(this.domObj);
}

Score.prototype.changeScore = function(){
	let str = "";
	let myPlanes = this.map.myPlanes;
	//循环我方战机数组；
	for(let i in myPlanes){
		str+=myPlanes[i].name+"积分："+myPlanes[i].score+"<br/>";
	}
	this.domObj.innerHTML = str;
}

