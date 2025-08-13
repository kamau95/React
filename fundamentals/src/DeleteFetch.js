var okUrl = 'http://localhost:3000/photos/5001';

fetch(okUrl, {
    method: 'DELETE'
}).then( (response) =>{
    if(!response.ok) throw new Error(response.statusText);
    return response;
})
.then( (response) => response.json())
.then( (response) => console.log('success:',JSON.stringify(response)))
.catch( (error) => console.log('makosa', error));
