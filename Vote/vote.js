// Swal.fire({
//     icon: 'success',
//     title: 'Session was a success',
//     html: 'We have proceeded with the info-session successfully. For those who are interested and were not with us, <br><a href="tel:+21627360463" style="font-weight: bold; color: #3085d6;">contact us</a> or <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.2917921602254!2d10.760812705893601!3d34.76414285219767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d30077f72b9d%3A0x5a60405f0fc33ee3!2sBright%20Horizons%20Center!5e1!3m2!1sen!2stn!4v1730245499371!5m2!1sen!2stn" target="_blank" style="font-weight: bold; color: #3085d6;">visit our facility</a>.',
//     allowOutsideClick: false,
//     showConfirmButton: false
// });
// Set the target date for the info session

const decrement = () => {
  const input = document.getElementById("quantity");
  const currentValue = parseInt(input.value, 10);
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
};

const increment = () => {
  const input = document.getElementById("quantity");
  input.value = parseInt(input.value, 10) + 1;
};

function setInterest(interest) {
  const feedbackDiv = document.getElementById("feedbackDiv");

  if (interest === "not-interested") {
    // Show the textarea if "Not Interested" is selected
    feedbackDiv.classList.remove("hidden");
  } else {
    // Hide the textarea if "Interested" is selected
    feedbackDiv.classList.add("hidden");
  }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("vote-form").addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Create FormData from the form
      const formData = new FormData(this);
  
      // Show the "Please wait" loading alert
      Swal.fire({
        icon: "info",
        title: "Please wait...",
        text: "Registering Your Contact",
        willOpen: () => {
          Swal.showLoading();
        },
        showConfirmButton: false,
        allowOutsideClick: false,
        customClass: {
          container: 'bg-custom',           // Apply the custom background color
          title: 'text-headline',           // Apply custom title color
          content: 'text-body',             // Apply custom body text color
          confirmButton: 'text-body',       // Confirm button text color
        },
      });
  
      const url = "https://script.google.com/macros/s/AKfycbwcwsEksWdbw5wgcf7JohOziwyRxy_D9jIDt_7hxk3QK6zwP9ni9HIaX2_O23Fym6is/exec";
  
      fetch(url, {
        method: "POST",
        body: formData,  // Send the form data
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.close();  // Close the "Please wait" alert
          if (data.result === "success") {
            Swal.fire({
              icon: "success",
              title: "Form submitted!",
              text: "Thank you for your time",
              customClass: {
                container: 'bg-custom',
                title: 'text-headline',
                content: 'text-body',
                confirmButton: 'text-body',
              },
            });
            this.reset(); // Reset form after successful submission
          } else {
            Swal.fire({
              icon: "error",
              title: "Something went wrong",
              text: "Please try again.",
              customClass: {
                container: 'bg-custom',
                title: 'text-headline',
                content: 'text-body',
                confirmButton: 'text-body',
              },
            });
          }
        })
        .catch(() => {
          Swal.close();  // Close the "Please wait" alert
          Swal.fire({
            icon: "success",
            title: "Form submitted!",
            text: "Thank you for your time",
            customClass: {
              container: 'bg-custom',
              title: 'text-headline',
              content: 'text-body',
              confirmButton: 'text-body',
            },
          });
        });
    });
  });
  