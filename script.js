
  // // swal alert for news 
  // Swal.fire({
  //   title: 'English for communication',
  //   text: 'Enhance your English skills after iftar',
  //   imageUrl: 'https://scontent.ftun20-1.fna.fbcdn.net/v/t39.30808-6/481447864_683195520702600_8690655449005407217_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=v3Y_AT6wicYQ7kNvgHpDjNs&_nc_oc=AdhXkxLKMfCwIeVqADJhRqclZMAm8lAGcK20YsDcVgp5p9efmSucEbkWRy3k-TRgs-c&_nc_zt=23&_nc_ht=scontent.ftun20-1.fna&_nc_gid=AWQLGc-w10okq35CjDM53SY&oh=00_AYC94Uyq74c0AFFeHxWAjZiqH54BZk4nAq0_isXmsruUGw&oe=67CE9639',
  //   showCloseButton: true,
  //   background: '#162949',
  //   color: '#FFFFFF',
  //   titleColor: '#FA8E2C',
  //   showCancelButton: true,
  //   cancelButtonText: 'learn more',
  //   cancelButtonColor: '#162990',
  //   confirmButtonText: 'Register Now',
  //   confirmButtonColor: '#FA8E2C'
  // }).then((result) => {
  //   if (result.isConfirmed || result.isDismissed === true && result.dismiss === 'cancel') {
  //     window.location = 'https://brighthorizons.netlify.app/Application/';
  //   }
  // });

  // Initialize the carousel
  $(document).ready(function caroucel() {
      // Initialize the carousel
      $('.carousel').slick({
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 3, // Show 3 images by default (for large screens)
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          arrows: true,
          responsive: [
              {
                  breakpoint: 768, // Adjust for screens smaller than 768px
                  settings: {
                      slidesToShow: 1, // Show 1 image per slide on smaller screens
                      slidesToScroll: 1,
                      autoplaySpeed: 2000,
                      pauseOnHover: true,
                  }
              }
          ]
      });
  });
