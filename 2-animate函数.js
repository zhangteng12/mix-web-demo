function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,null)[attr];
	}
}

function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		console.log(1);
		var isStop=true;  //标志位，有一个没到就不清除
		for(var attr in json){
			var now=0;
			if(attr=='opacity'){
				now=parseInt(getStyle(obj,attr)*100);
			}
			else{
				now=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr] - now)/6; 
   			speed=speed>0?Math.ceil(speed):Math.floor(speed);
   			var current=now + speed;
   			if(attr=='opacity'){
   				obj.style.opacity=current/100;
			}
   			else{
   				obj.style[attr]=current+ "px";
   			}
			if(json[attr] !== current){
				isStop=false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			if(callback){callback()};
		}
		
	},30)
}
