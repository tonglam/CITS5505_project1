const lyrics = [
  "[Song for Hyperlinks]",
  "In the early days when the internet was new",
  "A world of information",
  "Right at our fingertips",
  "From dial-up connections to high-speed broadband",
  "The digital revolution",
  "Changing the way we exist",
  "(Click, click, type away)",
  "Hyperlinks leading the way",
  "(Scroll, scroll, find your place)",
  "Discovering a whole new space",
  "HTML",
  "CSS",
  "Building blocks of the web",
  "Creating pages",
  "Websites",
  "A digital tapestry",
  "JavaScript brought interactivity to life",
  "With every click and hover",
  "A new possibility",
];

$(document).ready(function () {
  // start lyric movement
  lyric_movement();

  // add audio event listener
  const audio = document.getElementById("audio");
  audio.addEventListener("play", function () {
    lyric_movement();
  });

  audio.addEventListener("pause", function () {
    lyric_clear();
  });

  let totalWordCount = 0;

  // concept section
  totalWordCount += countElement(
    "concept-word-count",
    "concept-word-count-display"
  );

  // implementation section
  totalWordCount += countElement(
    "implement-word-count",
    "implement-word-count-display"
  );

  // browers handle hyperlink section
  totalWordCount += countElement(
    "browers-handle-word-count",
    "browers-handle-word-count-display"
  );

  // anchor tag section
  totalWordCount += countElement(
    "anchor-tag-word-count",
    "anchor-tag-word-count-display"
  );

  // http section
  totalWordCount += countElement("http-word-count", "http-word-count-display");

  // ajax section
  totalWordCount += countElement("ajax-word-count", "ajax-word-count-display");

  // http request section
  totalWordCount += countElement(
    "http-request-word-count",
    "http-request-word-count-display"
  );

  // http method section
  totalWordCount += countElement("http-method-word-count", null);

  // display total word count
  const totalWordCountMessage = `Total words: ${totalWordCount}`;
  const totalWordCountHtml = `<div class="text-info fs-5 mx-3">${totalWordCountMessage}</div>`;
  document.getElementById("total-word-count-display").innerHTML =
    totalWordCountHtml;
});

function lyric_movement() {
  const lyric_str = lyrics.join("; ");
  console.log(lyric_str);
  document.getElementById("lyric").innerHTML = lyrics.join(lyric_str);
  document.getElementById("lyric").style.animation =
    "move 1000s linear infinite";
}

function lyric_clear() {
  document.getElementById("lyric").style.animation = "";
}

function countElement(id, displayId) {
  let count = 0;
  const texts = document.querySelectorAll(`#${id}`);
  texts.forEach((text) => {
    str = text.textContent;
    count += countWord(str);
  });
  const wordCountMessage = `Words count by index.js: ${count}`;
  const wordCountHtml = `<figcaption class="blockquote-footer text-info text-center fs-6 mt-1 px-5">${wordCountMessage}</figcaption>`;

  if (document.getElementById(displayId) === null) {
    return count;
  }
  document.getElementById(displayId).innerHTML = wordCountHtml;
  return count;
}

function countWord(str) {
  return str
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "").length;
}
