//发布订阅模式的代码
var observer = {
	//订阅（订阅功能）
	addSubscriber:function(callback){
		this.subscribers.push(callback);//
	},
	
	//退订(功能)
	removeSubscriber:function(callback){
		let index = this.subscribers.indexOf(callback);
		this.splice(index,1);
	},
	
	//发布
	publish:function(what){
		for(let i in this.subscribers){
			if(typeof this.subscribers[i]==='function'){
				this.subscribers[i](what);
			}
		}
	},
	
	//让某个对象具备发布订阅功能
	make:function(obj){
		for(let key in this){
			obj[key] = this[key];
		}
		obj.subscribers=[];
	}
}