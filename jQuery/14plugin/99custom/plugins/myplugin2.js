/*
 * 定义jQuery对象方法插件
 * * $.fn.extend(object)
 * * $.fn.方法名 = function(){}
 */
$.fn.extend({
	test : function(){
		alert($("button").text());
	}
});

$.fn.getJob = function(job){
	return job;
}

// 改变背景颜色的方法
$.fn.changeBack = function(color){
	// this指代jQuery对象
	//或者jquery数组对象
	//this.css("background",color);
	$.each(this,function(){
		$(this).css("background",color);
	});
}