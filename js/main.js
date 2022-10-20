

$(document).ready(function(){
  $('#main-slider').slick({
    arrow: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(document).ready(function(){
  $('#benefits_slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  })
