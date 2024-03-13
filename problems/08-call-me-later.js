// Your code here 

class CallCenter{
	constructor(name) {
		this.name = name
	}
	sayHello = () => {console.log(`Hello this is ${this.name}`)}
	callMeLater(delay) {
		setTimeout(() => {
			console.log(`Hello this is ${this.name}`)
		}, delay)
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
