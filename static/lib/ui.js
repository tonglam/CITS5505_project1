$(document).ready(function () {
  // init theme
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    darkTheme();
  } else {
    lightTheme();
  }

  // change navigation active color
  const titleFull = $("title").text();
  const title = titleFull.split(" - ")[0];
  const navId = "#nav" + title;

  $(navId).css("color", "blue");
  $(navId).css("font-weight", "bold");
  $(navId).css("text-decoration", "underline");

  // change bottom navigation active color
  bottemId = "#bottom" + title;
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
  }

  function darkTheme() {
    $("html").attr("data-bs-theme", "dark");
    $("#dark").removeClass("d-none");
    $("#light").addClass("d-none");
    $(".bottom-menu").removeClass("btn-outline-dark");
    $(".bottom-menu").addClass("btn-outline-light");
  }
});
