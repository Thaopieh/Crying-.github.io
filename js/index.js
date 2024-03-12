function setupCarousel(carouselId) {
  const multipleItemCarousel = document.querySelector(carouselId);

  if (multipleItemCarousel) { // Kiểm tra xem carousel có tồn tại không
    if (window.matchMedia("(min-width:576px)").matches) {
      const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
      });

      var carouselWidth = $(multipleItemCarousel).find(".carousel-inner").prop('scrollWidth');
      var cardWidth = $(multipleItemCarousel).find(".carousel-item").width();

      var scrollPosition = 0;

      $(multipleItemCarousel).find(".carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition = scrollPosition + 4*cardWidth;
          $(multipleItemCarousel).find(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
      });
      $(multipleItemCarousel).find(".carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          scrollPosition = scrollPosition - 4*cardWidth;
          $(multipleItemCarousel).find(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
      });
    } else {
      $(multipleItemCarousel).addClass("slide");
    }
  } else {
    console.error("Carousel with ID " + carouselId + " not found.");
  }
}

// Bắt sự kiện click trên nút prev và next của carousel và gọi hàm setupCarousel
$(".carousel-control-prev, .carousel-control-next").click(function() {
  // Lấy giá trị của thuộc tính data-bs-target
  var carouselId = $(this).attr("data-bs-target");
  // Lấy ID của carousel từ chuỗi
  setupCarousel(carouselId);
});
 // Function to toggle collapse and button styles

    function toggleCollapse(btnNumber) {
      const buttons = document.querySelectorAll('.btn-outline-info');
      buttons.forEach((button, index) => {
        if (index + 1 === btnNumber) {
          button.classList.add('active');
          button.style.color = '#fff'; // White text color
          button.style.backgroundColor = '#10294D'; // Blue background color
        } else {
          button.classList.remove('active');
          button.style.color = '#10294D'; // Blue text color
          button.style.backgroundColor = '#f0f2f5'; // White background color
        }
      });

      for (let i = 1; i <= 3; i++) {
        const collapseId = 'noi-dung-collapse' + i;
        const collapseElement = document.getElementById(collapseId);
        if (i === btnNumber) {
          collapseElement.classList.add('show');
        } else {
          collapseElement.classList.remove('show');
        }
      }
    }


    //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}