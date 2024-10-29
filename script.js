
$(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        Swal.fire({
            icon: 'info',
            title: 'Please wait...',
            text: 'Registering Your Contact',
            willOpen: () => {
                Swal.showLoading();
            },
            showConfirmButton: false,
            allowOutsideClick: false,
            
        });

        const formData = new FormData(this);

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxCKUkPnWifPBqJZRYKFNAXHH8Jm3kZ5-aZKydyv8PssNRgXWNRCx-GO11ld93kqgGi/exec',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.result === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Form submitted!',
                        text: 'Your are Registered We will be glad to have you.',
                        
                    });
                    $('#contact-form')[0].reset(); // Reset form after successful submission
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Form submitted!',
                        text: 'Your are Registered We will be glad to have you.',
                        
                    });
                }
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: 'There was an error Registering you. Please check your network connection or try again later.',
                    
                });
            }
        });
    });
});

// Set the target date for the info session
const targetDate = new Date("2024-10-31T17:00:00").getTime(); // Update to your desired date

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate time left
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `Starts In: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "The session has started!";
  }
}, 1000);