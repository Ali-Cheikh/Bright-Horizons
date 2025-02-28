document.addEventListener("DOMContentLoaded", function () {
    const canVibrate = window.navigator.vibrate;
    
    // Success vibration pattern (two short pulses)
    const successPattern = [100, 50, 100];
    
    // Error vibration pattern (one long pulse)
    const errorPattern = [500];
    document.getElementById("application-form").addEventListener("submit", function (e) {
      e.preventDefault();

      // Create FormData from the form
      const formData = new FormData(this);

      // Show loading alert
      Swal.fire({
          icon: "info",
          title: "Please wait...",
          text: "Submitting your application",
          willOpen: () => {
              Swal.showLoading();
          },
          showConfirmButton: false,
          allowOutsideClick: false,
          background: '#162949',
          customClass: {
              container: 'bg-custom',
              title: 'text-headline',
              content: 'text-body',
              confirmButton: 'text-body',
          },
      });

      // Google Apps Script URL - Update this with your new script URL
      const url = "https://script.google.com/macros/s/AKfycbwucssK6W9jidgnrJ-Uq1iwbOyiz4V1Soh6xS_OM7ZbcMJ_2pR-8SMg3iga7_j3ycag/exec";

      fetch(url, {
          method: "POST",
          body: formData,
      })
          .then((response) => response.json())
          .then((data) => {
              Swal.close();
              if (data.result === "success") {
                    if (canVibrate) navigator.vibrate(successPattern);
                  Swal.fire({
                      icon: "success",
                      title: "Application Submitted!",
                      text: "We will contact you soon to confirm your registration for the Ramadan English Sessions.",
                      background: '#162949',
                      confirmButtonColor: "#FA8E2C",
                      customClass: {
                          container: 'bg-custom',
                          title: 'text-headline',
                          content: 'text-body',
                          confirmButton: 'text-body',
                      },
                  });
                  this.reset(); // Reset form after successful submission
              } else {
                    if (canVibrate) navigator.vibrate(errorPattern);
                  Swal.fire({
                      icon: "error",
                      title: "Submission Failed",
                      text: "Please try again or contact us directly.",
                      background: '#162949',
                      confirmButtonColor: "#FA8E2C",
                      customClass: {
                          container: 'bg-custom',
                          title: 'text-headline',
                          content: 'text-body',
                          confirmButton: 'text-body',
                      },
                  });
              }
          })
          .catch((error) => {
              console.error('Error:', error);
                if (canVibrate) navigator.vibrate(errorPattern);
              Swal.fire({
                  icon: "error",
                  title: "Connection Error",
                  text: "Please check your internet connection and try again.",
                  background: '#162949',
                  confirmButtonColor: "#FA8E2C",
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