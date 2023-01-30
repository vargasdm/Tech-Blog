

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

let deleteBtns = document.querySelectorAll('.delete-btn')
for (let i = 0; i < deleteBtns.length; i++) {
    console.log(deleteBtns[i]);
    deleteBtns[i].addEventListener('click', delButtonHandler);
}
console.log(deleteBtns);

// let updateBtns = document.querySelectorAll('.update-btn')
// for (let i = 0; i < updateBtns.length; i++) {
//     console.log(updateBtns[i]);
//     updateBtns[i].addEventListener('click', updateButtonHandler);
// }
// console.log(updateBtns);