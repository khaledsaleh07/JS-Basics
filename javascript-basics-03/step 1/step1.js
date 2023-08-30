// Get a reference to the image element
const imageElement = document.querySelector('#image1');

// Add a mouseover event listener to the image
imageElement.addEventListener('mouseover', function() {
  // Add red border directly using inline style
  imageElement.style.border = '3px solid red';
});

// Add a mouseout event listener to the image
imageElement.addEventListener('mouseout', function() {
  // Remove the border by setting it to an empty value
  imageElement.style.border = '';
});