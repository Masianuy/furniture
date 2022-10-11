$(document).ready(function() {
  $('#benefits_slider').owlCarousel({
    loop:true,
    margin:30,
    autoWidth:false,
    dots: false,
    nav: true,
    navText:["<div class='nav-btn prev-slide'><</div>","<div class='nav-btn next-slide'>></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  })
});

