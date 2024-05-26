document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const form = event.target;
    if (form.checkValidity()) {
        form.style.display = 'none';
        document.getElementById('validationMessage').style.display = 'block';
    } else {
        form.reportValidity();
    }
});