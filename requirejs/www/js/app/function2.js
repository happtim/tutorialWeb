define(["./object"],function(object){
    
    return function(title){
        return title ? (window.title  = title) : object.color + object.size;
    }
});