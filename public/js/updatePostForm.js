const updateButtonHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#updated-title').value.trim();
    const content = document.querySelector('#updated-content').value.trim();

    if (event.target.hasAttribute('data-id')) {
        if (title && content) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/dashboard/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    };
};
};
