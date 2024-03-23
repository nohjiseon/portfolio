$(document).ready(function () {
  // 퀵바
  function top() {
    $(".top").on("click", function () {
      $("html").animate(
        {
          scrollTop: 0,
        },
        500,
      );
    });
  }
  top();

  $(window).on("scroll", function () {
    let scr = $(this).scrollTop();
    let box1 = $("#aboutme_scr");
    let box2 = $("#portfolio_scr");
    let offset1 = box1.offset().top - 400;
    let offset2 = box2.offset().top - 500;

    if (scr >= 0 && scr < offset1) {
      box1.removeClass("ani3");
    } else if (scr > offset1 && scr < offset2) {
      box1.addClass("ani3");
      box2.removeClass("back_color");
    } else if (scr > offset2) {
      box2.addClass("back_color");
    }
  });

  $(".faq_btn button").on("click", function () {
    var $tap = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".faq_list").removeClass("active");
    var contents = $(".faq_list");
    $(contents[$tap]).addClass("active");
    if ($(this).index() === 0) {
      // 학교사업탭 활성화
      $("#schoolPageArea").show();
      $("#teuniPageArea").hide();
      $("#activeTabValue").val("S");
    } else {
      // 트니사업탭 활성화
      $("#schoolPageArea").hide();
      $("#teuniPageArea").show();
      $("#activeTabValue").val("T");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault(); // 기본 동작(페이지 이동)을 막음

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth", // 부드럽게 스크롤되도록 함
        });
      }
    });
  }
});
