function myfunction() {
  var x = document.getElementById("show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Categories() {
  var x = document.getElementById("menu-cat");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

   $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite:true,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite:true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite:true,
          dots: true
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      
    ]
  });
 

    const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle_menu'),
    closeMenu = document.getElementById('close_menu')
   
   toggleMenu.addEventListener('click',() =>{
    navMenu.classList.toggle('showNavbar')
   });
   closeMenu.addEventListener('click',() =>{
    navMenu.classList.remove('showNavbar')
   });
