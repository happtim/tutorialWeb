// For any third party dependencies, like jQuery, place them in the lib folder.

requirejs.config({
    
    //requirejs 默认加载所有库从www/js/lib加载
    baseUrl: 'js/lib',
    
    //路径的映射关系, 最终baseUrl+paths
    paths: {
        app: '../app'
    }
});

//app/main app路径将被映射为http://baseUrl+paths/main.js
requirejs(['app/main','jquery','app/object','app/function','app/dependencies','app/function2'],
    
    function(main,$,object,fun,dependencies,fun2){//这个函数将会被调用当所有依赖加载完成.
    console.log(main);
    console.log($);// 引用库
    console.log(object);//定义object
    console.log(fun);//定义函数
    console.log(dependencies);//定义带依赖的函数
    console.log(fun2('xxx'));
});


//使用define()用来定义模块
// 模块不同于普通的scriptfile,就是他被定义在一个scope中,这样就不会污染全局空间
//
