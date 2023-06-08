document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
  
    toggleBtn.addEventListener('change', function() {
      if (this.checked) {
        // Code to execute when the button is enabled
        console.log('Button enabled');
      } else {
        // Code to execute when the button is disabled
        console.log('Button disabled');
      }
    });
  });
  