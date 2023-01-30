async function submitPost(event) {
    event.preventDefault();

    // Collect values from the post form
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    console.log(title);
    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
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