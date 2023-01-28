let visible = false;

const submitComment = async (event) => {
    event.preventDefault();

    // Collect values from the comment form
    const title = document.querySelector('#comment-title').value.trim();
    const content = document.querySelector('#comment-content').value.trim();

    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to post that you commented on page
            location.reload()
        } else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('.comment-form')
.addEventListener('submit', submitComment);

// THIS LOGIC MAKES A POST NOT A COMMENT
// const submitComment = async (event) => {
//     event.preventDefault();

//     // Collect values from the comment form
//     const title = document.querySelector('#comment-title').value.trim();
//     const content = document.querySelector('#comment-content').value.trim();

//     if (title && content) {
//         // Send a POST request to the API endpoint
//         const response = await fetch('/api/post/', {
//             method: 'POST',
//             body: JSON.stringify({ title, content }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             // If successful, redirect the browser to post that you commented on page
//             document.location.replace('/');
//         } else {
//             alert(response.statusText);
//         }
//     }
// };

document
.querySelector('.comment-form')
.addEventListener('submit', submitComment);

  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
//   document
//     .querySelector('.new-project-form')
//     .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);