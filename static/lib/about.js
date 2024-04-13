// language
const HTML_URL = "https://developer.mozilla.org/en-US/docs/Web/HTML/";
const CSS_URL = "https://developer.mozilla.org/en-US/docs/Web/CSS/";
const JAVASCRIPT_URL =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/";
const TYPESCRIPT_URL = "https://www.typescriptlang.org/";
const JAVA_URL = "https://www.java.com/";
const PYTHON_URL = "https://www.python.org/";
const SQL_URL = "https://www.sql.org/";
const R_URL = "https://www.r-project.org/";
const SHELL_URL = "https://www.shellscript.sh/";

// framework
const REACT_URL = "https://reactjs.org/";
const NEXTJS_URL = "https://nextjs.org/";
const NODEJS_URL = "https://nodejs.org/";
const TAILWINDCSS_URL = "https://tailwindcss.com/";
const SPRINGBOOT_URL = "https://spring.io/projects/spring-boot";
const MYBATIS_URL = "https://mybatis.org/mybatis-3/";
const THYMELEAF_URL = "https://www.thymeleaf.org/";
const FLASK_URL = "https://flask.palletsprojects.com/";
const EXPRESS_URL = "https://expressjs.com/";

// database
const SQLITE_URL = "https://www.sqlite.org/";
const MYSQL_URL = "https://www.mysql.com/";
const POSTGRESQL_URL = "https://www.postgresql.org/";
const MONGODB_URL = "https://www.mongodb.com/";
const REDIS_URL = "https://redis.io/";

// devTool
const GIT_URL = "https://git-scm.com/";
const DOCKER_URL = "https://www.docker.com/";
const JENKINS_URL = "https://www.jenkins.io/";
const GITHUB_ACTION_URL = "https://docs.github.com/en/actions";
const NGINX_URL = "https://www.nginx.com/";
const POSTMAN_URL = "https://www.postman.com/";
const AWS_URL = "https://aws.amazon.com/";

// agile
const JIRA_URL = "https://www.atlassian.com/software/jira";
const CONFLUENCE_URL = "https://www.atlassian.com/software/confluence";
const KANBAN_URL = "https://www.atlassian.com/agile/kanban";

// project
const FPL_URL = "https://github.com/tonglam/fpl-public";
const FPL_READ_URL =
  "https://github.com/tonglam/fpl-public/blob/main/README.md";
const FPL_DATA_URL = "https://github.com/tonglam/fpl-data-public";
const FPL_DATA_READ_URL =
  "https://github.com/tonglam/fpl-data-public/blob/main/README.md";
const LETLETME_WEB_URL = "https://github.com/tonglam/letletme-web";
const LETLETME_WEB_READ_URL =
  "https://github.com/tonglam/letletme-web/blob/main/README.md";
const MINIPROGRAM_LETLETME_URL =
  "https://github.com/tonglam/miniprogram-letletme";
const MINIPROGRAM_LETLETME_READ_URL =
  "https://github.com/tonglam/miniprogram-letletme/blob/main/README.md";
const LETLETME_DATA_URL = "https://github.com/tonglam/letletme_data";
const LETLETME_DATA_READ_URL =
  "https://github.com/tonglam/letletme_data/blob/main/README.md";
const FPLDLE_PYTHON_URL = "https://github.com/tonglam/fpldle-python";
const FPL_ANALYSIS_2223_URL = "https://github.com/tonglam/fpl_analysis_2223";
const FPL_ANALYSIS_2223_READ_URL = "https://rpubs.com/tonglam/1077811";
const REPAIR_LABS_URL = "https://github.com/codersforcauses/repair-labs";
const REPAIR_LABS_READ_URL =
  "https://github.com/codersforcauses/repair-labs/blob/main/README.md";
const FPL_CHALLENGE_DATA_URL = "https://github.com/tonglam/fpl_challenge_data";
const FPL_CHALLENGE_DATA_READ_URL =
  "https://github.com/tonglam/fpl_challenge_data/blob/main/README.md";
const TELEGRAM_BOT_URL = "https://github.com/tonglam/telegramBot-public";

// url_map
const language_url_map = {
  html: HTML_URL,
  css: CSS_URL,
  js: JAVASCRIPT_URL,
  ts: TYPESCRIPT_URL,
  java: JAVA_URL,
  py: PYTHON_URL,
  sql: SQL_URL,
  r: R_URL,
  shell: SHELL_URL,
};

const framework_url_map = {
  react: REACT_URL,
  next: NEXTJS_URL,
  node: NODEJS_URL,
  tailwind: TAILWINDCSS_URL,
  springboot: SPRINGBOOT_URL,
  mybatis: MYBATIS_URL,
  thymeleaf: THYMELEAF_URL,
  flask: FLASK_URL,
  express: EXPRESS_URL,
};

const database_url_map = {
  sqlite: SQLITE_URL,
  mysql: MYSQL_URL,
  pg: POSTGRESQL_URL,
  mongo: MONGODB_URL,
  redis: REDIS_URL,
};

const devTool_url_map = {
  git: GIT_URL,
  docker: DOCKER_URL,
  jenkins: JENKINS_URL,
  action: GITHUB_ACTION_URL,
  nginx: NGINX_URL,
  postman: POSTMAN_URL,
  aws: AWS_URL,
};

const agile_url_map = {
  jira: JIRA_URL,
  confluence: CONFLUENCE_URL,
  kanban: KANBAN_URL,
};

const project_url_map = {
  fpl: FPL_URL,
  fpl_read: FPL_READ_URL,
  fpl_data: FPL_DATA_URL,
  fpl_data_read: FPL_DATA_READ_URL,
  letletme_web: LETLETME_WEB_URL,
  letletme_web_read: LETLETME_WEB_READ_URL,
  miniprogram_letletme: MINIPROGRAM_LETLETME_URL,
  miniprogram_letletme_read: MINIPROGRAM_LETLETME_READ_URL,
  letletme_data: LETLETME_DATA_URL,
  letletme_data_read: LETLETME_DATA_READ_URL,
  fpldle_python: FPLDLE_PYTHON_URL,
  fpl_analysis_2223: FPL_ANALYSIS_2223_URL,
  fpl_analysis_2223_read: FPL_ANALYSIS_2223_READ_URL,
  repair_labs: REPAIR_LABS_URL,
  repair_labs_read: REPAIR_LABS_READ_URL,
  fpl_challenge_data: FPL_CHALLENGE_DATA_URL,
  fpl_challenge_data_read: FPL_CHALLENGE_DATA_READ_URL,
  telegram_bot: TELEGRAM_BOT_URL,
};

const url_map = {
  ...language_url_map,
  ...framework_url_map,
  ...database_url_map,
  ...devTool_url_map,
  ...agile_url_map,
  ...project_url_map,
};

function handleCardClick(name) {
  url = url_map[name];
  console.log("click to: name: [%s], url: [%s]", name, url);
  if (url) {
    window.open(url, "_blank");
  }
}

// genertate random data

async function handleRandomClick() {
  const fake_person_url = "https://fakerapi.it/api/v1/persons?_quantity=1";
  const person_data = await fetch(fake_person_url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.error("fetch fake person data error", error));

  const name = person_data[0].firstname + " " + person_data[0].lastname;
  const email = person_data[0].email;
  const phone = person_data[0].phone;

  document.getElementById("fullname").value = name;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;

  const fake_text_url =
    "https://fakerapi.it/api/v1/texts?_quantity=1&_characters=100";
  const text_data = await fetch(fake_text_url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.error("fetch fake text data error", error));

  const title = text_data[0].title;
  const content = text_data[0].content;

  document.getElementById("subject").value = title;
  document.getElementById("message").value = content;
}

// hide the placeholder card and show the real card

window.addEventListener("load", function () {
  const placeholderCards = document.querySelectorAll(".placeholder-card");
  placeholderCards.forEach((card) => {
    card.classList.add("d-none");
  });

  const realCards = document.querySelectorAll(".real-card");
  realCards.forEach((card) => {
    card.classList.remove("d-none");
  });
});

// send message toast

$(document).ready(function () {
  const toastTrigger = document.getElementById("sendMessage");
  if (toastTrigger) {
    toastTrigger.addEventListener("click", () => {
      toastShow();
    });
  }
});

toastShow = () => {
  if (validateContactForm()) {
    const toast = document.getElementById("toast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
    toastBootstrap.show();
    // clear the form
    clearContactForm();
  }
};

// contact form validation

function validateContactForm() {
  const fullname = document.getElementById("fullname").value;
  if (fullname === "") {
    formAlert("Please enter your name.");
    return false;
  }

  const email = document.getElementById("email").value;
  if (email === "") {
    formAlert("Please enter your email.");
    return false;
  }

  const subject = document.getElementById("subject").value;
  if (subject === "") {
    formAlert("Please enter the subject.");
    return false;
  }

  const message = document.getElementById("message").value;
  if (message === "") {
    formAlert("Please enter the message.");
    return false;
  }

  formAlert("Message sent successfully.", true);
  return true;
}

function clearContactForm() {
  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

// form validation alert

function formAlert(message, valid = false) {
  const formAlert = document.getElementById("formAlert");
  if (valid) {
    formAlert.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <div>${message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `;
  } else {
    formAlert.innerHTML = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <div>${message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `;
  }

  // close automatically
  setTimeout(() => {
    formAlert.innerHTML = "";
  }, 2000);
}
