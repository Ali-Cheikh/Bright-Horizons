// swal application canceled
swal.fire({
    title: 'Application Canceled',
    text: 'The English for Communication Training is canceled due to lack of candidates',
    icon: 'error',
    background: '#162949',
    color:'white',
    confirmButtonColor: '#FA8E2C',
    confirmButtonText: 'Close page',
    allowOutsideClick: false,
    customClass: {
        container: 'bg-custom',
        title: 'text-headline',
    },}).then((result) => {
      if (result.isConfirmed) {
        window.location = 'https://google.com';
      }
});

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
      const url = "https://script.google.com/macros/s/AKfycbzewmnjdvrNFmLL3an2xcNlYn30toqGzFtQVaejOCNtfXt3nfuUPy-AEs4fcs72zuB7/exec";

      fetch(url, {
          method: "POST",
          body: formData,
      })
          .then((response) => response.json())
          .then((data) => {
              Swal.close();
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
          })
          .catch((error) => {
                if (canVibrate) navigator.vibrate(errorPattern);
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
                this.reset();// Reset form after successful submission
          });
  });
});