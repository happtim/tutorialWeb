/*
 * jQuery自定义全局函数插件
 * jQuery.extend(object)或$.extend(object)
 * * object - Javascript对象
 *   {
	    属性名 : 属性值,
		方法名 : function(){}
 *   }
 * $.方法名 = function(){}
 */
$.extend({
	minValue : function(a,b){
		return a - b ? a : b;
	},
	maxValue : function(a,b){
		return a -b ? b : a;
	}
});

$.getName = function(name){
	return name;
}