// native Javascript fetch function example for interacting with RESTful APIs
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(json => console.log('error', json));

// promised-based function
const wait = (ms: number) => {
  return new Promise((resolve, reject) => {
    if (ms > 1000) {
      reject('Too Long');
    }
    setTimeout(() => {
      resolve('Successfully waited');
    }, ms);
  });
};

// consuming promised-based wait function
// resolve scenario
wait(500)
  .then(result => console.log('then>', result))
  .catch(error => console.log('catch', error));
//reject scenario
wait(1500)
  .then(result => console.log('then >', result))
  .catch(error => console.log('catch >', error));
