async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error al obtener los posts, revisa la url en Postman ');
        }
        const data = await response.json();
        displayFetchedPosts(data);
    } catch (error) {
        displayErrorMessage(error);
    }
}

function displayFetchedPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ''; 

    posts.forEach(post => {
        const listItem = document.createElement('li');

       
        const titleElement = document.createElement('strong');
        titleElement.textContent = post.title;

        
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;

        
        listItem.appendChild(titleElement);
        listItem.appendChild(document.createElement('br')); 
        listItem.appendChild(bodyElement);

       
        postList.appendChild(listItem);
    });

    
    document.getElementById('posts-container').style.visibility = 'visible';
}

function displayErrorMessage(error) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Error: ' + error.message;
}

document.getElementById('fetch-posts').addEventListener('click', fetchPosts);
