add=document.getElementById("add")
function user(){

    fname=document.getElementById('fn')
    lname=document.getElementById('ls')
    mb=document.getElementById('mobile')
    let data={}
    data.fname = fname.value;  // Access value of 'fname' input
    data.lname = lname.value;  // Access value of 'lname' input
    data.mb = mb.value; 
    console.log(data);
    let contacts = JSON.parse(localStorage.getItem('contactData')) || [];
    contacts.push(data);
    localStorage.setItem('contactData', JSON.stringify(contacts));
    displayContacts();
    alert('Data saved to localStorage!');
    
}

function displayContacts() {
  
    contactList.innerHTML = '';

  
    let contacts = JSON.parse(localStorage.getItem('contactData')) || [];


    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contactItem');
        contactDiv.innerHTML = `
            <p>${contact.fname} ${contact.lname} - ${contact.mb} 
                <button onclick="deleteContact(${index})">Delete</button>
                <a href="task4.html?index=${index}"><button>Update</button></a>
            </p>
        `;
        contactList.appendChild(contactDiv);
    });
}


function deleteContact(index) {
 
    let contacts = JSON.parse(localStorage.getItem('contactData')) || [];

   
    contacts.splice(index, 1);

   
    localStorage.setItem('contactData', JSON.stringify(contacts));

 
    displayContacts();
}


add.addEventListener('click',user)

displayContacts();
