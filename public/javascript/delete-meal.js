async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = document.querySelector('.post-id').getAttribute('id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('#delete-meal')?.addEventListener('click', deleteFormHandler);
