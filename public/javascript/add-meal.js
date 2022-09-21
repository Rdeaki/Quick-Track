async function newFormHandler(event) {
  event.preventDefault();

  // Get the post title and calorie count from the form
  const title = document.querySelector('input[name="post-title"]').value;
  const calories = document.querySelector('input[name="post-calories"]').value;

  // use the add a new post POST route to add the post 
  // user id is added from the session information in the route
  const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        calories
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/');
      console.log('It works!')
    } else {
      alert(response.statusText);
    }
}


document.querySelector('.add-btn').addEventListener('click', newFormHandler);