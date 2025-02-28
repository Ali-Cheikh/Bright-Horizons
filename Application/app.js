document.addEventListener("DOMContentLoaded", function () {
    const canVibrate = window.navigator.vibrate;
    const successPattern = [100, 50, 100];
    const errorPattern = [500];

    document.getElementById("application-form").addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Convert form data to URL parameters
        const formData = new FormData(this);
        const params = new URLSearchParams(formData).toString();
        const url = `https://script.google.com/macros/s/AKfycbyrC3anXDh0v4M2aSFqicWN8OmMZ0HXsTvGbwjCp0wksVosuE3FjQs_NcliMFhOEHnH/exec${params}`;

        // Show loading alert
        Swal.fire({
            icon: "info",
            title: "Please wait...",
            text: "Submitting your application",
            willOpen: () => Swal.showLoading(),
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

        // Use JSONP approach
        const script = document.createElement('script');
        const callback = 'callback_' + Date.now();
        
        window[callback] = function(data) {
            Swal.close();
            if (data.result === "success") {
                if (canVibrate) navigator.vibrate(successPattern);
                Swal.fire({
                    icon: "success",
                    title: "Application Submitted!",
                    text: "We will contact you soon to confirm your registration.",
                    background: '#162949',
                    confirmButtonColor: "#FA8E2C",
                    customClass: {
                        container: 'bg-custom',
                        title: 'text-headline',
                        content: 'text-body',
                        confirmButton: 'text-body',
                    },
                });
                e.target.reset();
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
            document.body.removeChild(script);
            delete window[callback];
        };

        script.src = `${url}&callback=${callback}`;
        document.body.appendChild(script);
    });
});