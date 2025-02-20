function fetchDetails() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(users => resolve(users))
            .catch(error => reject(error));
    });
}

function fetchMultipleUserDetails() {
    const userPromises = [fetchDetails(), fetchDetails(), fetchDetails()]; 
    
    Promise.all(userPromises)
        .then(results => {
            console.log('All user data:', results);
        })
        .catch(error => {
            console.error('Error with fetching users:', error);
        });
}

fetchMultipleUserDetails();
