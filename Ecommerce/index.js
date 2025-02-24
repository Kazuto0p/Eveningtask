card=document.getElementById("card")
main=document.getElementById("main")
str=""
url="https://dummyjson.com/products"
fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    data.products.map((item)=>{
        str+=`<div class="card" id="card">
            <img id="img1" src=${item.thumbnail} >
            <div id="box"><a href="product.html?url=${item.id}"><button id="btn">View Details</button></a></div>
        </div>`
    })
    main.innerHTML=str
})





