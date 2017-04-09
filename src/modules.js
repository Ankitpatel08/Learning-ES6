//modules : chunk of reusable js code
// from one component : export element{class, function,...}
// to use exported component : import statement

// export : single element : export <element>
// import : single element : import <element> from "<filePath>";

// export : multiple element : export {element1, element2, ...}
// import : multiple element : import {element1, element2, ...} from <filePath>;

export default class Modules{
	constructor(empName, empAge) {
		this.empName = empName,
		this.empAge = empAge;
	}

	_displayDetails() {
		console.log(`Employee Name : ${this.empName}`);
		console.log(`Employee Age : ${this.empAge}`);
	}	
}

