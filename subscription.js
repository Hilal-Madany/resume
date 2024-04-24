const form = document.getElementById('subscription-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;

  // Send data to Mailchimp API
  const url = 'https://your-mailchimp-server.com/subscribe';
  const data = { email, name };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for subscribing!');
    } else {
      alert('Something went wrong. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
});
