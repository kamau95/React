const okUrl = 'http://localhost:3000/photos?_page=1&_limit=100';
const notFoundErrorUrl = 'https://httpstat.us/404';
const forbiddenErrorUrl = 'https://httpstat.us/403';
const serverErrorUrl = 'https://httpbin.org/status/500';

/***
fetch(okUrl)
.then( (response) => {
    console.log(response);
    return response
})
.then( (response)=> response.json())
.then( (data)=> console.log(data));
**/

fetch(serverErrorUrl)
.then( (response)=> {
    console.log(response);
    return response
})
.then( (response)=> response.json())
.then( (data)=> console.log(data))
.catch( (error)=>  console.log(error));