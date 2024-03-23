$(document).ready(function () {
  topScroll();
  scrollAni();
  tab();
});

// 퀵바
function topScroll() {
  $(".top").on("click", function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      500,
    );
  });
}

// 스크롤 애니메이션
function scrollAni() {
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
}

// 포트폴리오 탭
function tab() {
  let content = $(".content");
  
  $(".tab_menu li").on("click",function(){
    let customType = $(this).data("filter");
    content.hide();
    $(".tab_menu li").removeClass("active");
      content.filter(function(){
        return $(this).data("type") === customType;
      }).show();
    $(this).addClass("active");
  });

  $(".tab_menu li.all").on("click",function() {
    content.show();
  })
}

// 헤더 섹션 이동 이벤트
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
});
