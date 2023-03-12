window.addEventListener("scroll",() => {
  const scrolled = window.scrollY;
  if(scrolled > 0){
    console.log('andil');
     document.querySelector('.navbar-lewagon').classList.add('active');
  }
  else {
    console.log('malla');
    document.querySelector('.navbar-lewagon').classList.remove('active');
  }

});

// swiper js

const headerswiper = new Swiper('.header-slider', {
  // Navigation arrows
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});

const productSwiper = new Swiper('.product-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
  },
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    },
  }
});




const reviewSlider = new Swiper('.review-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});


const dailySlider = new Swiper('.daily-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
  },
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    },
  }
});


const clientSlider = new Swiper('.client-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
  },
    breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    },
  }
});
//swiper for featured product




// search-form
const search = document.querySelector('.search')
const searchCancel = document.querySelector('.close-search')
document.querySelector(".cart-nav .search-icon").addEventListener("click", () => {
  // console.log(e.target)
  // alert('mandil')
  search.classList.add('active');

});

searchCancel.addEventListener("click", () => {
  search.classList.remove('active');
})



const navbar = document.querySelector("header .nav-ul");
document.querySelector("header .menu-btn").addEventListener("click", () => {
  navbar.classList.add('active');
});

document.querySelector(".nav-ul .nav-close").addEventListener("click", () => {
  navbar.classList.remove('active');
});


