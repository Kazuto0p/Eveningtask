fetch(" https://dummyjson.com/auth/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        username: 'emilys',
        password: 'emilyspass'
    }),
})
.then((response)=>response.json())
.then(data=>console.log(data))