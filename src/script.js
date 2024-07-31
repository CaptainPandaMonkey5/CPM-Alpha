document.addEventListener("DOMContentLoaded", function () {
  const repoButton1 = document.getElementById("repoButton1");
  const repoButton2 = document.getElementById("repoButton2");
  const repoButton3 = document.getElementById("repoButton3");
  const repoButton4 = document.getElementById("repoButton4");

  repoButton1.addEventListener("click", function () {
    var lwp_link = this.getAttribute("data-link");
    window.open(lwp_link, "_blank");
  });

  repoButton2.addEventListener("click", function () {
    var cpmA_link = this.getAttribute("data-link");
    window.open(cpmA_link, "_blank");
  });

  repoButton3.addEventListener("click", function () {
    var felProject_link = this.getAttribute("data-link");
    window.open(felProject_link, "_blank");
  });

  repoButton4.addEventListener("click", function () {
    var randomPicker_link = this.getAttribute("data-link");
    window.open(randomPicker_link, "_blank");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const webButton1 = document.getElementById("webButton1");

  webButton1.addEventListener("click", function () {
    var randomPickerWeb_link = this.getAttribute("data-link");
    window.open(randomPickerWeb_link, "_blank");
  });
});

document.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  if (window.scrollY >= sticky) {
    navbar.classList.add("fixed", "top-0", "w-full", "z-50", "max-w-7xl");
  } else {
    navbar.classList.remove("fixed", "top-0", "w-full", "z-50", "max-w-7xl");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const starProjectGH = document.getElementById("starProjectGH");
  const starProjectWeb = document.getElementById("starProjectWeb");

  starProjectGH.addEventListener("click", function () {
    var starProjectGH_link = this.getAttribute("data-link");
    window.open(starProjectGH_link, "_blank");
  });

  starProjectWeb.addEventListener("click", function () {
    var starProjectWeb_link = this.getAttribute("data-link");
    window.open(starProjectWeb_link, "_blank");
  });
});
