
console.log("test");
async function submitPost (event)  {
    event.preventDefault();

    // Collect values from the post form
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    console.log(title);
    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, content, }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, reload the page
            document.location.replace(`/dashboard`);
            console.log('the page was refreshed')
        } else {
            alert(response.statusText);
        }
    }
};

document
    .getElementById('post-submit-btn')
    .addEventListener('click', submitPost);



const delButtonHandler = async (event) => {
    
    document.location.replace(`dashboard/edit/${id}`);
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    document.location.replace(`/dashboard`);
    // const id = event.target.getAttribute('data-id');


    const response = await fetch(`/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        location.reload()
        console.log('the page was refreshed')
    } else {
        alert('Failed to delete project');
    }
};


// document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);