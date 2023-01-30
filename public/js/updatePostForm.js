const updateButtonHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
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

let updateBtns = document.querySelectorAll('.update-btn')
for (let i = 0; i < updateBtns.length; i++) {
    console.log(updateBtns[i]);
    updateBtns[i].addEventListener('click', updateButtonHandler);
}
console.log(updateBtns);