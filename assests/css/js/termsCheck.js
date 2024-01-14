
  //for the popup of the term and conditions
      // Check if the user has already accepted the terms
document.addEventListener('DOMContentLoaded', function() {
var accepted = localStorage.getItem('termsAccepted');
if (!accepted) {
    var customModal = new bootstrap.Modal(document.getElementById('customModal'));
    customModal.show();
    }
});
// Function to handle the acceptance of terms
function acceptTerms() {
    // Set a flag in local storage
    localStorage.setItem('termsAccepted', true);

    // Close the modal
    var customModal = new bootstrap.Modal(document.getElementById('customModal'));
    customModal.hide();
}