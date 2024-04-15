$(document).ready(function () {
  // init theme
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    lightTheme();
  } else {
    darkTheme();
  }

  // change bottom navigation active color
  const titleFull = $("title").text();
  const title = titleFull.split(" - ")[0];
  const bottemId = "#bottom" + title;
  $(bottemId).css("color", "red");

  // change theme
  $("#light").click(function () {
    darkTheme();
    localStorage.setItem("theme", "dark");
  });
  $("#dark").click(function () {
    lightTheme();
    localStorage.setItem("theme", "light");
  });

  function lightTheme() {
    $("html").attr("data-bs-theme", "light");
    $("#light").removeClass("d-none");
    $("#dark").addClass("d-none");
    $(".bottom-menu").removeClass("btn-outline-light");
    $(".bottom-menu").addClass("btn-outline-dark");
    $(".github-button").removeClass("btn-outline-secondary");
    $(".github-button").addClass("btn-outline-dark");
  }

  function darkTheme() {
    $("html").attr("data-bs-theme", "dark");
    $("#dark").removeClass("d-none");
    $("#light").addClass("d-none");
    $(".bottom-menu").removeClass("btn-outline-dark");
    $(".bottom-menu").addClass("btn-outline-light");
    $(".github-button").removeClass("btn-outline-dark");
    $(".github-button").addClass("btn-outline-secondary");
  }

  // tooltip
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
