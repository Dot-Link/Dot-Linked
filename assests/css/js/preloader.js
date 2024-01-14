window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    //var sectionarrow = document.getElementsByClassName('.sectionarrow')
    preloader.style.display = 'none'; // Hide the preloader when the page is fully loaded
    //sectionarrow.style.display = 'none'

    // Show all sections after the preloader is hidden
    var sections = document.querySelectorAll('.section');
    
    sections.forEach(function (section) {
      section.style.display = 'block';
    });

        lightGallery(document.getElementById('gallery'), {
          plugins: [lgThumbnail, lgFullscreen, lgAutoplay],
          download: true,
          controls: true,
          thumbWidth: 95,
          thumbHeight: 95
      });
  });



  //preloader for the gallery 

