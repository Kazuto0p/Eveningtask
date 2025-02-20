btn=document.getElementById("btn")
// x=document.createElement("div")
function click(){

        console.log("Loading Data .....");
        
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                if(!response.ok){
                    throw new Error("Data is not fetched");

                }return response.json();

            })

            

            .then(data => {
                console.log(data)
                d=document.createElement("div")
                const five = data.slice(0,5)
                const x = document.createElement("div");

                five.forEach(post => {
                    const postDiv = document.createElement("div");

                    
                    const titleSpan = document.createElement("span");
                    titleSpan.innerHTML = `Title: ${post.title}`;

                    const bodySpan = document.createElement("span");
                    bodySpan.innerHTML = `<br>Body: ${post.body}`;

                    
                    postDiv.appendChild(titleSpan);
                    postDiv.appendChild(bodySpan);

                    
                    x.appendChild(postDiv);
                });
                document.body.appendChild(x)
            })
            .catch(error=>console.error(error))
        },2000)
        
    
    
}
btn.addEventListener('click',click)