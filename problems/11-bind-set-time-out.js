function boundFuncTimer(obj, func, delay) {
  // Your code here 
    setTimeout(() => {
      func.call(obj)
    }, delay)
}



// sayHello = () => {console.log(`Hello this is ${this.name}`)}
// 	callMeLater(delay) {
// 		setTimeout(() => {
// 			console.log(`Hello this is ${this.name}`)
// 		}, delay)
// }
  

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
