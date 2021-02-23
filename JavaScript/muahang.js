

//----   CHỌN LIST ẢNH   --------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}



//------- CHỌN SIZE -----------------
document.querySelector(".custom-select__wrapper").addEventListener("click", function () {
  this.querySelector(".select-box").classList.toggle("open");
});
for (const a of document.querySelectorAll(".wrapper_item")) {
  a.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".select-box").querySelector(
        ".select-box__item"
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function (e) {
  for (const select of document.querySelectorAll(".select-box")) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});



//------- ĐỔI MÀU NÚT THẢ TIM ------------------
function setColor(e) {
  var target = e.target,
    status = e.target.classList.contains('active-heart');

  e.target.classList.add(status ? 'inactive' : 'active-heart');
  e.target.classList.remove(status ? 'active-heart' : 'inactive');
}



//----- THU GỌN : THÔNG TIN SẢN PHẨM ------------
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-heart");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// --------- SẢN PHẨM LIÊN QUAN ------------------ 
let virtualWrap = document.querySelector(".virtual-wrap-slide");
    let virtualSlide = document.querySelectorAll(".virtual-slide");
    let virtualPrev = document.querySelector("#virtual-prev");
    let virtualNext = document.querySelector("#virtual-next");

    let virtualCounter = 0;
    let virtualSize = virtualSlide[0].clientWidth;
    virtualPrev.disabled = true;
    virtualPrev.style.opacity = "0.4";

    virtualWrap.style.transform = 'translateX(' + (-virtualSize * virtualCounter) + 'px)';

    virtualNext.addEventListener("click", () => {

      virtualWrap.style.transition = "transform 0.3s ease-in-out";
      virtualCounter++;
      virtualWrap.style.transform = 'translateX(' + (-virtualSize * virtualCounter) + 'px)';
      if (virtualSlide[virtualCounter].id === "lastvirtual") {
        virtualNext.disabled = true;


      };
    });


    virtualPrev.addEventListener("click", () => {
      virtualWrap.style.transition = "transform 0.3s ease-in-out";
      virtualCounter--;
      virtualWrap.style.transform = 'translateX(' + (-virtualSize * virtualCounter) + 'px)';
      if (virtualSlide[virtualCounter].id === "firstvirtual") {
        virtualPrev.disabled = true;
      }
    });

    virtualWrap.addEventListener("transitionend", () => {
      if (virtualSlide[virtualCounter].id === "lastvirtual") {
        virtualWrap.style.transition = "none";
        virtualNext.style.opacity = "0.3";
        virtualNext.style.cursor = "default";

      }
      else {
        virtualNext.style.opacity = "1";
        virtualNext.style.cursor = "pointer";
        virtualNext.disabled = false;
      }

      if (virtualSlide[virtualCounter].id === "firstvirtual") {
        virtualWrap.style.transition = "none";
        virtualPrev.style.opacity = "0.3";
        virtualPrev.style.cursor = "default";
      }
      else {
        virtualPrev.style.opacity = "1";
        virtualPrev.style.cursor = "pointer";
        virtualPrev.disabled = false;
      }
    })



    
// Nút go to top------------------
//Get the button
var mybutton = document.getElementById("myBtn");

// Khi lăn xuống 500px thì xuất hiện nút Go to top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Click go to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}









