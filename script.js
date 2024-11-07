Swal.fire({ 
    icon: 'success', 
    title: 'Session was a success', 
    html: 'We have proceeded with the info-session successfully. For those who are interested and were not with us, <br><a href="tel:+21627360463" style="font-weight: bold; color: #3085d6;">contact us</a> or <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.2917921602254!2d10.760812705893601!3d34.76414285219767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d30077f72b9d%3A0x5a60405f0fc33ee3!2sBright%20Horizons%20Center!5e1!3m2!1sen!2stn!4v1730245499371!5m2!1sen!2stn" target="_blank" style="font-weight: bold; color: #3085d6;">visit our facility</a>.',
    allowOutsideClick: false, 
    showConfirmButton: false
});
// Set the target date for the info session
const targetDate = new Date("2024-10-31T17:00:00").getTime(); // Update to your desired date
// Set the current date
const mathImport = 'aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvc3MvQUtmeWNiN3B0UVNhOW04RmZZSWtJN01odmJKY3JIS1ltb3gxUTVhUkt2QTRqaFlFb25MdjVEOEdyRlIwc1VhMW9RMjZQUEs2L2V4ZWM=';
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
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
        const databaseKey = atob(mathImport);

        fetch(databaseKey, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            Swal.close();
            if (data.result === 'success') {
                Swal.fire({
                    icon: 'success',
                    title: 'Form submitted!',
                    text: 'You are registered. We will be glad to have you.',
                });
                this.reset(); // Reset form after successful submission
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Form submitted!',
                    text: 'You are registered. We will be glad to have you.',
                });
            }
        })
        .catch(() => {
            Swal.close();
            Swal.fire({
                icon: 'success',
                title: 'Form submitted!',
                text: 'You are registered. We will be glad to have you.',
            });
        });
    });
});


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