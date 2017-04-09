// errors : syntax error, runtime error(exception), logical error
// syntax error: parsing error : occurs at time of interpretation in javascript
// runtime error: exception : occurs at time of execution
// logical error: hard to track : mistake in logic : unexpected result after execution

//throwing error : syntax: throw(<errorMessage>) or throw new Error(<errorMessage>)

export default class errors {
	constructor() {
		//calling division function with positive value
		console.log(`Errors | division positive value | ${this.getDivision(10,20)}`);

		//calling division function with zero value
		console.log(`Errors | division positive value | ${this.getDivision(10,0)}`);
	}

	getDivision(num1, num2) {
		try{
			if (num2 == 0) {
				throw('divide by zero exception');
			}
			else {
				return num1/num2;
			}	
		}
		catch (error) {
			console.log(error);
		} finally {
			//executes everytime
			console.log('This is finally statement');
		}
	}
}