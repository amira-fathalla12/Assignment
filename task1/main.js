// Function to clear all form fields
function clearForm(formId = 'validatedForm') {
    const form = document.getElementById(formId);
    form.reset();
  }

  // Function to encrypt data before submitting
  function encryptData(formId = 'validatedForm') {
    const form = document.getElementById(formId);
    
    // Encrypt each input field
    form.firstName.value = btoa(form.firstName.value);
    form.lastName.value = btoa(form.lastName.value);
    form.phoneNumber.value = btoa(form.phoneNumber.value);
  }