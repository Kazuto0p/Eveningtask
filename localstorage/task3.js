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
    // Clear the existing list
    contactList.innerHTML = '';

    // Retrieve contacts from localStorage
    let contacts = JSON.parse(localStorage.getItem('contactData')) || [];

    // Display each contact with a delete button and an update button
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
    // Retrieve contacts from localStorage
    let contacts = JSON.parse(localStorage.getItem('contactData')) || [];

    // Remove the contact at the given index
    contacts.splice(index, 1);

    // Update the localStorage with the modified list
    localStorage.setItem('contactData', JSON.stringify(contacts));

    // Refresh the contact list display
    displayContacts();
}


add.addEventListener('click',user)

displayContacts();