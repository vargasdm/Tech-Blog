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
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('.comment-form')
.addEventListener('submit', submitComment);

const commentPageVisible = async (event) => {
    event.preventDefault();
    let commentPartial = document.getElementsByClassName('none');
    let makeCommentBtn = document.getElementsById('comment-btn');
  
  visible = !visible

  if (visible) {
    commentPartial.classList.remove('none')
    makeCommentBtn.classList.add("none");
  } else {
    makeCommentBtn.classList.remove('none')
    commentPartial.classList.add("none");
  }

};

document
.querySelector('#comment-btn')
.addEventListener('click', commentPageVisible);

// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#project-name').value.trim();
//     const needed_funding = document.querySelector('#project-funding').value.trim();
//     const description = document.querySelector('#project-desc').value.trim();
  
//     if (name && needed_funding && description) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ name, needed_funding, description }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };
  
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