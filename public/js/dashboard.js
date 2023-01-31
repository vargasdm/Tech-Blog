// function to delete a post when the delete post button is clicked
const delButtonHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/dashboard/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    }
};

// for loop that adds the event listener to each button
let deleteBtns = document.querySelectorAll('.delete-btn')
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', delButtonHandler);
}

