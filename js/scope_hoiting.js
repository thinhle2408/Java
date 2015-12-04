(function (){
	"use strict";
	var globalScope = 'global_scope';
intit();
function intit() {
	var functionScope = "function_Scope";
		var i;
		var object = {
			name: "name",
			age: 12
		};
		console.log(object);
		console.log(JSON.stringify(object));
		console.log(i);
		for(var i=0; i<3;i++){
			console.log(i);
		}
		console.log(i);
	};
})();