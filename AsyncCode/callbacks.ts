// Execution code w/ callbacks
let firstName: string;
setTimeout(() => {
  (firstName = 'Fred'), console.log('firstName in callback', firstName);
}, 1000);
console.log('firstName after setTimeout', firstName);

//Handling callback errors
interface IResult {
  success: boolean;
  error?: any;
}
let result: IResult = { success: true };
setTimeout(() => {
  try {
    throw new Error('Something went wrong');
  } catch (ex) {
    result.success = false;
    result.error = ex;
  }
}, 1000);
console.log(result);
