/*
 * tquery version 0.2
 * * 基于0.1版本
 *   * 增加相关对象 - 该对象是数组对象
 *   * 工厂函数 - 返回tquery对象
 */
window.$ = function(selector){
	// 创建Tquery对象
	var _tquery = new Tquery();
	// ID选择器  - #ID
	if(selector.substr(0,1) == "#"){
		var myId = selector.substr(1);
		var ele = document.getElementById(myId);
		// 将获取的元素添加到数组中
		_tquery.push(ele);
	}
	// 返回tquery对象
	return _tquery;
}
/*
 * 定义tquery对象
 * * 直接量方式 - {属性:属性值,方法:function(){}}
 * * 继承方式 - new Object()
 * * 使用构造器
 *
 * 使用构造器(空)方式定义对象
 */
function Tquery(){}
// 构造器具有原型属性
Tquery.prototype = new Array();
// 增加get(index)方法 - 返回DOM对象
Tquery.prototype.get = function(index){
	return this[index];
}

/*
get: function( num ) {
	return num != null ?

		// Return just the one element from the set
		( num < 0 ? this[ num + this.length ] : this[ num ] ) :

		// Return all the elements in a clean array
		slice.call( this );
}
*/