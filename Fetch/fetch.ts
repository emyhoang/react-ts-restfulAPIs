// getting data
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));

// getting the response status
fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
  console.log(response.status, response.ok); // 200, true
});

// getting the response status
fetch('https://jsonplaceholder.typicode.com/posts/1001').then(response => {
  console.log(response.status, response.ok); // 404, false
});

// handling errors in catch method, catches response only in 200 range
fetch('')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(json => console.log('error', json));

// creating data with fetch aka post data
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Interesting post',
    body: 'This is an interesting post about ...',
    userId: 1
  })
})
  .then(response => {
    console.log(response.status);
    return response.json();
  })
  .then(data => console.log(data));

// adding headers - e.g. Content-type, bearer token
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'bearer some-bearer-token'
  },
  body: JSON.stringify({
    title: 'Interesting post',
    body: 'This is an interesting post about...',
    userId: 1
  })
})
  .then(response => {
    console.log(response.status);
    return response.json();
  })
  .then(data => console.log(data));

// Changing data aka put some data
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Corrected post',
    body: 'This is corrected post about ...',
    userId: 1
  })
})
  .then(response => {
    console.log(response.status);
    return response.json();
  })
  .then(data => console.log(data));

// patch some data (submit portion of a resource)

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Corrected post'
  })
})
  .then(response => {
    console.log(response.status);
    return response.json();
  })
  .then(data => console.log(data));

// deleting data with fetch
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
}).then(response => {
  console.log(response.status);
});
