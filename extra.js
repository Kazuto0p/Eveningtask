
let data = []; 


na=document.createElement('input')
na.type='text';
na.placeholder="Name";
na.style.marginRight = '10px';
document.body.appendChild(na);
em=document.createElement('input')
em.type='email'
em.placeholder="email";
em.style.marginRight='10px'
document.body.appendChild(em);
ph=document.createElement('input');
ph.type='number';
ph.placeholder="Phone NO";
ph.style.marginRight='10px';
document.body.appendChild(ph)
a=document.createElement('button');
a.textContent='Add'
document.body.appendChild(a);

a.addEventListener('click',function(){


    let userData = {
        name: na.value,
        email: em.value,
        phone: ph.value
    };
    
    data.push(userData); 
    console.log(data);
    
    let container = document.createElement('div'); 
    container.style.marginTop = '10px';


    // document.body.appendChild(x)
    let na1=document.createElement('input')
    na1.type='text'
    na1.disabled = true;
    na1.value = na.value; 
    na1.style.marginTop='10px'
    na1.style.marginRight='10px'

    let em1=document.createElement('input')
    em1.type='text'
    em1.disabled = true;
    em1.value = em.value; 
    em1.style.marginTop='10px'
    em1.style.marginRight='10px'

    let ph1=document.createElement('input')
    ph1.type='number'
    ph1.disabled = true;
    ph1.value = ph.value; 
    ph1.style.marginTop='10px'
    ph1.style.marginRight='10px'

    let edit=document.createElement('button');
    edit.textContent="Edit";
    edit.style.marginTop='10px';
    edit.style.marginRight='10px'

    let save=document.createElement('button');
    save.textContent="Save";
    save.style.marginTop='10px';
    save.style.marginRight='10px'
    save.disabled=true;

    let del=document.createElement('button');
    del.textContent="Delete";
    del.style.marginTop='10px';
    del.style.marginRight='10px'

    edit.addEventListener('click', function(){
        na1.disabled=false;
        em1.disabled=false;
        ph1.disabled=false;
        save.disabled=false;

    })
    save.addEventListener('click',function(){
        na1.disabled=true;
        em1.disabled=true;
        ph1.disabled=true;


        userData.name = na1.value;
        userData.email = em1.value;
        userData.phone = ph1.value;
        save.disabled=true;
        console.log(data)

    })

    del.addEventListener('click', function () {
        if (confirm("Do you want to delete this Data?")) {
            let index = data.indexOf(userData);
        if (index !== -1) {
            data.splice(index, 1); // Remove the object from the array
        }
        container.remove(); // Remove the UI element
        console.log(data);
        }
    })

    container.appendChild(na1);
    container.appendChild(em1);
    container.appendChild(ph1);
    container.appendChild(edit);
    container.appendChild(save);
    container.appendChild(del);

    document.body.appendChild(container);

    na.value = "";
    em.value = "";
    ph.value = "";
})