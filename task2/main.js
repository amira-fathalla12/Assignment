  // Function to hide the input when something is entered
  function hideInput() {
    const inputField = document.getElementById('disappearingInput');
    if (inputField.value !== "") {
        inputField.classList.add('hidden');
    }
}