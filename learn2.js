function validateForm() {
    const name = document.getElementById('name').value.trim();
    const qualification = document.getElementById('qualification').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const position = document.getElementById('position').value;
  
    let errorMessages = '';
  
    if (name === '') {
      errorMessages += 'Name is required.<br>';
    }
  
    if (qualification === '') {
      errorMessages += 'Educational Qualification is required.<br>';
    }
  
    if (gender === null) {
      errorMessages += 'Gender is required.<br>';
    }
  
    if (position === '') {
      errorMessages += 'Position is required.<br>';
    }
  
    if (errorMessages !== '') {
      document.getElementById('errorMessages').innerHTML = errorMessages;
    } else {
      // Form is valid, proceed with submission
      alert('Form submitted successfully!');
      // Add form submission logic here (e.g., AJAX request)
    }
  }
  
  