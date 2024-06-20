!(function (e) {
  "use strict";
  jQuery(".sakura-falling").sakura();
})(),
  jQuery(document).ready(function (e) {
    "use strict";
    e("#customers-testimonials").owlCarousel({
      loop: !0,
      center: !0,
      items: 6,
      margin: 0,
      autoplay: !0,
      dots: !0,
      autoplayTimeout: 2e3,
      smartSpeed: 450,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1170: { items: 3 } },
    }),
      e(".frindes-img img , .zezo-img img").click(function () {
        var t = e(this).attr("src");
        e("#modal-image").attr("src", t),
          e("#image-modal").css("display", "flex");
      }),
      e(".close").click(function () {
        e("#image-modal").css("display", "none");
      });
  });
var countDownDate = new Date("Jun 23, 2024 00:00:00").getTime();
const heart = '<span style="font-size: 2rem;color:#dd1b1b;">♥️</span>';
var x = setInterval(function () {
  const e = document.getElementById("time");
  var t = new Date().getTime(),
    a = countDownDate - t,
    r = Math.floor(a / 864e5),
    n = Math.floor((a % 864e5) / 36e5),
    s = Math.floor((a % 36e5) / 6e4),
    i = Math.floor((a % 6e4) / 1e3);
  (e.innerHTML =
    "<div class='container'><div class='days block'>" +
    r +
    "<br>يوم</div><div class='hours block'>" +
    n +
    "<br>ساعه</div><div class='minutes block'>" +
    s +
    "<br>دقيقه</div><div class='seconds block'>" +
    i +
    "<br>ثانية</div></div>"),
    a < 0 &&
      (clearInterval(x),
      (e.innerHTML = `<h2 dir="rtl" style="color: #770f69; text-align: center;">\n            تم الزواج بحمد الله<br>🙏🏻${heart}\n    أسأل الله أن يبارك لهما🙏🏻${heart}<br>\n    وأن يرزقهما الذرية الصالحة🙏🏻${heart}\n    <br>\n    وأن يديم عليهما الحب والمودة في طاعته وعبادته🙏🏻${heart}\n    <br>\n    ${
        heart + heart + heart
      }\n</h2>`));
}, 1e3);
