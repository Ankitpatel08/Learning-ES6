// Callback : A function may be passed as a parameter to another function
// synccall : UI wait for other function to complete
export default class Callback {
	constructor() {	
	}

	_syncFunc(fn1, fn2) {
		fn1();
		fn2();
	}
	_asyncFunc(fn3, fn4) {
		setTimeout(function() {
			fn3();
			fn4();
		}, 2000);
	}
	_callSync() {
		//sync function : 
		this._syncFunc(function fn1() {
			console.log("Callback | this is function 1");
		}, function fn2() {
			console.log("Callback | this is function 2");
		});
		console.log("Callback | after sync call");
	}
	_callAsync() {
		//async function
		this._asyncFunc(function fn3() {
			console.log("Callback | this is function 3");
		}, function fn4() {
			console.log("Callback | this is function 4");
		});
		console.log("Callback | after async call");
	}	
}