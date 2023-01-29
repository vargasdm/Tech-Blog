const submitComment = async (event) => {
    event.preventDefault();

    // Collect values from the comment form
    const title = document.querySelector('#comment-title').value.trim();
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comment/', { 
            method: 'POST',
            body: JSON.stringify({ title, content, post_id}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, reload the page
            location.reload()
            console.log('the page was refreshed')
        } else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('.comment-form')
.addEventListener('submit', submitComment);

