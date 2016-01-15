
function SwitchMap(){
	this.__cases = new Map();
	this.__default = null;
}

SwitchMap.prototype.add = function(key, callback){
	this.__cases.set(key, callback);
}

SwitchMap.prototype.addDefault = function(callback){
	this.__default = callback;
}

SwitchMap.prototype.fire = function(value){
	if(this.__cases.has(value)){
		return this.__cases.get(value)();
	} else {
		return this.__default();
	}
}

module.exports = SwitchMap;