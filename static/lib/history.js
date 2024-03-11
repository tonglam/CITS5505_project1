function copyToClipboard(id) {
  // copy content to clipboard
  const contentId = "#copyContent" + id;
  const text = $(contentId).text().trim();
  copyContent(text);

  // alert bar for 1.5 seconds
  copyAlert();
}

async function copyContent(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

async function copyAlert() {
  $("#copyAlert").removeClass("d-none");
  setTimeout(function () {
    $("#copyAlert").addClass("d-none");
  }, 1500);
}
