const xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true)
xhr.onload = function(){
    if(xhr.status ===200){
        console.log("Respones",xhr.responseText);

    }else{
        console.error("Error:", xhr.status, xhr.statusText);
    }
}

xhr.send()