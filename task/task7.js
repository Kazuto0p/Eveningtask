function post(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
        if(!response.ok){
            throw new Error("Data not fetched");
            
        }
        return response.json()
    });
}



function fetchComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            return response.json();
        });
}

function fetchCommentsandPost(){
    post()
    .then(posts=>{
        if(posts.length>0){
            const firstpost=posts[0]
            console.log("FirstPost",firstpost);
            return fetchComments(firstpost.id);
            } else {
                throw new Error('No posts available');
            }
        })
        .then(comments => {
            console.log('Comments for the first post:', comments);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

fetchCommentsandPost()