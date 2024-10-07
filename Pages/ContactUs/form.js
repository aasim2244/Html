// Handle form submission
document.getElementById('formComponent')
  .addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const country = document.getElementById('country').value;
  const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(checkbox => checkbox.value);
  const newsletter = document.getElementById('newsletter').checked ? "Yes" : "No";

  // Log the form data (replace with actual submission logic)
  console.log("Form Data:");
  console.log("Name:", name);
  console.log("Country:", country);
  console.log("Interests:", interests);
  console.log("Newsletter:", newsletter);

  // Show a success message or further process the form data
  alert("Form submitted successfully!");
});
