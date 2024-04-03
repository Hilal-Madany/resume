const downloadLink = document.getElementById('downloadLink');
const eBookUrl = 'https://example.com/new-technical-ebook.pdf';

downloadLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = eBookUrl;
});