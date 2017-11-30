/*
 * 
 * Author:Simba 
 * 
 * 
 * */
var EventHelper = {

	add: function(eventname, obj, handle) {
		if(obj.addEventListener) {
			obj.addEventListener(eventname, handle, false);
		} else if(obj.attachEvent) {
			obj.attachEvent("on" + eventname, handle);
		} else {
			obj["on" + eventname] = handle;
		}
	},

	remove: function(eventname, obj, handle) {
		if(obj.removeEventListener) {
			obj.removeEventListener(eventname, handle, false);
		} else if(obj.detachEvent) {
			obj.detachEvent("on" + eventname, handle);
		} else {
			obj["on" + eventname] = null;
		}
	}

}