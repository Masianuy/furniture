

$(document).ready(function(){
  $('.main-slider-img').slick({
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-slider-content',
  });
});
$(document).ready(function(){
  $('.main-slider-content').slick({
    arrows: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-slider-img',
    prevArrow:'.prev-arrow',
    nextArrow:'.next-arrow',
  });
});

$(document).ready(function(){
  $('#benefits_slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable:true,
    prevArrow:'.prev-benefit',
    nextArrow:'.next-benefit', 
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  });
});

const mobMenu = document.getElementById('hamburger');
const menuList = document.getElementById('nav');
mobMenu.addEventListener('click', function() {
  mobMenu.classList.toggle('close');
    if (mobMenu.classList.contains('close')) {
      menuList.style.transform = "translateX(0px)";
    } else {
      menuList.style.transform = "translateX(-320px)";
    }
})


const tabCategory = document.querySelectorAll('.category_item');
const categoriesContent = document.querySelectorAll('.category_content');

  tabCategory.forEach(function(item) {
    item.addEventListener('click' , function() {

      const currentCategory = item;
      const categoryName = currentCategory.getAttribute('data-category');
      const currentContaier = document.getElementById(categoryName);

      tabCategory.forEach(category => {
        category.classList.remove('active');
      })

      categoriesContent.forEach(content => {
        content.classList.remove('active');
      })

      currentCategory.classList.add('active');
      currentContaier.classList.add('active');
    })
  });

const allSliders = document.querySelectorAll('.main-slider-content .b-main_block');
const allSlidersNumber = document.querySelectorAll('.slider-count-all');
allSlidersNumber.forEach(item => {
  if(allSliders.length < 10) {
    item.innerHTML = '0' + allSliders.length;
  }
})
