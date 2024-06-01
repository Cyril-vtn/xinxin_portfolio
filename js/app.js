const preview_container = document.getElementById('preview');

function removePreview() {
  preview_container.classList.add('hide-with-animation');
  setTimeout(() => {
    preview_container.remove();
  }, 3000);
}

// when the user presses any key, remove the preview container with animation
document.addEventListener('keydown', removePreview);

// when the user clicks anywhere, remove the preview container with animation
document.addEventListener('click', removePreview);