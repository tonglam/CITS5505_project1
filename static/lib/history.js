$(document).ready(function () {
  // show history collapse by default
  const collapseElementList = document.querySelectorAll(".collapse");
  const collapseList = [...collapseElementList].map(
    (collapseEl) => new bootstrap.Collapse(collapseEl)
  );
  collapseList.forEach((collapse) => {
    collapse.show();
  });
});

function copyToClipboard(id) {
  const contentId = "#copyContent" + id;
  const text = $(contentId).text().replace(/\s+/g, " ").trim();
  copyContent(text);
  copyAlert(text);
}

async function copyContent(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

async function copyAlert(text) {
  $("#copyAlert").html(`<p>Copied to clickboard!</p><p>${text}</p>`);
  $("#copyAlert").removeClass("d-none");
  setTimeout(function () {
    $("#copyAlert").addClass("d-none");
  }, 3000);
}
